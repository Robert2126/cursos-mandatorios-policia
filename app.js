// Controlador Principal de la Aplicación (SPA)
// Gestiona el estado de aprendizaje, navegación, localStorage y evaluación con simulación de IA

document.addEventListener("DOMContentLoaded", () => {
  // Estado local de la aplicación
  let state = {
    currentCourseIndex: 0,
    currentModuleIndex: 0,
    progress: {}, // Estructura: { "id_modulo": { completed: boolean, score: number, answers: {} } }
    theme: "light",
    questions: [], // Guardará las 100 preguntas del JSON
    currentQuestionIndex: 0,
    questionsScore: { correct: 0, incorrect: 0 }
  };

  // Elementos del DOM
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const coursesList = document.getElementById("courses-list");
  const globalProgressFill = document.getElementById("global-progress-fill");
  const globalProgressText = document.getElementById("global-progress-text");
  
  // Vistas principales
  const welcomeView = document.getElementById("welcome-view");
  const moduleView = document.getElementById("module-view");
  const congratsView = document.getElementById("congrats-view");
  
  // Botones de Bienvenida y Certificación
  const startLearningBtn = document.getElementById("start-learning-btn");
  const resetProgressBtn = document.getElementById("reset-progress-btn");

  // Elementos de la vista de Módulo
  const moduleCourseBadge = document.getElementById("module-course-badge");
  const moduleTitle = document.getElementById("module-title");
  const moduleScenarioDesc = document.getElementById("module-scenario-desc");
  const moduleRoleText = document.getElementById("module-role-text");
  const moduleObjectivesList = document.getElementById("module-objectives-list");

  // Controladores de Pestañas
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  const nextTabBtns = document.querySelectorAll(".next-tab-btn");
  const prevTabBtns = document.querySelectorAll(".prev-tab-btn");
  
  // Textareas y Envío
  const inputEmpatizar = document.getElementById("input-empatizar");
  const inputDefinir = document.getElementById("input-definir");
  const inputIdear = document.getElementById("input-idear");
  const inputPrototipar = document.getElementById("input-prototipar");
  const submitToIaBtn = document.getElementById("submit-to-ia-btn");
  
  // Sección de Evaluación (IA)
  const iaStatusText = document.getElementById("ia-status-text");
  const iaChatBox = document.getElementById("ia-chat-box");
  const evaluationScoreCard = document.getElementById("evaluation-score-card");
  const gaugeFill = document.getElementById("gauge-fill");
  const scoreText = document.getElementById("score-text");
  const scoreVerdictTitle = document.getElementById("score-verdict-title");
  const scoreVerdictDesc = document.getElementById("score-verdict-desc");
  const evalActions = document.getElementById("eval-actions");
  const retryModuleBtn = document.getElementById("retry-module-btn");
  const nextModuleBtn = document.getElementById("next-module-btn");

  // Elementos de la Evaluación de 100 Preguntas
  const questionsView = document.getElementById("questions-view");
  const goQuestionsBtn = document.getElementById("go-questions-btn");
  const exitQuestionsBtn = document.getElementById("exit-questions-btn");
  const questionNumberTitle = document.getElementById("question-number-title");
  const questionsScoreTracker = document.getElementById("questions-score-tracker");
  const questionBodyArea = document.getElementById("question-body-area");
  const questionOptionsArea = document.getElementById("question-options-area");
  const questionFeedbackArea = document.getElementById("question-feedback-area");
  const prevQuestionBtn = document.getElementById("prev-question-btn");
  const nextQuestionBtn = document.getElementById("next-question-btn");

  // -------------------------------------------------------------
  // Inicialización y Carga de Progreso
  // -------------------------------------------------------------
  function init() {
    loadProgress();
    renderSidebar();
    updateGlobalProgress();
    setupEventListeners();
  }

  function loadProgress() {
    const savedProgress = localStorage.getItem("policia_cursos_progress");
    const savedTheme = localStorage.getItem("policia_cursos_theme");
    
    if (savedProgress) {
      state.progress = JSON.parse(savedProgress);
    }
    
    if (savedTheme) {
      state.theme = savedTheme;
      if (state.theme === "light") {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggle.querySelector(".mode-icon").textContent = "🌙";
      }
    }
  }

  function saveProgress() {
    localStorage.setItem("policia_cursos_progress", JSON.stringify(state.progress));
    updateGlobalProgress();
    renderSidebar();
  }

  // -------------------------------------------------------------
  // Renderizado del Menú Lateral (Sidebar)
  // -------------------------------------------------------------
  function renderSidebar() {
    coursesList.innerHTML = "";
    let isPreviousCompleted = true; // El primer módulo siempre está desbloqueado

    COURSES_DATA.forEach((course, courseIdx) => {
      const courseGroup = document.createElement("div");
      courseGroup.className = "course-group";
      
      const groupTitle = document.createElement("div");
      groupTitle.className = "course-group-title";
      groupTitle.textContent = course.title;
      courseGroup.appendChild(groupTitle);

      course.modules.forEach((mod, modIdx) => {
        const navItem = document.createElement("button");
        navItem.className = "nav-item";
        
        const isCompleted = state.progress[mod.id]?.completed || false;
        const isActive = state.currentCourseIndex === courseIdx && state.currentModuleIndex === modIdx && moduleView.classList.contains("active");
        
        let statusIcon = "🔒";
        let isLocked = !isPreviousCompleted;

        // Desbloqueado si el anterior fue completado
        if (!isLocked) {
          statusIcon = isCompleted ? "✅" : "📖";
        }

        if (isActive) {
          navItem.classList.add("active");
        }

        if (isLocked) {
          navItem.classList.add("locked");
          navItem.disabled = true;
        }

        navItem.innerHTML = `
          <div class="nav-item-content">
            <span class="nav-status-icon">${statusIcon}</span>
            <span>${mod.title.substring(3)}</span>
          </div>
        `;

        if (!isLocked) {
          navItem.addEventListener("click", () => {
            selectModule(courseIdx, modIdx);
          });
        }

        courseGroup.appendChild(navItem);
        isPreviousCompleted = isCompleted; // Actualizar para el siguiente módulo
      });

      coursesList.appendChild(courseGroup);
    });
  }

  // Actualizar Barra de Progreso Global
  function updateGlobalProgress() {
    const totalModules = COURSES_DATA.reduce((acc, course) => acc + course.modules.length, 0);
    const completedModules = Object.keys(state.progress).filter(key => state.progress[key].completed).length;
    
    const percentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
    globalProgressFill.style.width = `${percentage}%`;
    globalProgressText.textContent = `${percentage}%`;

    // Si ha completado todo
    if (percentage === 100) {
      showView(congratsView);
    }
  }

  // -------------------------------------------------------------
  // Control de Vistas y Selección de Módulos
  // -------------------------------------------------------------
  function showView(view) {
    welcomeView.classList.remove("active");
    moduleView.classList.remove("active");
    congratsView.classList.remove("active");
    questionsView.style.display = "none";
    
    if (view === questionsView) {
      questionsView.style.display = "flex";
    } else {
      view.classList.add("active");
    }
    renderSidebar();
  }

  function selectModule(courseIdx, modIdx) {
    state.currentCourseIndex = courseIdx;
    state.currentModuleIndex = modIdx;
    
    const moduleData = COURSES_DATA[courseIdx].modules[modIdx];
    
    // Cargar textos en la interfaz
    moduleCourseBadge.textContent = COURSES_DATA[courseIdx].title;
    moduleTitle.textContent = moduleData.title;
    moduleScenarioDesc.textContent = moduleData.scenario.description;
    moduleRoleText.textContent = moduleData.scenario.role;
    
    // Limpiar y cargar objetivos
    moduleObjectivesList.innerHTML = "";
    moduleData.scenario.objectives.forEach(obj => {
      const li = document.createElement("li");
      li.textContent = obj;
      moduleObjectivesList.appendChild(li);
    });

    // Cargar preguntas e instrucciones de Design Thinking
    document.getElementById("instruction-empatizar").textContent = moduleData.designThinking.empatizar.question;
    inputEmpatizar.placeholder = moduleData.designThinking.empatizar.placeholder;
    
    document.getElementById("instruction-definir").textContent = moduleData.designThinking.definir.question;
    inputDefinir.placeholder = moduleData.designThinking.definir.placeholder;
    
    document.getElementById("instruction-idear").textContent = moduleData.designThinking.idear.question;
    inputIdear.placeholder = moduleData.designThinking.idear.placeholder;
    
    document.getElementById("instruction-prototipar").textContent = moduleData.designThinking.prototipar.question;
    inputPrototipar.placeholder = moduleData.designThinking.prototipar.placeholder;

    // Configurar Video de Apoyo y sus métricas
    const videoCard = document.getElementById("module-video-card");
    const videoIframe = document.getElementById("module-video-iframe");
    const videoDescText = document.getElementById("module-video-description-text");
    const metricProcType = document.getElementById("metric-proc-type");
    const metricProcMeans = document.getElementById("metric-proc-means");
    const metricProcLaw = document.getElementById("metric-proc-law");

    if (moduleData.videoUrl) {
      videoIframe.src = moduleData.videoUrl;
      
      // Reemplazar saltos de línea \n por etiquetas <br> para que el navegador los renderice correctamente
      videoDescText.innerHTML = (moduleData.videoDescription || "Sin transcripción disponible.").replace(/\n/g, "<br>");
      
      // Cargar Métricas
      metricProcType.textContent = moduleData.metrics?.type || "General";
      metricProcMeans.textContent = moduleData.metrics?.means || "Estándar";
      metricProcLaw.textContent = moduleData.metrics?.law || "Normativa General";

      videoCard.style.display = "block";
    } else {
      videoIframe.src = "";
      videoCard.style.display = "none";
    }

    // Configurar Imagen de Caso
    const caseImageContainer = document.getElementById("module-case-image-container");
    const caseImage = document.getElementById("module-case-image");
    if (moduleData.imageSrc) {
      caseImage.src = moduleData.imageSrc;
      caseImageContainer.style.display = "block";
    } else {
      caseImage.src = "";
      caseImageContainer.style.display = "none";
    }

    // Restaurar respuestas previas si existen
    const savedModData = state.progress[moduleData.id];
    if (savedModData && savedModData.answers) {
      inputEmpatizar.value = savedModData.answers.empatizar || "";
      inputDefinir.value = savedModData.answers.definir || "";
      inputIdear.value = savedModData.answers.idear || "";
      inputPrototipar.value = savedModData.answers.prototipar || "";
    } else {
      inputEmpatizar.value = "";
      inputDefinir.value = "";
      inputIdear.value = "";
      inputPrototipar.value = "";
    }

    // Resetear pestaña de evaluación
    evaluationScoreCard.style.display = "none";
    evalActions.style.display = "none";
    iaChatBox.innerHTML = "";
    iaStatusText.textContent = "Esperando que envíes la propuesta...";

    // Ir a la primera pestaña
    switchTab("empatizar");
    showView(moduleView);
  }

  function switchTab(tabId) {
    tabBtns.forEach(btn => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    tabPanels.forEach(panel => {
      if (panel.id === `panel-${tabId}`) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }

  // -------------------------------------------------------------
  // Algoritmo de Simulación de Evaluación IA
  // -------------------------------------------------------------
  function evaluateAnswers() {
    const currentCourse = COURSES_DATA[state.currentCourseIndex];
    const currentModule = currentCourse.modules[state.currentModuleIndex];
    
    const answersText = [
      inputEmpatizar.value,
      inputDefinir.value,
      inputIdear.value,
      inputPrototipar.value
    ].join(" ").toLowerCase();

    // Análisis semántico simulado basado en palabras clave normativas
    const perfectKeywords = currentModule.evaluation.perfectKeywords;
    let matchesCount = 0;
    const foundKeywords = [];

    perfectKeywords.forEach(kw => {
      if (answersText.includes(kw.toLowerCase())) {
        matchesCount++;
        foundKeywords.push(kw);
      }
    });

    // Calcular puntaje
    const matchPercentage = perfectKeywords.length > 0 ? (matchesCount / perfectKeywords.length) * 100 : 100;
    // Dar un puntaje base de 30% por responder y sumarle el proporcional
    let finalScore = Math.min(100, Math.round(30 + (matchPercentage * 0.7)));

    // Si está muy vacío, penalizar severamente
    if (answersText.trim().length < 40) {
      finalScore = 15;
    }

    // Iniciar animación del chat de IA
    iaChatBox.innerHTML = "";
    iaStatusText.textContent = "Evaluando propuesta...";
    
    // Crear mensaje del usuario
    appendChatMessage("user", "Oficial de Policía", `Presento mi plan de acción de 5 fases basado en Design Thinking para resolver el caso de '${currentModule.scenario.title}'.`);

    // Retrasar respuesta de la IA para simular procesamiento cognitivo
    setTimeout(() => {
      let feedback = "";
      let verdictTitle = "";
      let verdictDesc = "";
      
      if (finalScore >= 80) {
        feedback = currentModule.evaluation.iaResponseGood;
        verdictTitle = "Procedimiento Aprobado";
        verdictDesc = "Excelente desempeño. Aplicas las leyes y protocolos de forma correcta y humana.";
      } else if (finalScore >= 50) {
        feedback = currentModule.evaluation.iaResponseRegular;
        verdictTitle = "Requiere Ajustes";
        verdictDesc = "Tu procedimiento cumple parcialmente, pero debes afinar los fundamentos jurídicos y de comunicación.";
      } else {
        feedback = currentModule.evaluation.iaResponseBad;
        verdictTitle = "Procedimiento No Aprobado";
        verdictDesc = "Peligro de sanción legal o violación de DDHH. Revisa la normativa del módulo.";
      }

      appendChatMessage("ia", "Asistente IA de Procedimiento", feedback);

      // Mostrar puntuación y veredicto
      evaluationScoreCard.style.display = "flex";
      scoreText.textContent = `${finalScore}%`;
      
      // Actualizar el Gauge Circular SVG
      // 125 es el dasharray máximo para la semicircunferencia del SVG gauge
      const offset = 125 - (125 * (finalScore / 100));
      gaugeFill.style.strokeDashoffset = offset;

      // Asignar colores al gauge según puntaje
      if (finalScore >= 80) {
        gaugeFill.style.stroke = "var(--success)";
        scoreText.style.color = "var(--success)";
      } else if (finalScore >= 50) {
        gaugeFill.style.stroke = "var(--warning)";
        scoreText.style.color = "var(--warning)";
      } else {
        gaugeFill.style.stroke = "var(--error)";
        scoreText.style.color = "var(--error)";
      }

      scoreVerdictTitle.textContent = verdictTitle;
      scoreVerdictDesc.textContent = verdictDesc;
      
      iaStatusText.textContent = "Evaluación finalizada.";
      evalActions.style.display = "flex";

      // Guardar en el estado si aprueba
      if (finalScore >= 80) {
        state.progress[currentModule.id] = {
          completed: true,
          score: finalScore,
          answers: {
            empatizar: inputEmpatizar.value,
            definir: inputDefinir.value,
            idear: inputIdear.value,
            prototipar: inputPrototipar.value
          }
        };
        saveProgress();
      }
    }, 2000);
  }

  function appendChatMessage(sender, name, message) {
    const msgElement = document.createElement("div");
    msgElement.className = `chat-message ${sender}`;
    msgElement.innerHTML = `
      <span class="chat-message-sender">${name}</span>
      <p>${message}</p>
    `;
    iaChatBox.appendChild(msgElement);
    iaChatBox.scrollTop = iaChatBox.scrollHeight;
  }

  // -------------------------------------------------------------
  // Lógica de Evaluación Teórica (100 Preguntas)
  // -------------------------------------------------------------
  async function loadQuestions() {
    try {
      const response = await fetch("preguntas_evaluacion.json");
      state.questions = await response.json();
      renderQuestion();
    } catch (error) {
      console.error("Error al cargar las preguntas:", error);
      questionBodyArea.textContent = "Error al cargar las preguntas. Asegúrate de estar ejecutando la app a través de un servidor local o de habilitar peticiones HTTP.";
    }
  }

  function renderQuestion() {
    if (state.questions.length === 0) return;
    
    const q = state.questions[state.currentQuestionIndex];
    questionNumberTitle.textContent = `Pregunta ${state.currentQuestionIndex + 1} de ${state.questions.length}`;
    questionBodyArea.textContent = q.question;
    
    // Limpiar opciones
    questionOptionsArea.innerHTML = "";
    questionFeedbackArea.style.display = "none";

    // Cargar puntuaciones
    questionsScoreTracker.textContent = `Aciertos: ${state.questionsScore.correct} | Errores: ${state.questionsScore.incorrect}`;

    q.options.forEach((option, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = option;
      
      // Manejar la selección
      btn.addEventListener("click", () => selectOption(idx, btn));
      questionOptionsArea.appendChild(btn);
    });

    // Controlar visibilidad de botones de navegación
    prevQuestionBtn.disabled = state.currentQuestionIndex === 0;
    nextQuestionBtn.textContent = state.currentQuestionIndex === state.questions.length - 1 ? "Finalizar Evaluación" : "Siguiente Pregunta";
  }

  function selectOption(selectedIdx, buttonElement) {
    const q = state.questions[state.currentQuestionIndex];
    
    // Evitar responder dos veces a la misma pregunta
    if (questionFeedbackArea.style.display === "block") return;

    // Resaltar opciones correctas/incorrectas
    const buttons = questionOptionsArea.querySelectorAll(".option-btn");
    buttons.forEach((btn, idx) => {
      if (idx === q.correct) {
        btn.classList.add("correct");
      } else if (idx === selectedIdx) {
        btn.classList.add("incorrect");
      }
      btn.disabled = true;
    });

    // Actualizar puntajes
    if (selectedIdx === q.correct) {
      state.questionsScore.correct++;
      questionFeedbackArea.textContent = "¡Respuesta Correcta! Excelente conocimiento de la doctrina policial.";
      questionFeedbackArea.style.background = "rgba(16, 185, 129, 0.15)";
      questionFeedbackArea.style.color = "var(--success)";
    } else {
      state.questionsScore.incorrect++;
      questionFeedbackArea.textContent = `Respuesta Incorrecta. La opción correcta era: ${q.options[q.correct]}`;
      questionFeedbackArea.style.background = "rgba(239, 68, 68, 0.15)";
      questionFeedbackArea.style.color = "var(--error)";
    }
    questionFeedbackArea.style.display = "block";
    questionsScoreTracker.textContent = `Aciertos: ${state.questionsScore.correct} | Errores: ${state.questionsScore.incorrect}`;
  }

  // -------------------------------------------------------------
  // Configuración de Event Listeners
  // -------------------------------------------------------------
  function setupEventListeners() {
    // Alternancia de tema (Claro por defecto)
    themeToggle.addEventListener("click", () => {
      if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeToggle.querySelector(".mode-icon").textContent = "☀️";
        state.theme = "dark";
      } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggle.querySelector(".mode-icon").textContent = "🌙";
        state.theme = "light";
      }
      localStorage.setItem("policia_cursos_theme", state.theme);
    });

    // Iniciar aprendizaje
    startLearningBtn.addEventListener("click", () => {
      selectModule(0, 0);
    });

    // Pestañas del Workspace
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab");
        // No permitir ir a evaluar directamente sin enviar o si no se ha completado
        if (tabId === "evaluar" && evaluationScoreCard.style.display === "none") {
          return;
        }
        switchTab(tabId);
      });
    });

    // Botones de flujo entre pestañas
    nextTabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const nextTab = btn.getAttribute("data-next");
        switchTab(nextTab);
      });
    });

    prevTabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const prevTab = btn.getAttribute("data-prev");
        switchTab(prevTab);
      });
    });

    // Enviar a la IA
    submitToIaBtn.addEventListener("click", () => {
      switchTab("evaluar");
      evaluateAnswers();
    });

    // Corregir Propuesta
    retryModuleBtn.addEventListener("click", () => {
      switchTab("empatizar");
    });

    // Siguiente Módulo
    nextModuleBtn.addEventListener("click", () => {
      // Buscar el siguiente módulo secuencialmente
      const currentCourse = COURSES_DATA[state.currentCourseIndex];
      if (state.currentModuleIndex + 1 < currentCourse.modules.length) {
        selectModule(state.currentCourseIndex, state.currentModuleIndex + 1);
      } else if (state.currentCourseIndex + 1 < COURSES_DATA.length) {
        selectModule(state.currentCourseIndex + 1, 0);
      } else {
        // Fin de la certificación
        showView(congratsView);
      }
    });

    // Eventos de la Evaluación de 100 Preguntas
    goQuestionsBtn.addEventListener("click", () => {
      showView(questionsView);
      if (state.questions.length === 0) {
        loadQuestions();
      }
    });

    exitQuestionsBtn.addEventListener("click", () => {
      showView(welcomeView);
    });

    prevQuestionBtn.addEventListener("click", () => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
      }
    });

    nextQuestionBtn.addEventListener("click", () => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion();
      } else {
        alert(`Has completado la evaluación teórica.\nRespuestas Correctas: ${state.questionsScore.correct}\nRespuestas Incorrectas: ${state.questionsScore.incorrect}`);
        showView(welcomeView);
      }
    });

    // Controladores de Eventos del Chat Flotante de IA
    const aiFloatingBtn = document.getElementById("ai-floating-btn");
    const aiFloatingChat = document.getElementById("ai-floating-chat");
    const closeFloatingChatBtn = document.getElementById("close-floating-chat-btn");
    const floatingChatBody = document.getElementById("floating-chat-body");
    const floatingChatInput = document.getElementById("floating-chat-input");
    const floatingChatSendBtn = document.getElementById("floating-chat-send-btn");

    aiFloatingBtn.addEventListener("click", () => {
      if (aiFloatingChat.style.display === "flex") {
        aiFloatingChat.style.display = "none";
      } else {
        aiFloatingChat.style.display = "flex";
        floatingChatBody.scrollTop = floatingChatBody.scrollHeight;
      }
    });

    closeFloatingChatBtn.addEventListener("click", () => {
      aiFloatingChat.style.display = "none";
    });

    function sendFloatingMessage() {
      const text = floatingChatInput.value.trim();
      if (!text) return;

      // Mensaje de usuario
      const userMsg = document.createElement("div");
      userMsg.className = "chat-message user";
      userMsg.innerHTML = `<span class="chat-message-sender">Oficial</span><p>${text}</p>`;
      floatingChatBody.appendChild(userMsg);
      floatingChatInput.value = "";
      floatingChatBody.scrollTop = floatingChatBody.scrollHeight;

      // Respuesta de IA simulada con capacidad de análisis de red y fuentes de la Policía Nacional de Colombia
      setTimeout(() => {
        let reply = "🔍 **[Búsqueda en Internet ejecutada]** Consultando base de doctrina de la Dirección de Educación Policial y Normatividad Nacional...<br><br>";
        const textLower = text.toLowerCase();

        if (textLower.includes("captura") || textLower.includes("flagrancia") || textLower.includes("arma de fuego") || textLower.includes("porte ilegal")) {
          reply += "👮 **Procedimiento de Captura en Flagrancia por Porte Ilegal (Art. 365 C.P.):**<br>" +
                   "1. **Identificación y Registro:** Abordar con medidas de seguridad (triangulación), realizar registro personal e incautar el arma de fuego de forma segura.<br>" +
                   "2. **Lectura de Derechos (Art. 303 C.P.P.):** Comunicarle al capturado de forma verbal e inmediata sus derechos (motivo de captura, derecho a un abogado, derecho a guardar silencio, derecho a comunicarse con un familiar).<br>" +
                   "3. **Traslado y Judicialización:** Conducir al capturado de inmediato a las instalaciones de la Fiscalía General de la Nación (URI) para dejarlo a disposición.<br><br>" +
                   "📋 **Formatos y Documentos que debes Diligenciar obligatoriamente:**<br>" +
                   "- **Acta de Derechos del Capturado:** Firmada por el capturado y el uniformado.<br>" +
                   "- **Primer Respondiente (FPJ-04):** Formato básico de actuación de policía judicial.<br>" +
                   "- **Acta de Incautación y Embalaje de Elementos Materiales Probatorios (FPJ-07/08):** Para registrar el arma de fuego y garantizar su cadena de custodia.<br>" +
                   "- **Informe Ejecutivo de Captura en Flagrancia (FPJ-05):** Detallando circunstancias de tiempo, modo y lugar.<br><br>" +
                   "🌐 *Fuentes institucionales validadas: Código de Procedimiento Penal (Ley 906 de 2004), Manual de Policía Judicial de la Fiscalía y Policía Nacional.*";
        } else if (textLower.includes("ley 1801") || textLower.includes("convivencia") || textLower.includes("código")) {
          reply += "La **Ley 1801 de 2016** establece el Código Nacional de Seguridad y Convivencia Ciudadana. Regula las categorías de convivencia (seguridad, tranquilidad, ambiente y salud pública) y faculta el uso de medidas correctivas de carácter eminentemente preventivo.<br><br>" +
                   "📋 **Formatos a diligenciar:** Orden de Comparendo Nacional y Acta de Mediación Policial (si aplica).<br>" +
                   "🌐 *Fuentes: Portal oficial del Senado de la República de Colombia / Ley 1801.*";
        } else if (textLower.includes("taser") || textLower.includes("uso de la fuerza") || textLower.includes("fuerza")) {
          reply += "El uso de la fuerza se rige bajo los principios de **Necesidad, Proporcionalidad, Legalidad y Temporalidad** según la **Resolución 02903 de 2017**.<br>" +
                   "Los dispositivos de control eléctrico (Taser) se consideran armas menos letales y requieren una distancia mínima de seguridad de 7 metros antes del despliegue táctico.<br><br>" +
                   "📋 **Formatos a diligenciar:** Informe de Uso de la Fuerza (Formato único institucional).<br>" +
                   "🌐 *Fuentes: Dirección General de la Policía Nacional - Resolución 02903.*";
        } else if (textLower.includes("derechos humanos") || textLower.includes("dh") || textLower.includes("vida")) {
          reply += "En toda actuación, la protección al derecho a la vida es tu prioridad absoluta. El ingreso a domicilio sin orden judicial (Art. 32 Constitucional y Art. 163 de Ley 1801) se fundamenta únicamente bajo imperiosa necesidad o voces de auxilio inmediato.<br><br>" +
                   "📋 **Formatos a diligenciar:** Informe Administrativo de Ingreso a Domicilio por Clamor de Auxilio.<br>" +
                   "🌐 *Fuentes: Constitución Política de Colombia (Art. 32) / Corte Constitucional colombiana.*";
        } else if (textLower.includes("esposamiento") || textLower.includes("esposas")) {
          reply += "El esposamiento es una medida preventiva de seguridad táctica. Debe realizarse con el sujeto en posición manos atrás, asegurando el doble seguro en los anillos para evitar lesiones en las muñecas y posibles reclamaciones disciplinarias ante la Inspección General.<br><br>" +
                   "🌐 *Fuentes: Manual de Patrullaje Urbano y Táctica Policial de la Policía Nacional de Colombia.*";
        } else if (textLower.includes("uniforme") || textLower.includes("tonfa")) {
          reply += "El reglamento de uniformes (**Resolución 3372 de 2009**) establece que el porte del uniforme es impecable. El bastón tonfa debe ubicarse siempre al lado opuesto del arma de fuego en tu cinturón multipropósito y portarse obligatoriamente en todo servicio de vigilancia.<br><br>" +
                   "🌐 *Fuentes: Resolución 3372 de 2009 - Dirección General de la Policía Nacional.*";
        } else {
          reply += "He buscado en las bases de doctrina policial. Recuerda que ante cualquier procedimiento general en calle, debes priorizar el diálogo utilizando la técnica **SEA Policía** (Saludar, Escuchar, Actuar) antes de recurrir a medidas físicas o tácticas de fuerza.<br><br>" +
                   "🌐 *Fuentes: Manual de Convivencia y Seguridad Ciudadana de la Policía Nacional.*";
        }

        const iaMsg = document.createElement("div");
        iaMsg.className = "chat-message ia";
        iaMsg.innerHTML = `<span class="chat-message-sender">Asistente IA</span><p>${reply}</p>`;
        floatingChatBody.appendChild(iaMsg);
        floatingChatBody.scrollTop = floatingChatBody.scrollHeight;
      }, 1200);
    }

    floatingChatSendBtn.addEventListener("click", sendFloatingMessage);
    floatingChatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendFloatingMessage();
    });

    // Reiniciar Progreso
    resetProgressBtn.addEventListener("click", () => {
      if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso de capacitación?")) {
        state.progress = {};
        state.questionsScore = { correct: 0, incorrect: 0 };
        state.currentQuestionIndex = 0;
        saveProgress();
        selectModule(0, 0);
      }
    });
  }

  // Lanzar aplicación
  init();
});

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
    questionsScore: { correct: 0, incorrect: 0 },
    currentScenario: null // Guarda el escenario aleatorio seleccionado para este módulo
  };

  // Elementos del DOM
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const coursesList = document.getElementById("courses-list");
  const globalProgressFill = document.getElementById("global-progress-fill");
  const globalProgressText = document.getElementById("global-progress-text");
  const goHomeBtn = document.getElementById("go-home-btn");
  const goHomeBannerBtn = document.getElementById("go-home-banner-btn");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebarNav = document.getElementById("sidebar-nav");
  
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
            // Ocultar la barra lateral en móviles después de seleccionar
            if (window.innerWidth <= 1024) {
              sidebarNav.classList.remove("show-mobile");
            }
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
    
    // Lógica dinámica: Seleccionar un escenario al azar si existe un array 'scenarios'
    if (moduleData.scenarios && moduleData.scenarios.length > 0) {
      const randomIndex = Math.floor(Math.random() * moduleData.scenarios.length);
      state.currentScenario = moduleData.scenarios[randomIndex];
    } else {
      state.currentScenario = moduleData.scenario;
    }
    
    // Cargar textos en la interfaz
    moduleCourseBadge.textContent = COURSES_DATA[courseIdx].title;
    moduleTitle.textContent = moduleData.title;
    moduleScenarioDesc.textContent = state.currentScenario.description;
    moduleRoleText.textContent = state.currentScenario.role;
    
    // Limpiar y cargar objetivos
    moduleObjectivesList.innerHTML = "";
    state.currentScenario.objectives.forEach(obj => {
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

    // Configurar Imagen o Video Principal del Escenario
    const scenarioImg = document.getElementById("module-scenario-img");
    const scenarioVideo = document.getElementById("module-scenario-video");
    
    // El escenario debe mostrar la imagen generada por IA
    // Solo mostraría video en la cabecera si el caso específico lo incluye
    const scenarioMediaUrl = state.currentScenario.videoUrl;
    
    if (scenarioMediaUrl && (scenarioMediaUrl.includes("youtube.com") || scenarioMediaUrl.includes(".mp4"))) {
      scenarioImg.style.display = "none";
      scenarioVideo.style.display = "block";
      scenarioVideo.src = scenarioMediaUrl;
    } else if (moduleData.imageSrc || state.currentScenario.imageSrc) {
      scenarioVideo.src = "";
      scenarioVideo.style.display = "none";
      scenarioImg.style.display = "block";
      scenarioImg.src = state.currentScenario.imageSrc || moduleData.imageSrc;
    } else {
      scenarioVideo.style.display = "none";
      scenarioImg.style.display = "none";
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

    // Análisis semántico optimizado basado en palabras clave y variantes
    const perfectKeywords = (state.currentScenario.evaluation && state.currentScenario.evaluation.perfectKeywords) || currentModule.evaluation.perfectKeywords;
    let matchesCount = 0;
    const missingKeywords = [];

    perfectKeywords.forEach(kw => {
      // Uso de expresiones regulares para identificar palabras clave con flexibilidad (plurales/femeninos)
      const regex = new RegExp(kw.slice(0, -1), 'i'); 
      if (answersText.match(regex)) {
        matchesCount++;
      } else {
        missingKeywords.push(kw);
      }
    });

    // Calcular puntaje
    const matchPercentage = perfectKeywords.length > 0 ? (matchesCount / perfectKeywords.length) * 100 : 100;
    
    // Penalización estricta por respuestas superficiales o genéricas
    let finalScore = Math.min(100, Math.round(20 + (matchPercentage * 0.8)));
    
    if (answersText.trim().length < 60) {
      finalScore = Math.min(finalScore, 15); // Castigo por falta de argumentación
    }

    // Iniciar animación del chat de IA
    iaChatBox.innerHTML = "";
    iaStatusText.textContent = "Analizando marco normativo y procedimiento...";
    
    // Crear mensaje del usuario
    appendChatMessage("user", "Oficial de Policía", `Presento mi procedimiento de acción policial para el caso: '${state.currentScenario.title}'.`);

    // Retrasar respuesta de la IA para simular procesamiento cognitivo profundo
    setTimeout(() => {
      let feedback = "";
      let verdictTitle = "";
      let verdictDesc = "";
      
      const iaEvaluationObj = state.currentScenario.evaluation || currentModule.evaluation;

      if (finalScore >= 80) {
        feedback = iaEvaluationObj.iaResponseGood;
        verdictTitle = "Procedimiento Aprobado";
        verdictDesc = "Excelente desempeño técnico y táctico.";
      } else if (finalScore >= 50) {
        feedback = iaEvaluationObj.iaResponseRegular + ` Te faltó considerar conceptos clave como: ${missingKeywords.join(", ")}.`;
        verdictTitle = "Requiere Ajustes";
        verdictDesc = "Procedimiento parcialmente correcto, pero con vacíos doctrinales.";
      } else {
        feedback = iaEvaluationObj.iaResponseBad + ` Omitiste elementos vitales como: ${missingKeywords.join(", ")}.`;
        verdictTitle = "Procedimiento No Aprobado";
        verdictDesc = "Peligro de sanción legal o violación de DDHH.";
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

      // Lógica de avance estricto: Solo mostrar Siguiente si aprueba
      if (finalScore >= 80) {
        nextModuleBtn.style.display = "inline-block";
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
      } else {
        nextModuleBtn.style.display = "none";
      }
    }, 2000);
  }

  // Parseador de Markdown básico para renderizar negritas, cursivas y saltos de línea de la IA
  function parseMarkdown(text) {
    if (!text) return "";
    let html = text;
    // Convertir **texto** en <strong>texto</strong>
    html = html.replace(/\*\*([^\n*]+)\*\*/g, "<strong>$1</strong>");
    // Convertir *texto* en <em>texto</em>
    html = html.replace(/\*([^\n*]+)\*/g, "<em>$1</em>");
    // Convertir saltos de línea en <br>
    html = html.replace(/\n/g, "<br>");
    return html;
  }

  function appendChatMessage(sender, name, message) {
    const msgElement = document.createElement("div");
    msgElement.className = `chat-message ${sender}`;
    msgElement.innerHTML = `
      <span class="chat-message-sender">${name}</span>
      <p>${parseMarkdown(message)}</p>
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

    async function sendFloatingMessage() {
      const text = floatingChatInput.value.trim();
      if (!text) return;

      // Mensaje de usuario
      const userMsg = document.createElement("div");
      userMsg.className = "chat-message user";
      userMsg.innerHTML = `<span class="chat-message-sender">Oficial</span><p>${text}</p>`;
      floatingChatBody.appendChild(userMsg);
      floatingChatInput.value = "";
      floatingChatBody.scrollTop = floatingChatBody.scrollHeight;

      // Crear burbuja de cargando
      const loadingMsg = document.createElement("div");
      loadingMsg.className = "chat-message ia";
      loadingMsg.innerHTML = `<span class="chat-message-sender">Asistente IA</span><p><em>Pensando...</em></p>`;
      floatingChatBody.appendChild(loadingMsg);
      floatingChatBody.scrollTop = floatingChatBody.scrollHeight;

      try {
        // Petición a la API del Asesor Normativo Policial (OpenAI backend)
        const response = await fetch("http://localhost:8000/api/v1/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: text,
            course_id: COURSES_DATA[state.currentCourseIndex].id
          })
        });

        if (!response.ok) {
          throw new Error("API Offline / Error en servidor");
        }

        const data = await response.json();

        // Formatear respuesta con citas si existen
        let reply = data.answer;
        if (data.citations && data.citations.length > 0) {
          reply += "\n\n📚 **Fuentes y Fundamentos:**\n";
          data.citations.forEach(cit => {
            reply += `- *${cit.title}* (Art/Pág: ${cit.article || 'N/A'}). Similitud: ${(cit.similarity * 100).toFixed(0)}%\n`;
          });
        }

        loadingMsg.innerHTML = `<span class="chat-message-sender">Asistente IA</span><p>${parseMarkdown(reply)}</p>`;
      } catch (err) {
        // Fallback local robusto (Asesor IA Mejorado)
        let reply = "🔍 **[Asesor de Doctrina IA - Modo Integrado]**\n\n";
        const textLower = text.toLowerCase();

        if (textLower.includes("captura") || textLower.includes("flagrancia") || textLower.includes("arma de fuego") || textLower.includes("delito")) {
          reply += "👮 **Procedimiento de Captura en Flagrancia (Artículos 301, 302 y 303 del Código de Procedimiento Penal):**\n\n" +
                   "• **Definición de Flagrancia (Art. 301):** Ocurre cuando la persona es sorprendida en el momento de cometer la conducta punible, o es señalada por la víctima o un testigo inmediatamente después, o se le encuentran elementos que la vinculan directamente con el delito cometido hace instantes.\n\n" +
                   "• **Procedimiento Operativo Paso a Paso:**\n" +
                   "  1. **Uso Proporcional de la Fuerza (Res. 02903/17):** Abordar al presunto delincuente mediante técnicas de verbalización táctica, asegurando la zona de contacto y empleando el modelo de triangulación con tu compañero de patrulla.\n" +
                   "  2. **Registro de Seguridad y Control (Art. 159 - Ley 1801):** Realizar un registro corporal minucioso inmediato para descartar y confiscar cualquier arma, elemento de peligro o Elementos Materiales Probatorios (EMP).\n" +
                   "  3. **Lectura Inmediata de los Derechos del Capturado (Art. 303 CPP):** Recitar con voz clara los derechos constitucionales (motivo de la captura, derecho a guardar silencio, derecho a comunicarse con un allegado de forma inmediata y derecho a designar un abogado defensor).\n" +
                   "  4. **Puesta a Disposición de la Fiscalía:** Redactar de forma inmediata la documentación legal para evitar el vencimiento de los términos (límite de 36 horas para la audiencia de legalización ante el Juez de Control de Garantías).\n\n" +
                   "• **Documentación Exigida por la Ley (Cadena de Custodia):**\n" +
                   "  - Acta de Lectura de Derechos del Capturado.\n" +
                   "  - Informe Policial de Vigilancia en Casos de Captura (Formato FPJ-05).\n" +
                   "  - Formato de Primer Respondiente (Formato FPJ-04).\n" +
                   "  - Acta de Incautación de Elementos de Prueba (Formato FPJ-07).\n\n" +
                   "💡 *Consejo IA:* La omisión en la lectura inmediata de derechos es la principal causa de ilegalidad de captura decretada por jueces de control de garantías. Preserva siempre la integridad física del capturado y del personal policial aplicando el doble seguro en las esposas.";
        } else if (textLower.includes("1801") || textLower.includes("convivencia") || textLower.includes("comparendo") || textLower.includes("comportamiento contrario")) {
          reply += "📜 **Procedimientos de Convivencia y Medidas Correctivas (Ley 1801 de 2016):**\n\n" +
                   "• **Enfoque Preventivo y Doctrinal:** Las medidas de la Policía Nacional no tienen carácter penal o punitivo, sino netamente preventivo para restablecer el orden y la convivencia pacífica.\n\n" +
                   "• **Orden de Prelación del Procedimiento:**\n" +
                   "  1. **Mediación Policial (Art. 154):** Debe ser siempre tu primera opción para dirimir disputas vecinales o comportamientos contrarios a la convivencia mediante el diálogo asistido por el uniformado.\n" +
                   "  2. **Orden de Policía (Art. 150):** Mandato verbal o escrito que emite la autoridad para prevenir un comportamiento perjudicial.\n" +
                   "  3. **Medidas Correctivas (Art. 172):** Si el comportamiento persiste, se impone la Orden de Comparendo (Multas generales, decomiso, disolución de reuniones, etc.).\n\n" +
                   "• **Proceso de Apelación y Garantía del Debido Proceso (Art. 222):**\n" +
                   "  - El ciudadano tiene el derecho constitucional de interponer el recurso de apelación dentro de los 3 días hábiles siguientes ante el Inspector de Policía.\n" +
                   "  - Debes entregar copia física del comparendo de forma obligatoria.\n\n" +
                   "💡 *Consejo IA:* Toda Orden de Comparendo o Acta de Mediación debe fundamentarse con pruebas objetivas (videos del dispositivo corporal 'bodycam', testimonios o actas firmadas por las partes). Esto asegura la legalidad del procedimiento frente a futuras demandas administrativas.";
        } else if (textLower.includes("taser") || textLower.includes("fuerza") || textLower.includes("dispositivo") || textLower.includes("resistencia")) {
          reply += "🛡️ **Doctrina del Uso de la Fuerza y Armas Menos Letales (Resolución 02903 de 2017):**\n\n" +
                   "• **Principios Universales Obligatorios:**\n" +
                   "  - **Necesidad:** Solo se aplica la fuerza cuando los medios persuasivos (verbalización) hayan sido agotados o sean ineficaces.\n" +
                   "  - **Proporcionalidad:** El nivel de fuerza debe modularse de acuerdo con el nivel de resistencia del ciudadano (resistencia pasiva, activa o agresión letal).\n" +
                   "  - **Legalidad:** Actuar bajo el marco de la Constitución y las normas institucionales.\n" +
                   "  - **Temporalidad:** El uso de la fuerza debe cesar inmediatamente una vez se haya controlado la amenaza.\n\n" +
                   "• **Protocolo de Empleo de Dispositivos de Control Eléctrico (Taser):**\n" +
                   "  1. El dispositivo es una herramienta disuasiva menos letal para amenazas de resistencia activa.\n" +
                   "  2. Apuntar preferiblemente a zonas musculares amplias (espalda o cuadrantes inferiores), evitando siempre el tórax/pecho, la cabeza y los genitales para prevenir paros cardiorrespiratorios o lesiones permanentes.\n" +
                   "  3. Mantener una distancia táctica segura (entre 2 y 7 metros).\n" +
                   "  4. Reducir al sujeto e iniciar inmediatamente el procedimiento de esposado.\n\n" +
                   "📋 **Documentación Obligatoria:** Todo policía que emplee la fuerza de forma física o mediante elementos de dotación (taser, bastón policial, arma de fuego) tiene el deber legal de redactar el **Informe del Uso de la Fuerza** detallando paso a paso las razones objetivas y de proporcionalidad del procedimiento.";
        } else if (textLower.includes("derecho") || textLower.includes("dh") || textLower.includes("vida") || textLower.includes("integridad") || textLower.includes("humanos")) {
          reply += "⚖️ **Garantía y Protección de los Derechos Humanos (DDHH) en el Servicio Policial:**\n\n" +
                   "• **Fundamento Constitucional (Art. 2 y 218 Constitución Política):** La Policía Nacional tiene como misión constitucional garantizar el libre ejercicio de los derechos y libertades públicas, actuando siempre con absoluto respeto a la dignidad humana.\n\n" +
                   "• **Inviolabilidad del Domicilio y la Excepción Legal (Art. 163 - Ley 1801):**\n" +
                   "  - El ingreso sin orden judicial previa es una de las excepciones más reguladas. Solo es constitucionalmente admisible en casos taxativos:\n" +
                   "    1. Para socorrer a alguien que pida auxilio (clamor de auxilio).\n" +
                   "    2. Para extinguir incendio o evitar inundación.\n" +
                   "    3. Para cazar un animal peligroso o rabioso.\n" +
                   "    4. En casos de flagrancia donde el delincuente se refugie en su propio domicilio.\n" +
                   "  - Cualquier ingreso por fuera de estas causales constituye violación ilícita de domicilio y acarrea sanciones penales y disciplinarias.\n\n" +
                   "💡 *Consejo IA:* Actúa bajo el principio de no discriminación y enfoque de género. Ante poblaciones especialmente protegidas (menores de edad, mujeres gestantes, adultos mayores) el deber de protección es redoblado. Toda intervención debe documentarse con grabaciones de audio y video.";
        } else if (textLower.includes("atención") || textLower.includes("saludo") || textLower.includes("ciudadano") || textLower.includes("servicio")) {
          reply += "🤝 **Protocolo de Atención y Servicio al Ciudadano (Manual - Resolución 04180 de 2022):**\n\n" +
                   "• **El Enfoque S.E.A (Saludar, Escuchar, Actuar):**\n" +
                   "  - **Saludar:** Saludo obligatorio e institucional: *'Dios y Patria, buenos días/tardes/noches, mi nombre es (Grado y Nombre Completo), ¿En qué puedo servirle?'*.\n" +
                   "  - **Escuchar:** Mantener una postura corporal abierta, contacto visual directo y escucha activa, demostrando empatía y paciencia ante un ciudadano alterado (Habilidades del Art. 13).\n" +
                   "  - **Actuar:** Brindar una solución oportuna dentro del marco legal, o remitir al ciudadano a la dependencia correspondiente con información clara.\n\n" +
                   "• **Regla de los Primeros y Últimos 30 Segundos:**\n" +
                   "  - Los primeros 30 segundos son críticos para desescalar el conflicto o generar confianza.\n" +
                   "  - Los últimos 30 segundos afianzan la credibilidad institucional. Terminar con la pregunta: *'¿Se le ofrece algo más?'* y realizar una despedida cortés.\n\n" +
                   "🚫 **Prohibiciones Específicas del Puesto de Trabajo:** Comer en el puesto de facción, masticar chicle, realizar maquillajes, usar dispositivos móviles personales para fines ajenos al servicio o entablar conversaciones personales frente al ciudadano.\n\n" +
                   "💡 *Consejo IA:* Recuerda que el lenguaje no verbal comunica más del 70% de la disposición de servicio. Controla tu tono de voz y postura corporal en todo momento.";
        } else {
          reply += "👋 **¡Hola! Soy tu Asesor de Doctrina Policial.**\n\n" +
                   "Puedo ayudarte a resolver dudas operativas y normativas sobre:\n" +
                   "🔹 **Ley 1801:** Comparendos, medidas correctivas, mediación.\n" +
                   "🔹 **Procedimiento Penal (Ley 906):** Capturas en flagrancia, lectura de derechos, cadena de custodia.\n" +
                   "🔹 **Uso de la Fuerza (Res. 02903):** Principios, Taser, armas de fuego.\n" +
                   "🔹 **Atención al Ciudadano (Res. 04180):** Protocolos S.E.A, saludo 'Dios y Patria'.\n" +
                   "🔹 **Derechos Humanos:** Inviolabilidad de domicilio, protección a la vida.\n\n" +
                   "👉 *Escribe tu duda, procedimiento o pregunta, y te daré el fundamento legal y los pasos exactos a seguir.*";
        }
        loadingMsg.innerHTML = `<span class="chat-message-sender">Asistente IA</span><p>${parseMarkdown(reply)}</p>`;
      }
      floatingChatBody.scrollTop = floatingChatBody.scrollHeight;
    }

    floatingChatSendBtn.addEventListener("click", sendFloatingMessage);
    floatingChatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendFloatingMessage();
    });

    if (resetProgressBtn) {
      resetProgressBtn.addEventListener("click", () => {
        if (confirm("¿Estás seguro de reiniciar tu certificación? Se perderá todo el progreso.")) {
          localStorage.removeItem("policia_cursos_progress");
          location.reload();
        }
      });
    }

    if (goHomeBtn) {
      goHomeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showView(welcomeView);
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
      });
    }

    if (goHomeBannerBtn) {
      goHomeBannerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showView(welcomeView);
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
      });
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", () => {
        sidebarNav.classList.toggle("show-mobile");
      });
    }
  }

  // Lanzar aplicación
  init();
});

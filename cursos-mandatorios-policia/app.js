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
    const perfectKeywords = state.currentScenario.evaluation.perfectKeywords || currentModule.evaluation.perfectKeywords;
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
          reply += "<br><br>📚 **Fuentes y Fundamentos:**<br>";
          data.citations.forEach(cit => {
            reply += `- *${cit.title}* (Art/Pág: ${cit.article || 'N/A'}). Similitud: ${(cit.similarity * 100).toFixed(0)}%<br>`;
          });
        }

        loadingMsg.innerHTML = `<span class="chat-message-sender">Asistente IA</span><p>${reply}</p>`;
      } catch (err) {
        // Fallback local robusto (Asesor IA Mejorado)
        let reply = "🔍 **[Asesor de Doctrina IA - Modo Integrado]**<br><br>";
        const textLower = text.toLowerCase();

        if (textLower.includes("captura") || textLower.includes("flagrancia") || textLower.includes("arma de fuego") || textLower.includes("delito")) {
          reply += "👮 **Procedimiento de Captura en Flagrancia (Ley 906 de 2004):**<br><br>" +
                   "1. **Seguridad y Abordaje:** Aplicar tácticas de triangulación, verbalización clara, y registro a personas (Art. 159 Ley 1801). Incautar elementos materiales probatorios.<br>" +
                   "2. **Derechos del Capturado (Art. 303 CPP):** Lectura INMEDIATA de derechos. Debe informarse: hecho que se le atribuye, derecho a guardar silencio, derecho a un abogado y derecho a comunicarse con un familiar.<br>" +
                   "3. **Traslado y Disposición:** Conducir de inmediato ante la Fiscalía General de la Nación (URI). El tiempo es vital para la legalización de la captura.<br><br>" +
                   "📋 **Documentación Obligatoria (Cadena de Custodia):**<br>" +
                   "- Acta de Derechos del Capturado.<br>" +
                   "- Informe de Policía de Vigilancia en Casos de Captura en Flagrancia (FPJ-05).<br>" +
                   "- Formato de Primer Respondiente (FPJ-04).<br>" +
                   "- Acta de Incautación (FPJ-07).<br><br>" +
                   "💡 *Consejo IA:* Si hay armas incautadas, asegúrate de embalarlas y rotularlas correctamente usando los guantes y bolsas de evidencia para preservar huellas e indicios.";
        } else if (textLower.includes("1801") || textLower.includes("convivencia") || textLower.includes("comparendo") || textLower.includes("comportamiento contrario")) {
          reply += "📜 **Código Nacional de Seguridad y Convivencia (Ley 1801 de 2016):**<br><br>" +
                   "El código tiene carácter preventivo y busca restaurar la convivencia. Todo procedimiento debe basarse en la proporcionalidad y razonabilidad.<br><br>" +
                   "**Pasos del Procedimiento de Policía:**<br>" +
                   "1. **Orden de Policía (Art. 150):** Es un mandato claro y expreso. Debe ser la primera instancia para corregir el comportamiento.<br>" +
                   "2. **Mediación Policial (Art. 154):** Instrumento vital para resolver conflictos de forma pacífica antes de aplicar medidas correctivas.<br>" +
                   "3. **Medidas Correctivas (Art. 172):** Si el comportamiento persiste, se aplica la Orden de Comparendo (Multa, Participación en programa, Suspensión de actividad, etc.).<br><br>" +
                   "📋 **Formatos:** Orden de Comparendo Nacional y Acta de Mediación Policial.<br>" +
                   "💡 *Consejo IA:* Registra siempre las evidencias (videos, testimonios) y entrega la copia del comparendo informando al ciudadano que tiene 3 días para presentar recurso de apelación ante el Inspector de Policía.";
        } else if (textLower.includes("taser") || textLower.includes("fuerza") || textLower.includes("dispositivo") || textLower.includes("resistencia")) {
          reply += "🛡️ **Uso de la Fuerza y Armas Menos Letales (Res. 02903 de 2017):**<br><br>" +
                   "El uso de la fuerza es el último recurso físico. Se rige por los principios universales:<br>" +
                   "- **Necesidad:** Sólo cuando sea estrictamente necesario.<br>" +
                   "- **Proporcionalidad:** El nivel de fuerza debe ser acorde al nivel de resistencia del ciudadano.<br>" +
                   "- **Legalidad:** Acorde a las normas nacionales e internacionales.<br>" +
                   "- **Temporalidad:** Cesa en el momento en que se controla la situación.<br><br>" +
                   "**Uso del Dispositivo de Control Eléctrico (Taser):**<br>" +
                   "Debe apuntarse a zonas musculares amplias (espalda o piernas), evitando rostro, cuello y pecho. Distancia táctica mínima recomendada: 7 metros.<br><br>" +
                   "📋 **Documentación:** Informe de Uso de la Fuerza. Es obligatorio documentar por qué se elevó el nivel de uso de la fuerza.";
        } else if (textLower.includes("derecho") || textLower.includes("dh") || textLower.includes("vida") || textLower.includes("integridad") || textLower.includes("humanos")) {
          reply += "⚖️ **Garantía de los Derechos Humanos (DDHH):**<br><br>" +
                   "La función policial tiene como fin primordial garantizar el ejercicio de los derechos y libertades públicas.<br><br>" +
                   "**Aspectos Claves:**<br>" +
                   "1. **Derecho a la Vida e Integridad:** Inviolables. Todo procedimiento debe minimizar riesgos (Triangulación de seguridad, verbalización).<br>" +
                   "2. **Inviolabilidad de Domicilio:** Solo se puede ingresar sin orden judicial por imperiosa necesidad (Art. 163 Ley 1801) como clamor de auxilio, incendio o flagrancia. Si no aplica, constituye violación a los DDHH.<br>" +
                   "3. **Protección a Poblaciones Vulnerables:** Niños, niñas, adolescentes, mujeres, y minorías requieren enfoques diferenciales y mayor protección.<br><br>" +
                   "💡 *Consejo IA:* En todo procedimiento policial se presume la buena fe del ciudadano. Evita el trato degradante, incluso en situaciones de alta tensión. El autocontrol es tu mejor herramienta.";
        } else if (textLower.includes("atención") || textLower.includes("saludo") || textLower.includes("ciudadano") || textLower.includes("servicio")) {
          reply += "🤝 **Atención y Servicio al Ciudadano (Manual - Res. 04180 de 2022):**<br><br>" +
                   "El contacto inicial define la percepción de legitimidad institucional.<br><br>" +
                   "**Protocolo de Atención Presencial (S.E.A - Saludar, Escuchar, Actuar):**<br>" +
                   "1. **Primeros 30 segundos:** Determinan la imagen. Saludo obligatorio: *'Dios y Patria, buenos días/tardes/noches, mi nombre es (Grado y Nombre), ¿En qué puedo servirle?'*.<br>" +
                   "2. **Escucha Activa y Habilidades (Art 13):** Amabilidad, cortesía, tolerancia y autocontrol ante ciudadanos alterados.<br>" +
                   "3. **Prohibiciones en el servicio:** Comer, masticar chicle, usar el celular personal para chat, o mostrar desgano frente al ciudadano.<br>" +
                   "4. **Despedida (Últimos 30 segundos):** Agradecer y preguntar: *'¿Se le ofrece algo más?'*. Cierre con apretón de manos seguro.<br><br>" +
                   "💡 *Consejo IA:* El lenguaje no verbal (postura, contacto visual) comunica el 70% del mensaje. Muestra siempre disposición de ayudar.";
        } else {
          reply += "👋 **¡Hola! Soy tu Asesor de Doctrina Policial.**<br><br>" +
                   "Puedo ayudarte a resolver dudas operativas y normativas sobre:<br>" +
                   "🔹 **Ley 1801:** Comparendos, medidas correctivas, mediación.<br>" +
                   "🔹 **Procedimiento Penal (Ley 906):** Capturas en flagrancia, lectura de derechos, cadena de custodia.<br>" +
                   "🔹 **Uso de la Fuerza (Res. 02903):** Principios, Taser, armas de fuego.<br>" +
                   "🔹 **Atención al Ciudadano (Res. 04180):** Protocolos S.E.A, saludo 'Dios y Patria'.<br>" +
                   "🔹 **Derechos Humanos:** Inviolabilidad de domicilio, protección a la vida.<br><br>" +
                   "👉 *Escribe tu duda, procedimiento o pregunta, y te daré el fundamento legal y los pasos exactos a seguir.*";
        }

        loadingMsg.innerHTML = `<span class="chat-message-sender">Asistente IA</span><p>${reply}</p>`;
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

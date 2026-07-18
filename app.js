// Controlador Principal de la Aplicación (SPA)
// Gestiona el estado de aprendizaje, navegación, localStorage y evaluación con simulación de IA

document.addEventListener("DOMContentLoaded", () => {
  // Estado local de la aplicación
  let state = {
    currentCourseIndex: 0,
    currentModuleIndex: 0,
    progress: {}, // Estructura: { "id_modulo": { completed: boolean, score: number, answers: {} } }
    theme: "dark"
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
    view.classList.add("active");
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

    // Configurar Video de Apoyo
    const videoCard = document.getElementById("module-video-card");
    const videoIframe = document.getElementById("module-video-iframe");
    if (moduleData.videoUrl) {
      videoIframe.src = moduleData.videoUrl;
      videoCard.style.display = "block";
    } else {
      videoIframe.src = "";
      videoCard.style.display = "none";
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
  // Configuración de Event Listeners
  // -------------------------------------------------------------
  function setupEventListeners() {
    // Alternancia de tema
    themeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggle.querySelector(".mode-icon").textContent = "🌙";
        state.theme = "light";
      } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeToggle.querySelector(".mode-icon").textContent = "☀️";
        state.theme = "dark";
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

    // Reiniciar Progreso
    resetProgressBtn.addEventListener("click", () => {
      if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso de capacitación?")) {
        state.progress = {};
        saveProgress();
        selectModule(0, 0);
      }
    });
  }

  // Lanzar aplicación
  init();
});

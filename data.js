// Base de datos de los Cursos Mandatorios de la Policía Nacional de Colombia
// Actualizada con los contenidos, estándares mínimos, links de videos, transcripciones, métricas e imágenes de referencia
// Sincronizada con el Material de Apoyo y Planes de Lección Oficiales (Resolución 04180 de 2022)

const COURSES_DATA = [
  {
    id: "atencion-ciudadano",
    title: "Atención al Ciudadano",
    description: "Orientación y atención presencial promoviendo la comunicación asertiva y el portafolio de trámites institucionales conforme al Manual de Atención (Res. 04180 de 2022).",
    modules: [
      {
        id: "comunicacion-asertiva",
        title: "1. Habilidades y Protocolo de Atención Presencial",
        videoDescription: "Instrucciones del Manual de Atención y Servicio al Ciudadano (Resolución 04180 de 2022):\n\n1. Protocolo de Atención Presencial Común (Art. 16):\n   - Saludo Obligatorio: 'Dios y Patria, buenos días/tardes/noches, mi nombre es (Grado, Nombre y Apellido), ¿En qué puedo servirle?'.\n   - Presentación Personal: Identificación siempre visible y uniforme impecable.\n   - Comportamiento: Prohibido realizar actividades personales (comer en el puesto de facción, chicle, maquillarse, usar celular personal o hablar con compañeros temas ajenos al servicio) frente al ciudadano.\n   - Primeros y Últimos 30 Segundos: Usar los primeros 30 segundos del contacto para sorprender favorablemente al ciudadano con cordialidad y respeto, y los últimos 30 segundos para reforzar la credibilidad y confianza institucional.\n   - Despedida formal: Agradecer al ciudadano por recurrir a la Policía, preguntar si se le ofrece algo más y dar un apretón de manos seguro.\n\n2. Habilidades Comunicativas Básicas (Art. 13):\n   - Amabilidad y cortesía, Tolerancia, Persuasión, Capacidad para asesorar/orientar, Autocontrol y Capacidad de Escucha Activa.",
        metrics: {
          type: "Protocolo de Atención Personal (Art. 16 - Res. 04180/2022)",
          means: "Saludar, Escuchar, Actuar (SEA Policía) / Habilidades del Art. 13",
          law: "Resolución 04180 de 2022 (Manual de Atención al Ciudadano)"
        },
        imageSrc: "ai_caso_atencion_presencial_1784407699958.png",
        scenarios: [
{
          title: "Aplicación del Protocolo Común y Habilidades del Art. 13",
          description: "Estás de facción en el puesto de información de la estación de policía. Un ciudadano ingresa de manera abrupta e insultando a los uniformados debido a una inconformidad. Debes aplicar estrictamente el protocolo del Artículo 16 de la Resolución 04180 (Saludo reglamentario, control de comportamiento, voz y despedida) y las habilidades de amabilidad, tolerancia y autocontrol para canalizar el caso.",
          role: "Patrullero del área de atención al ciudadano en Estación de Policía.",
          objectives: [
            "Iniciar la atención con el saludo reglamentario de la Resolución 04180 ('Dios y Patria...').",
            "Aplicar las pautas de comportamiento del puesto de trabajo y autocontrol ante insultos.",
            "Utilizar la técnica de los primeros y últimos 30 segundos y realizar la despedida institucional."
          ]
        },
{
          title: "Aplicación del Protocolo Común y Habilidades del Art. 13",
          description: "Estás de facción en el puesto de información de la estación de policía. Un ciudadana en estado de embriaguez llega llorando e insultando a los uniformados debido a una presunta negligencia médica. Debes aplicar estrictamente el protocolo del Artículo 16 de la Resolución 04180 (Saludo reglamentario, control de comportamiento, voz y despedida) y las habilidades de amabilidad, tolerancia y autocontrol para canalizar el caso.",
          role: "Patrullero del área de atención al ciudadano en Estación de Policía.",
          objectives: [
            "Iniciar la atención con el saludo reglamentario de la Resolución 04180 ('Dios y Patria...').",
            "Aplicar las pautas de comportamiento del puesto de trabajo y autocontrol ante insultos.",
            "Utilizar la técnica de los primeros y últimos 30 segundos y realizar la despedida institucional."
          ]
        },
{
          title: "Aplicación del Protocolo Común y Habilidades del Art. 13",
          description: "Estás de facción en el puesto de información de la estación de policía. Un grupo de jóvenes llega exaltado e insultando a los uniformados debido a una hurto de sus pertenencias. Debes aplicar estrictamente el protocolo del Artículo 16 de la Resolución 04180 (Saludo reglamentario, control de comportamiento, voz y despedida) y las habilidades de amabilidad, tolerancia y autocontrol para canalizar el caso.",
          role: "Patrullero del área de atención al ciudadano en Estación de Policía.",
          objectives: [
            "Iniciar la atención con el saludo reglamentario de la Resolución 04180 ('Dios y Patria...').",
            "Aplicar las pautas de comportamiento del puesto de trabajo y autocontrol ante insultos.",
            "Utilizar la técnica de los primeros y últimos 30 segundos y realizar la despedida institucional."
          ]
        },
{
          title: "Aplicación del Protocolo Común y Habilidades del Art. 13",
          description: "Estás de facción en el puesto de información de la estación de policía. Un adulto mayor ingresa de manera desorientada e insultando a los uniformados debido a una inconformidad. Debes aplicar estrictamente el protocolo del Artículo 16 de la Resolución 04180 (Saludo reglamentario, control de comportamiento, voz y despedida) y las habilidades de amabilidad, tolerancia y autocontrol para canalizar el caso.",
          role: "Patrullero del área de atención al adulto mayor en Estación de Policía.",
          objectives: [
            "Iniciar la atención con el saludo reglamentario de la Resolución 04180 ('Dios y Patria...').",
            "Aplicar las pautas de comportamiento del puesto de trabajo y autocontrol ante insultos.",
            "Utilizar la técnica de los primeros y últimos 30 segundos y realizar la despedida institucional."
          ]
        },
{
          title: "Aplicación del Protocolo Común y Habilidades del Art. 13",
          description: "Estás de facción en el puesto de información de la estación de policía. Un turista extranjero ingresa de manera angustiada e insultando a los uniformados debido a una inconformidad. Debes aplicar estrictamente el protocolo del Artículo 16 de la Resolución 04180 (Saludo reglamentario, control de comportamiento, voz y despedida) y las habilidades de amabilidad, tolerancia y autocontrol para canalizar el caso.",
          role: "Patrullero del área de atención al turista extranjero en Estación de Policía.",
          objectives: [
            "Iniciar la atención con el saludo reglamentario de la Resolución 04180 ('Dios y Patria...').",
            "Aplicar las pautas de comportamiento del puesto de trabajo y autocontrol ante insultos.",
            "Utilizar la técnica de los primeros y últimos 30 segundos y realizar la despedida institucional."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cómo influye el cumplimiento estricto del protocolo de presentación personal y comportamiento en un ciudadano exaltado durante los primeros 30 segundos?",
            placeholder: "Analiza el impacto del saludo formal de Dios y Patria y el evitar distracciones (celular, charlas)...",
            keywords: ["dios y patria", "primeros 30 segundos", "presentación personal", "comportamiento", "confianza", "respeto"]
          },
          definir: {
            question: "Identifica qué habilidades del Artículo 13 de la Resolución 04180 de 2022 son indispensables para manejar al ciudadano y qué está prohibido hacer.",
            placeholder: "Define las habilidades del Art. 13 (autocontrol, tolerancia) y los comportamientos prohibidos en el puesto...",
            keywords: ["autocontrol", "tolerancia", "prohibido comer", "chicle", "celular", "amabilidad"]
          },
          idear: {
            question: "¿Cómo estructurarías el abordaje empleando el tono de voz, la postura relajada y el lenguaje claro para desescalar el conflicto?",
            placeholder: "Plantea el uso del tono de voz adaptado, columna flexible y contacto visual...",
            keywords: ["tono de voz", "postura", "contacto visual", "desescalar", "vocalizar"]
          },
          prototipar: {
            question: "Redacta el diálogo exacto que tendrías con el ciudadano, incluyendo el saludo inicial formal, el desarrollo de la atención y la despedida reglamentaria.",
            placeholder: "Ej: 'Dios y Patria, buenos días. Soy el Patrullero... ¿en qué puedo servirle?... Comprendo su malestar... ¿puedo servirle en algo más? Agradecemos que se acerque...'",
            keywords: ["dios y patria", "buenos días", "servirle", "despedida", "últimos 30 segundos", "mano"]
          }
        },
        evaluation: {
          perfectKeywords: ["dios y patria", "artículo 16", "primeros 30 segundos", "autocontrol", "tolerancia", "despedida", "comportamiento", "resolución 04180"],
          iaResponseGood: "Excelente aplicación. Has estructurado tu respuesta con el saludo reglamentario de la Resolución 04180, evitado conductas no profesionales y cerrado con el protocolo de despedida institucional y la regla de los 30 segundos.",
          iaResponseRegular: "La respuesta es aceptable, pero recuerda recitar el saludo formal de 'Dios y Patria...' exactamente como lo ordena el Artículo 16 literal A para sorprender favorablemente al ciudadano en los primeros 30 segundos.",
          iaResponseBad: "Procedimiento incorrecto. El omitir el saludo oficial, ponerse a la defensiva o distraerse con actividades no autorizadas viola el Manual de Atención al Ciudadano (Resolución 04180 de 2022)."
        }
      },
      {
        id: "atencion-preferencial",
        title: "2. Atención Presencial Preferencial", // Se mantiene el video doctrinal oficial
        videoDescription: "Instrucciones del Protocolo de Atención Presencial Preferencial (Art. 16, numeral 2 - Resolución 04180 de 2022):\n\n1. Beneficiarios prioritarios: Adultos mayores, mujeres embarazadas, niños, niñas y adolescentes, personas en situación de vulnerabilidad, grupos étnicos, personas en condición de discapacidad y personas de talla baja.\n2. Pautas para Adultos Mayores y Gestantes:\n   - Orientarlos de inmediato a las áreas destinadas en la sala de espera.\n   - Asignar turno preferencial de llegada.\n   - PROHIBIDO usar términos paternalistas o diminutivos (como 'abuelito', 'mamita', etc.).\n   - Escuchar con actitud de acompañamiento y verificar que la respuesta sea comprendida en lenguaje claro.\n3. Pautas para Víctimas (sufrieron menoscabo de derechos o daño por el conflicto/delitos):\n   - Escuchar atentamente sin prevención ni juicios de valor por su vestir o hablar (no hay estereotipos).\n   - No generar falsas expectativas; usar lenguaje sencillo sin tecnicismos.\n   - Garantizar la confidencialidad absoluta.\n4. Pautas para Personas en Condición de Discapacidad:\n   - Tratar a adultos con discapacidad con la madurez correspondiente (nunca tono aniñado o consentirles la cabeza).\n   - Mirar con naturalidad, preguntar antes de ayudar: '¿En qué puedo servirle?'.",
        metrics: {
          type: "Atención Preferencial (Art. 16 Numeral 2)",
          means: "Turno Preferencial / Trato Digno sin Diminutivos",
          law: "Resolución 04180 de 2022 / Ley 1346 de 2009"
        },
        imageSrc: "ai_caso_mecanismos_constitucionales_1784407738502.png",
        scenarios: [
{
          title: "Atención a Poblaciones Vulnerables y Víctimas",
          description: "Ingresa a la Oficina de Atención al Ciudadano un adulto mayor que manifiesta ser víctima de desplazamiento forzado y no sabe cómo solicitar orientación. Además, en la sala se encuentra una persona sorda esperando turno. Debes aplicar las directrices del Protocolo Preferencial de la Resolución 04180 de 2022.",
          role: "Encargado de la Oficina de Atención al Ciudadano (OAC).",
          objectives: [
            "Aplicar el protocolo de adultos mayores evitando términos paternalistas ('abuelito').",
            "Atender la condición de víctima garantizando confidencialidad y sin tecnicismos ni falsas expectativas.",
            "Orientar a la persona en condición de discapacidad con respeto, naturalidad y de acuerdo a su autonomía."
          ]
        },
{
          title: "Atención a Poblaciones Vulnerables y Víctimas",
          description: "Ingresa a la Oficina de Atención al Ciudadano un adulto mayor que manifiesta ser víctima de desplazamiento forzado y no sabe cómo solicitar orientación. Además, en la sala se encuentra una persona sorda esperando turno. Debes aplicar las directrices del Protocolo Preferencial de la Resolución 04180 de 2022.",
          role: "Encargado de la Oficina de Atención al Ciudadano (OAC).",
          objectives: [
            "Aplicar el protocolo de adultos mayores evitando términos paternalistas ('abuelito').",
            "Atender la condición de víctima garantizando confidencialidad y sin tecnicismos ni falsas expectativas.",
            "Orientar a la persona en condición de discapacidad con respeto, naturalidad y de acuerdo a su autonomía."
          ]
        },
{
          title: "Atención a Poblaciones Vulnerables y Víctimas",
          description: "Ingresa a la Oficina de Atención al Ciudadano un adulto mayor que manifiesta ser víctima de desplazamiento forzado y no sabe cómo solicitar orientación. Además, en la sala se encuentra una persona sorda esperando turno. Debes aplicar las directrices del Protocolo Preferencial de la Resolución 04180 de 2022.",
          role: "Encargado de la Oficina de Atención al Ciudadano (OAC).",
          objectives: [
            "Aplicar el protocolo de adultos mayores evitando términos paternalistas ('abuelito').",
            "Atender la condición de víctima garantizando confidencialidad y sin tecnicismos ni falsas expectativas.",
            "Orientar a la persona en condición de discapacidad con respeto, naturalidad y de acuerdo a su autonomía."
          ]
        },
{
          title: "Atención a Poblaciones Vulnerables y Víctimas",
          description: "Ingresa a la Oficina de Atención al Ciudadano un adulto mayor que manifiesta ser víctima de desplazamiento forzado y no sabe cómo solicitar orientación. Además, en la sala se encuentra una persona sorda esperando turno. Debes aplicar las directrices del Protocolo Preferencial de la Resolución 04180 de 2022.",
          role: "Encargado de la Oficina de Atención al Ciudadano (OAC).",
          objectives: [
            "Aplicar el protocolo de adultos mayores evitando términos paternalistas ('abuelito').",
            "Atender la condición de víctima garantizando confidencialidad y sin tecnicismos ni falsas expectativas.",
            "Orientar a la persona en condición de discapacidad con respeto, naturalidad y de acuerdo a su autonomía."
          ]
        },
{
          title: "Atención a Poblaciones Vulnerables y Víctimas",
          description: "Ingresa a la Oficina de Atención al Ciudadano un adulto mayor que manifiesta ser víctima de desplazamiento forzado y no sabe cómo solicitar orientación. Además, en la sala se encuentra una persona sorda esperando turno. Debes aplicar las directrices del Protocolo Preferencial de la Resolución 04180 de 2022.",
          role: "Encargado de la Oficina de Atención al Ciudadano (OAC).",
          objectives: [
            "Aplicar el protocolo de adultos mayores evitando términos paternalistas ('abuelito').",
            "Atender la condición de víctima garantizando confidencialidad y sin tecnicismos ni falsas expectativas.",
            "Orientar a la persona en condición de discapacidad con respeto, naturalidad y de acuerdo a su autonomía."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Por qué el uso de términos paternalistas como 'abuelito' o tratar como niños a adultos con discapacidad afecta su dignidad en el servicio?",
            placeholder: "Analiza el derecho al trato digno, la autonomía personal y la inclusión social...",
            keywords: ["dignidad", "trato digno", "autonomía", "paternalistas", "abuelito", "respeto"]
          },
          definir: {
            question: "Define los pasos obligatorios para el adulto mayor y la víctima de acuerdo con las pautas de la Resolución 04180.",
            placeholder: "Indica la asignación de áreas destinadas, turno preferencial y no generar falsas expectativas...",
            keywords: ["turno preferencial", "confidencialidad", "expectativas", "área destinada", "sin juicios"]
          },
          idear: {
            question: "¿Qué canales y apoyos institucionales propondrías para facilitar la comunicación con la persona con discapacidad auditiva y la víctima?",
            placeholder: "Propón el uso de lenguaje claro, apoyo visual o articulación con entes encargados...",
            keywords: ["lenguaje claro", "apoyo visual", "acompañamiento", "restituir derechos"]
          },
          prototipar: {
            question: "Escribe la simulación del diálogo respetando las pautas para ambos ciudadanos.",
            placeholder: "Ej: 'Buenas tardes señor. Por favor acompáñeme a esta sección preferencial... entiendo su situación, la información que me brinde es confidencial...'",
            keywords: ["preferencial", "acompañe", "confidencial", "lenguaje sencillo", "servirle"]
          }
        },
        evaluation: {
          perfectKeywords: ["paternalistas", "confidencialidad", "discapacidad", "víctima", "trato digno", "área destinada", "resolución 04180"],
          iaResponseGood: "Excelente. Has respetado las prohibiciones del protocolo preferencial (no usar abuelito, evitar tono aniñado) y asegurado la confidencialidad de la víctima.",
          iaResponseRegular: "El procedimiento es aceptable, pero debes ser más enfático en la prohibición de usar diminutivos con personas de la tercera edad y en cómo garantizar la confidencialidad de la víctima.",
          iaResponseBad: "Incorrecto. Usar diminutivos condescendientes o no priorizar el espacio físico y la confidencialidad viola la directriz del Protocolo de Atención Preferencial."
        }
      },
      {
        id: "portafolio-servicios",
        title: "3. Portafolio de Servicios y Canales de PQRS",
        videoDescription: "Contenido del Portafolio de Servicios y Canales de Atención (Resolución 04180 de 2022):\n\n1. Servicios Clave del Portafolio:\n   - Recepcionar y Despachar Motivos de Policía: Gestión de emergencias y despachos a través de la Línea de Emergencia 123.\n   - Consulta de Antecedentes Judiciales: Expedición de información judicial en tiempo real.\n   - Revisión Técnica de Automotores: Verificación física de la procedencia lícita de vehículos.\n   - Denuncia Virtual: Sistema nacional para denunciar hurtos, extorsión y delitos informáticos.\n   - Atención de Emergencias Viales: Información en tiempo real del estado de vías y pico y placa.\n   - Incorporación Policial: Procesos de selección de Oficiales y Patrulleros.\n   - Oficinas de Atención al Ciudadano: 98 oficinas desconcentradas y 1423 puntos de atención de la Inspección General para la gestión de PQRS.\n   - Centros de Conciliación y Mediación: 13 centros nacionales para resolver civil, familia y convivencia de forma alternativa.\n\n2. Clasificación de Canales de PQRS:\n   - Presencial: Puntos OAC y Centros de Conciliación.\n   - Virtual: Plataforma ADenunciar, Portal de Servicios Internos (PSI) y correo lineadirecta@policia.gov.co.\n   - Telefónico: Línea de Integridad Policial (166) y línea nacional 018000 910112.",
        metrics: {
          type: "Portafolio de Servicios y PQRS (Art. 11)",
          means: "98 Oficinas OAC / 13 Centros de Conciliación / Línea 123",
          law: "Ley 1755 de 2015 / Resolución 04180 de 2022"
        },
        imageSrc: "ai_caso_procedimientos_convivencia_1784407753498.png",
        scenarios: [
{
          title: "Orientación del Portafolio y Recepción de PQRS",
          description: "Un ciudadano acude al CAI para reportar la pérdida de su motocicleta, consultar si tiene antecedentes pendientes para un empleo, y quejarse por el maltrato físico de una patrulla. Debes canalizar estos tres requerimientos utilizando los servicios y oficinas específicas del portafolio.",
          role: "Integrante de patrulla orientador en CAI.",
          objectives: [
            "Remitir la queja disciplinaria al canal adecuado (Oficinas OAC de la Inspección General o correo lineadirecta@policia.gov.co).",
            "Orientar el caso de la motocicleta (Línea 123 / Denuncia Virtual ADenunciar) y explicar la revisión técnica de automotores.",
            "Guiar la consulta de antecedentes judiciales a través del canal virtual oficial de la institución."
          ]
        },
{
          title: "Orientación del Portafolio y Recepción de PQRS",
          description: "Un ciudadano acude al CAI para reportar la pérdida de su motocicleta, consultar si tiene antecedentes pendientes para un empleo, y quejarse por el maltrato físico de una patrulla. Debes canalizar estos tres requerimientos utilizando los servicios y oficinas específicas del portafolio.",
          role: "Integrante de patrulla orientador en CAI.",
          objectives: [
            "Remitir la queja disciplinaria al canal adecuado (Oficinas OAC de la Inspección General o correo lineadirecta@policia.gov.co).",
            "Orientar el caso de la motocicleta (Línea 123 / Denuncia Virtual ADenunciar) y explicar la revisión técnica de automotores.",
            "Guiar la consulta de antecedentes judiciales a través del canal virtual oficial de la institución."
          ]
        },
{
          title: "Orientación del Portafolio y Recepción de PQRS",
          description: "Un ciudadano acude al CAI para reportar la pérdida de su motocicleta, consultar si tiene antecedentes pendientes para un empleo, y quejarse por el maltrato físico de una patrulla. Debes canalizar estos tres requerimientos utilizando los servicios y oficinas específicas del portafolio.",
          role: "Integrante de patrulla orientador en CAI.",
          objectives: [
            "Remitir la queja disciplinaria al canal adecuado (Oficinas OAC de la Inspección General o correo lineadirecta@policia.gov.co).",
            "Orientar el caso de la motocicleta (Línea 123 / Denuncia Virtual ADenunciar) y explicar la revisión técnica de automotores.",
            "Guiar la consulta de antecedentes judiciales a través del canal virtual oficial de la institución."
          ]
        },
{
          title: "Orientación del Portafolio y Recepción de PQRS",
          description: "Un adulto mayor acude al CAI para reportar la pérdida de su motocicleta, consultar si tiene antecedentes pendientes para un empleo, y quejarse por el maltrato físico de una patrulla. Debes canalizar estos tres requerimientos utilizando los servicios y oficinas específicas del portafolio.",
          role: "Integrante de patrulla orientador en CAI.",
          objectives: [
            "Remitir la queja disciplinaria al canal adecuado (Oficinas OAC de la Inspección General o correo lineadirecta@policia.gov.co).",
            "Orientar el caso de la motocicleta (Línea 123 / Denuncia Virtual ADenunciar) y explicar la revisión técnica de automotores.",
            "Guiar la consulta de antecedentes judiciales a través del canal virtual oficial de la institución."
          ]
        },
{
          title: "Orientación del Portafolio y Recepción de PQRS",
          description: "Un turista extranjero acude al CAI para reportar la pérdida de su motocicleta, consultar si tiene antecedentes pendientes para un empleo, y quejarse por el maltrato físico de una patrulla. Debes canalizar estos tres requerimientos utilizando los servicios y oficinas específicas del portafolio.",
          role: "Integrante de patrulla orientador en CAI.",
          objectives: [
            "Remitir la queja disciplinaria al canal adecuado (Oficinas OAC de la Inspección General o correo lineadirecta@policia.gov.co).",
            "Orientar el caso de la motocicleta (Línea 123 / Denuncia Virtual ADenunciar) y explicar la revisión técnica de automotores.",
            "Guiar la consulta de antecedentes judiciales a través del canal virtual oficial de la institución."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Qué temores presenta un ciudadano al interponer una queja contra uniformados en el mismo CAI y cómo el portafolio descentralizado de la Inspección General le da tranquilidad?",
            placeholder: "Analiza el papel de las 98 oficinas de la Inspección General y el correo lineadirecta@policia.gov.co en la transparencia...",
            keywords: ["inspección general", "transparencia", "queja", "descentralizado", "tranquilidad", "confianza"]
          },
          definir: {
            question: "Clasifica los tres requerimientos del ciudadano en los canales idóneos (virtual, presencial o telefónico) de acuerdo con el portafolio.",
            placeholder: "Especifica la ruta para antecedentes, denuncia de moto y queja disciplinaria...",
            keywords: ["lineadirecta@policia.gov.co", "adenunciar", "antecedentes", "oac", "inspección general"]
          },
          idear: {
            question: "¿Cómo orientarías al ciudadano para que acceda al sistema nacional de mediación (13 centros) si su problema fuera un conflicto de convivencia vecinal?",
            placeholder: "Propón el uso de los Centros de Conciliación y Mediación Policial de la Inspección General...",
            keywords: ["mediación", "centros de conciliación", "inspección general", "convivencia", "conciliar"]
          },
          prototipar: {
            question: "Escribe la orientación final detallada que le darás al ciudadano para cada uno de sus tres trámites.",
            placeholder: "Ej: 'Para su queja disciplinaria, puede radicar de forma virtual al correo lineadirecta@policia.gov.co. Para la moto, reportamos a la línea 123 y radicamos en la plataforma ADenunciar...'",
            keywords: ["lineadirecta@policia.gov.co", "adenunciar", "123", "oac", "antecedentes", "correo"]
          }
        },
        evaluation: {
          perfectKeywords: ["lineadirecta@policia.gov.co", "adenunciar", "antecedentes", "oac", "inspección general", "123", "resolución 04180"],
          iaResponseGood: "Excelente. Has mapeado de forma perfecta cada solicitud ciudadana a los recursos del portafolio (Inspección General, OAC, 123 y canales virtuales de denuncia y antecedentes).",
          iaResponseRegular: "Tu respuesta es correcta, pero asegúrate de nombrar las 98 oficinas OAC de la Inspección General y el correo institucional para la radicación transparente de quejas.",
          iaResponseBad: "Incorrecto. No clasificar los trámites o enviarlo a oficinas equivocadas viola el estándar de orientación al ciudadano y portafolio de servicios."
        }
      }
    ]
  },
  {
    id: "derechos-humanos",
    title: "Derechos Humanos",
    description: "Garantía de la protección del derecho a la vida y los Derechos Humanos en toda actividad de policía.",
    modules: [
      {
        id: "respeto-proteccion-dh",
        title: "3. Habilidades y Destrezas en la Protección de la Vida",
        videoDescription: "Este video explica el estándar de protección al derecho a la vida y la integridad física. Instruye sobre las garantías y precauciones durante un allanamiento o ingreso excepcional por voces de auxilio (Art. 32 de la Constitución y la Ley 1801). Enfatiza en el respeto incondicional por la dignidad del ciudadano bajo custodia.",
        metrics: {
          type: "Procedimiento de Auxilio e Ingreso",
          means: "Ingreso sin Orden Escrita / Auxilio de Vida",
          law: "Artículo 32 de la Constitución Política de Colombia / Ley 1801"
        },
        imageSrc: "uso_fuerza_taser_1784399968366.png",
        scenarios: [
{
          title: "Protección del Derecho a la Vida en Procedimientos Policiales",
          description: "La patrulla acude a una riña intrafamiliar donde un sujeto está agrediendo físicamente a su pareja dentro de una vivienda y amenaza con matarla. El agresor grita que nadie puede entrar porque es propiedad privada. Tu prioridad absoluta es proteger la vida de la víctima respetando los marcos constitucionales.",
          role: "Integrante del cuadrante de policía respondiendo a la emergencia.",
          objectives: [
            "Identificar el deber de protección inmediata del derecho a la vida por encima de otras consideraciones.",
            "Reconocer las causales constitucionales para el ingreso a inmueble sin orden escrita (vulneración de derechos / flagrancia).",
            "Neutralizar la amenaza sin violar los Derechos Humanos del agresor una vez sometido."
          ]
        },
{
          title: "Protección del Derecho a la Vida en Procedimientos Policiales",
          description: "La patrulla acude a una riña intrafamiliar donde un sujeto está agrediendo físicamente a su pareja dentro de una vivienda y amenaza con matarla. El agresor grita que nadie puede entrar porque es propiedad privada. Tu prioridad absoluta es proteger la vida de la víctima respetando los marcos constitucionales.",
          role: "Integrante del cuadrante de policía respondiendo a la emergencia.",
          objectives: [
            "Identificar el deber de protección inmediata del derecho a la vida por encima de otras consideraciones.",
            "Reconocer las causales constitucionales para el ingreso a inmueble sin orden escrita (vulneración de derechos / flagrancia).",
            "Neutralizar la amenaza sin violar los Derechos Humanos del agresor una vez sometido."
          ]
        },
{
          title: "Protección del Derecho a la Vida en Procedimientos Policiales",
          description: "La patrulla acude a una riña intrafamiliar donde un sujeto está agrediendo físicamente a su pareja dentro de una vivienda y amenaza con matarla. El agresor grita que nadie puede entrar porque es propiedad privada. Tu prioridad absoluta es proteger la vida de la víctima respetando los marcos constitucionales.",
          role: "Integrante del cuadrante de policía respondiendo a la emergencia.",
          objectives: [
            "Identificar el deber de protección inmediata del derecho a la vida por encima de otras consideraciones.",
            "Reconocer las causales constitucionales para el ingreso a inmueble sin orden escrita (vulneración de derechos / flagrancia).",
            "Neutralizar la amenaza sin violar los Derechos Humanos del agresor una vez sometido."
          ]
        },
{
          title: "Protección del Derecho a la Vida en Procedimientos Policiales",
          description: "La patrulla acude a una riña intrafamiliar donde un sujeto está agrediendo físicamente a su pareja dentro de una vivienda y amenaza con matarla. El agresor grita que nadie puede entrar porque es propiedad privada. Tu prioridad absoluta es proteger la vida de la víctima respetando los marcos constitucionales.",
          role: "Integrante del cuadrante de policía respondiendo a la emergencia.",
          objectives: [
            "Identificar el deber de protección inmediata del derecho a la vida por encima de otras consideraciones.",
            "Reconocer las causales constitucionales para el ingreso a inmueble sin orden escrita (vulneración de derechos / flagrancia).",
            "Neutralizar la amenaza sin violar los Derechos Humanos del agresor una vez sometido."
          ]
        },
{
          title: "Protección del Derecho a la Vida en Procedimientos Policiales",
          description: "La patrulla acude a una riña intrafamiliar donde un sujeto está agrediendo físicamente a su pareja dentro de una vivienda y amenaza con matarla. El agresor grita que nadie puede entrar porque es propiedad privada. Tu prioridad absoluta es proteger la vida de la víctima respetando los marcos constitucionales.",
          role: "Integrante del cuadrante de policía respondiendo a la emergencia.",
          objectives: [
            "Identificar el deber de protección inmediata del derecho a la vida por encima de otras consideraciones.",
            "Reconocer las causales constitucionales para el ingreso a inmueble sin orden escrita (vulneración de derechos / flagrancia).",
            "Neutralizar la amenaza sin violar los Derechos Humanos del agresor una vez sometido."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "@Cuáles son los riesgos de vida inminentes para la víctima? ¿Cómo se afecta la integridad de los involucrados?",
            placeholder: "Analiza la gravedad de la agresión y la vulnerabilidad de la víctima en este escenario...",
            keywords: ["vida", "víctima", "violencia intrafamiliar", "integridad", "amenaza", "protección"]
          },
          definir: {
            question: "Define los fundamentos constitucionales y legales (como el ingreso a domicilio sin orden judicial por auxilio inmediato) que sustentan la intervención de policía.",
            placeholder: "Define el marco legal aplicable que prioriza la vida en la Constitución...",
            keywords: ["artículo 32", "constitución", "auxilio", "domicilio", "ingreso", "ley 1801", "derecho a la vida"]
          },
          idear: {
            question: "¿Qué alternativas tácticas y persuasivas tienes para ingresar, asegurar a la víctima y neutralizar al agresor protegiendo la vida de todos?",
            placeholder: "Plantea alternativas de ingreso y control del infractor...",
            keywords: ["ingresar", "persuasión", "neutralizar", "asegurar", "apoyo"]
          },
          prototipar: {
            question: "Describe detalladamente la secuencia de ingreso y comandos de voz que usarás, incluyendo el momento en que se controla al sujeto y se le leen sus derechos.",
            placeholder: "Ej: '¡Policía Nacional! Ingrese debido a que escuchamos gritos de auxilio. Suelte a la ciudadana... queda capturado...'",
            keywords: ["policía nacional", "auxilio", "derecho a la vida", "capturado", "derechos del capturado"]
          }
        },
        evaluation: {
          perfectKeywords: ["derecho a la vida", "ingreso a domicilio", "auxilio", "flagrancia", "constitución", "captura", "protección"],
          iaResponseGood: "Excelente. Has aplicado la excepción constitucional del ingreso a domicilio sin orden judicial por clamor de auxilio para proteger la vida de una persona (Art. 32 Constitución y Ley 1801), demostrando priorización absoluta del derecho a la vida.",
          iaResponseRegular: "El procedimiento es adecuado, pero recuerda fundamentar muy bien por qué ingresas al domicilio en tu reporte de policía para evitar problemas legales posteriores (siempre por auxilio y protección a la vida).",
          iaResponseBad: "Grave error. No ingresar argumentando que no hay orden judicial cuando la vida de una persona está en riesgo inminente es una omisión del deber policial y una vulneración de Derechos Humanos."
        }
      }
    ]
  },
  {
    id: "uso-fuerza",
    title: "Uso de la Fuerza",
    description: "Uso proporcional y diferenciado de la fuerza. Normas del uso de armas de fuego, taser, tonfa y técnicas de esposamiento.",
    modules: [
      {
        id: "modelo-uso-fuerza",
        title: "4. Habilidades y Destrezas en el Uso de la Fuerza",
        videoDescription: "El video demuestra las técnicas físicas y tácticas de esposamiento (manos a la cabeza, manos atrás, reducción a piso) y los esquemas de movimientos con la tonfa policial y posiciones tácticas con armas de fuego. Adicionalmente, enseña el concepto de la triangulación de seguridad (agente de contacto y de seguridad).",
        metrics: {
          type: "Procedimiento de Control Táctico / Reducción",
          means: "Uso de Esposas / Dispositivos Menos Letales / Bastón Tonfa",
          law: "Resolución 02903 de 2017 (Reglamento Uso de la Fuerza)"
        },
        imageSrc: "uso_fuerza_taser_1784399968366.png",
        scenarios: [
{
          title: "Uso Proporcional, Esposamiento y Posiciones Tácticas",
          description: "Durante un patrullaje nocturno, interceptas a un sospechoso que coincide con la descripción de un autor de hurtos recientes. Al solicitarle un registro, el ciudadano reacciona de forma hostil, empuja al uniformado e intenta sacar un objeto metálico de su cinturón. Debes aplicar el modelo diferenciado y las técnicas tácticas (triangulación, tonfa, esposamiento).",
          role: "Patrullero en labor de control y registro de personas.",
          objectives: [
            "Aplicar el modelo de uso proporcional y diferenciado de la fuerza según la resistencia.",
            "Emplear la triangulación táctica con tu compañero de patrulla.",
            "Desplegar la tonfa o dispositivos menos letales y realizar el esposamiento reglamentario."
          ]
        },
{
          title: "Uso Proporcional, Esposamiento y Posiciones Tácticas",
          description: "Durante un patrullaje nocturno, interceptas a un sospechoso que coincide con la descripción de un autor de hurtos recientes. Al solicitarle un registro, el ciudadano reacciona de forma hostil, empuja al uniformado e intenta sacar un objeto metálico de su cinturón. Debes aplicar el modelo diferenciado y las técnicas tácticas (triangulación, tonfa, esposamiento).",
          role: "Patrullero en labor de control y registro de personas.",
          objectives: [
            "Aplicar el modelo de uso proporcional y diferenciado de la fuerza según la resistencia.",
            "Emplear la triangulación táctica con tu compañero de patrulla.",
            "Desplegar la tonfa o dispositivos menos letales y realizar el esposamiento reglamentario."
          ]
        },
{
          title: "Uso Proporcional, Esposamiento y Posiciones Tácticas",
          description: "Durante un patrullaje nocturno, interceptas a un sospechoso que coincide con la descripción de un autor de hurtos recientes. Al solicitarle un registro, el ciudadano reacciona de forma hostil, empuja al uniformado e intenta sacar un objeto metálico de su cinturón. Debes aplicar el modelo diferenciado y las técnicas tácticas (triangulación, tonfa, esposamiento).",
          role: "Patrullero en labor de control y registro de personas.",
          objectives: [
            "Aplicar el modelo de uso proporcional y diferenciado de la fuerza según la resistencia.",
            "Emplear la triangulación táctica con tu compañero de patrulla.",
            "Desplegar la tonfa o dispositivos menos letales y realizar el esposamiento reglamentario."
          ]
        },
{
          title: "Uso Proporcional, Esposamiento y Posiciones Tácticas",
          description: "Durante un patrullaje nocturno, interceptas a un sospechoso que coincide con la descripción de un autor de hurtos recientes. Al solicitarle un registro, el adulto mayor reacciona de forma hostil, empuja al uniformado e intenta sacar un objeto metálico de su cinturón. Debes aplicar el modelo diferenciado y las técnicas tácticas (triangulación, tonfa, esposamiento).",
          role: "Patrullero en labor de control y registro de personas.",
          objectives: [
            "Aplicar el modelo de uso proporcional y diferenciado de la fuerza según la resistencia.",
            "Emplear la triangulación táctica con tu compañero de patrulla.",
            "Desplegar la tonfa o dispositivos menos letales y realizar el esposamiento reglamentario."
          ]
        },
{
          title: "Uso Proporcional, Esposamiento y Posiciones Tácticas",
          description: "Durante un patrullaje nocturno, interceptas a un sospechoso que coincide con la descripción de un autor de hurtos recientes. Al solicitarle un registro, el turista extranjero reacciona de forma hostil, empuja al uniformado e intenta sacar un objeto metálico de su cinturón. Debes aplicar el modelo diferenciado y las técnicas tácticas (triangulación, tonfa, esposamiento).",
          role: "Patrullero en labor de control y registro de personas.",
          objectives: [
            "Aplicar el modelo de uso proporcional y diferenciado de la fuerza según la resistencia.",
            "Emplear la triangulación táctica con tu compañero de patrulla.",
            "Desplegar la tonfa o dispositivos menos letales y realizar el esposamiento reglamentario."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cuáles son las alertas de agresión activa del ciudadano? ¿Cuál es el peligro para tu compañero de patrulla y cómo debes mantener el autocontrol?",
            placeholder: "Identifica los factores de resistencia y las alertas tácticas...",
            keywords: ["resistencia", "agresión", "alerta", "autocontrol", "triangulación", "seguridad"]
          },
          definir: {
            question: "Establece el nivel de resistencia del ciudadano (resistencia activa agresiva) y el nivel de fuerza correspondiente que la norma te autoriza a usar.",
            placeholder: "Define el nivel de uso de la fuerza y los medios autorizados...",
            keywords: ["resistencia activa", "proporcionalidad", "necesidad", "menos letal", "bastón tonfa", "esposamiento"]
          },
          idear: {
            question: "¿Cómo coordinar la acción con tu compañero (triangulación de roles: de contacto y de seguridad) para reducir al sujeto y colocar las esposas sin causarle lesiones innecesarias?",
            placeholder: "Propón la táctica de triangulación y reducción...",
            keywords: ["triangulación", "contacto", "seguridad", "reducción", "esposas"]
          },
          prototipar: {
            question: "Escribe la secuencia paso a paso: Comandos verbales, despliegue físico de la tonfa si es necesario, posición de esposamiento (manos atrás) y verificación de seguridad de las esposas.",
            placeholder: "Ej: Mi compañero asume seguridad. Doy la orden: '¡Policía Nacional, colóquese de espaldas y lleve sus manos a la cabeza!'. Si hay agresión física...",
            keywords: ["manos atrás", "esposamiento", "tonfa", "policía", "seguridad", "controlar"]
          }
        },
        evaluation: {
          perfectKeywords: ["triangulación", "tonfa", "esposamiento", "proporcionalidad", "menos letal", "resistencia activa", "seguridad"],
          iaResponseGood: "Excelente planeación táctica. Integraste de forma correcta el modelo de triangulación (contacto y seguridad), el uso preventivo de la tonfa y el esposamiento inmediato con las manos atrás para neutralizar el riesgo.",
          iaResponseRegular: "La reducción es correcta, pero recuerda que al esposar se debe aplicar el doble seguro de las esposas para evitar lesiones en las muñecas del ciudadano y evitar que se libere. Sé más específico en la técnica.",
          iaResponseBad: "Procedimiento de alto riesgo. Abordar al sujeto sin el apoyo y triangulación de tu compañero, o usar la fuerza letal directamente sin justificación de agresión letal inminente va en contra de los manuales tácticos y de DDHH."
        }
      }
    ]
  },
  {
    id: "procedimientos-policia",
    title: "Procedimientos de Policía",
    description: "Aplicación de procedimientos de tránsito, captura, incautación, mediación policial, Código de Convivencia y uso correcto del uniforme.",
    modules: [
      {
        id: "mediacion-policial",
        title: "5. Mediación Policial y Código de Convivencia",
        videoDescription: "El video expone cómo opera la mediación policial en el marco de la convivencia ciudadana. Muestra técnicas de resolución alternativa de conflictos sociales, vecinales, escolares y familiares, y el diligenciamiento legal del Acta de Mediación conforme a la Ley 1801 de 2016.",
        metrics: {
          type: "Resolución Alternativa de Conflictos",
          means: "Mediación Comunitaria / Acta de Convivencia",
          law: "Ley 1801 de 2016 (Código de Seguridad y Convivencia)"
        },
        imageSrc: "ai_caso_mediacion_vecinal_1784407707633.png",
        scenarios: [
{
          title: "Mediación Policial frente al Servicio Público de Policía",
          description: "Un grupo de vecinos bloquea una vía principal en protesta porque llevan tres días sin servicio de agua potable. Se genera un caos vehicular inmenso y hay agresiones verbales entre conductores atrapados y los manifestantes. Debes intervenir para desescalar el conflicto aplicando el diálogo y la mediación.",
          role: "Policía mediador en conflictos de convivencia ciudadana.",
          objectives: [
            "Emplear la mediación policial como instrumento para desescalar conflictos.",
            "Facilitar el diálogo entre los líderes de la manifestación and los afectados.",
            "Llegar a acuerdos temporales para habilitar la movilidad respetando los derechos de todos."
          ]
        },
{
          title: "Mediación Policial frente al Servicio Público de Policía",
          description: "Un grupo de comerciantes bloquea una vía principal en protesta porque llevan tres días sin servicio de agua potable. Se genera un caos vehicular inmenso y hay agresiones verbales entre conductores atrapados y los manifestantes. Debes intervenir para desescalar el conflicto aplicando el diálogo y la mediación.",
          role: "Policía mediador en conflictos de convivencia ciudadana.",
          objectives: [
            "Emplear la mediación policial como instrumento para desescalar conflictos.",
            "Facilitar el diálogo entre los líderes de la manifestación and los afectados.",
            "Llegar a acuerdos temporales para habilitar la movilidad respetando los derechos de todos."
          ]
        },
{
          title: "Mediación Policial frente al Servicio Público de Policía",
          description: "Un grupo de vecinos bloquea una vía principal en protesta porque llevan tres días sin servicio de agua potable. Se genera un caos vehicular inmenso y hay agresiones verbales entre conductores atrapados y los manifestantes. Debes intervenir para desescalar el conflicto aplicando el diálogo y la mediación.",
          role: "Policía mediador en conflictos de convivencia ciudadana.",
          objectives: [
            "Emplear la mediación policial como instrumento para desescalar conflictos.",
            "Facilitar el diálogo entre los líderes de la manifestación and los afectados.",
            "Llegar a acuerdos temporales para habilitar la movilidad respetando los derechos de todos."
          ]
        },
{
          title: "Mediación Policial frente al Servicio Público de Policía",
          description: "Un grupo de vecinos bloquea una vía principal en protesta porque llevan tres días sin servicio de agua potable. Se genera un caos vehicular inmenso y hay agresiones verbales entre conductores atrapados y los manifestantes. Debes intervenir para desescalar el conflicto aplicando el diálogo y la mediación.",
          role: "Policía mediador en conflictos de convivencia ciudadana.",
          objectives: [
            "Emplear la mediación policial como instrumento para desescalar conflictos.",
            "Facilitar el diálogo entre los líderes de la manifestación and los afectados.",
            "Llegar a acuerdos temporales para habilitar la movilidad respetando los derechos de todos."
          ]
        },
{
          title: "Mediación Policial frente al Servicio Público de Policía",
          description: "Un grupo de vecinos bloquea una vía principal en protesta porque llevan tres días sin servicio de agua potable. Se genera un caos vehicular inmenso y hay agresiones verbales entre conductores atrapados y los manifestantes. Debes intervenir para desescalar el conflicto aplicando el diálogo y la mediación.",
          role: "Policía mediador en conflictos de convivencia ciudadana.",
          objectives: [
            "Emplear la mediación policial como instrumento para desescalar conflictos.",
            "Facilitar el diálogo entre los líderes de la manifestación and los afectados.",
            "Llegar a acuerdos temporales para habilitar la movilidad respetando los derechos de todos."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cuáles son las demandas de la comunidad (servicio básico de agua) y las frustraciones de los conductores atrapados? ¿Cómo actúas con imparcialidad?",
            placeholder: "Analiza los intereses y posiciones de ambas partes en conflicto...",
            keywords: ["comunidad", "agua", "conductores", "imparcialidad", "diálogo", "mediación"]
          },
          definir: {
            question: "Define las faltas de convivencia del Código de Seguridad y Convivencia Ciudadana en relación al bloqueo de vías y los derechos protegidos en la mediación.",
            placeholder: "Identifica la norma y el rol del mediador policial...",
            keywords: ["bloqueo de vías", "convivencia", "ley 1801", "mediación policial", "acuerdo"]
          },
          idear: {
            question: "¿Qué fórmulas de solución o canales alternativos de diálogo puedes proponer (ej: convocar a la empresa de acueducto, apertura de un carril intermitente)?",
            placeholder: "Plantea alternativas conciliadoras...",
            keywords: ["apertura carril", "acueducto", "empresa", "diálogo", "acuerdo temporal"]
          },
          prototipar: {
            question: "Redacta la propuesta de acuerdo que les plantearías a los manifestantes para despejar la vía temporalmente y los compromisos que quedarían firmados.",
            placeholder: "Ej: 'Propongo abrir un carril cada 10 minutos mientras la patrulla acompaña la delegación ante el Acueducto...'",
            keywords: ["propongo", "carril", "acuerdo", "firma", "mediación policial", "garantías"]
          }
        },
        evaluation: {
          perfectKeywords: ["mediación policial", "diálogo", "acuerdo", "desescalar", "ley 1801", "imparcialidad"],
          iaResponseGood: "Excelente. Has aplicado la mediación policial bajo la Ley 1801 como primera medida ante un bloqueo de vías, facilitando el diálogo intermitente y el enlace con entes gubernamentales para desactivar el conflicto social pacíficamente.",
          iaResponseRegular: "Tu propuesta es buena, pero asegúrate de coordinar apoyo de la alcaldía local o gestores de convivencia para blindar los compromisos adquiridos en el acta de mediación.",
          iaResponseBad: "Desfavorable. Disolver la manifestación mediante la fuerza como primera acción sin agotar las instancias de mediación y diálogo viola los principios de la actividad de policía comunitaria y mediadora."
        }
      },
      {
        id: "captura-incautacion",
        title: "6. Procedimientos de Captura e Incautación",
        videoDescription: "El video instruye en los pasos del procedimiento judicial de captura y la incautación de armas bajo el Decreto 2535. Explica cómo realizar un registro minucioso, la lectura formal de derechos del capturado (Artículo 303 de CPP), y el inicio seguro de la cadena de custodia de elementos incautados.",
        metrics: {
          type: "Procedimiento Judicial / Administrativo",
          means: "Captura en Flagrancia / Incautación de Armamento",
          law: "Decreto 2535 de 1993 / Artículo 303 de CPP"
        },
        imageSrc: "mediacion_policial_calle_1784399979535.png",
        scenarios: [
{
          title: "Incautación de Armas (Decreto 2535) y Procedimiento de Captura",
          description: "Durante una requisa en un establecimiento público, hallas en el bolso de un ciudadano una pistola 9mm con su cargador abastecido. El ciudadano no presenta el permiso para porte ni tenencia del arma de fuego. Debes proceder a realizar la captura por porte ilegal y la respectiva incautación.",
          role: "Patrullero del cuadrante realizando el control de armas.",
          objectives: [
            "Aplicar el procedimiento de captura garantizando los derechos del capturado (Art. 303 CPP).",
            "Realizar la incautación del arma de fuego de conformidad con el Decreto 2535 de 1993.",
            "Asegurar la cadena de custodia de los elementos materiales probatorios."
          ]
        },
{
          title: "Incautación de Armas (Decreto 2535) y Procedimiento de Captura",
          description: "Durante una requisa en un establecimiento público, hallas en el bolso de un ciudadano una pistola 9mm con su cargador abastecido. El ciudadano no presenta el permiso para porte ni tenencia del arma de fuego. Debes proceder a realizar la captura por porte ilegal y la respectiva incautación.",
          role: "Patrullero del cuadrante realizando el control de armas.",
          objectives: [
            "Aplicar el procedimiento de captura garantizando los derechos del capturado (Art. 303 CPP).",
            "Realizar la incautación del arma de fuego de conformidad con el Decreto 2535 de 1993.",
            "Asegurar la cadena de custodia de los elementos materiales probatorios."
          ]
        },
{
          title: "Incautación de Armas (Decreto 2535) y Procedimiento de Captura",
          description: "Durante una requisa en un establecimiento público, hallas en el bolso de un ciudadano una pistola 9mm con su cargador abastecido. El ciudadano no presenta el permiso para porte ni tenencia del arma de fuego. Debes proceder a realizar la captura por porte ilegal y la respectiva incautación.",
          role: "Patrullero del cuadrante realizando el control de armas.",
          objectives: [
            "Aplicar el procedimiento de captura garantizando los derechos del capturado (Art. 303 CPP).",
            "Realizar la incautación del arma de fuego de conformidad con el Decreto 2535 de 1993.",
            "Asegurar la cadena de custodia de los elementos materiales probatorios."
          ]
        },
{
          title: "Incautación de Armas (Decreto 2535) y Procedimiento de Captura",
          description: "Durante una requisa en un establecimiento público, hallas en el bolso de un adulto mayor una pistola 9mm con su cargador abastecido. El adulto mayor no presenta el permiso para porte ni tenencia del arma de fuego. Debes proceder a realizar la captura por porte ilegal y la respectiva incautación.",
          role: "Patrullero del cuadrante realizando el control de armas.",
          objectives: [
            "Aplicar el procedimiento de captura garantizando los derechos del capturado (Art. 303 CPP).",
            "Realizar la incautación del arma de fuego de conformidad con el Decreto 2535 de 1993.",
            "Asegurar la cadena de custodia de los elementos materiales probatorios."
          ]
        },
{
          title: "Incautación de Armas (Decreto 2535) y Procedimiento de Captura",
          description: "Durante una requisa en un establecimiento público, hallas en el bolso de un turista extranjero una pistola 9mm con su cargador abastecido. El turista extranjero no presenta el permiso para porte ni tenencia del arma de fuego. Debes proceder a realizar la captura por porte ilegal y la respectiva incautación.",
          role: "Patrullero del cuadrante realizando el control de armas.",
          objectives: [
            "Aplicar el procedimiento de captura garantizando los derechos del capturado (Art. 303 CPP).",
            "Realizar la incautación del arma de fuego de conformidad con el Decreto 2535 de 1993.",
            "Asegurar la cadena de custodia de los elementos materiales probatorios."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cuáles son las reacciones y temores usuales del capturado? ¿Cómo mantienes la calma y la seguridad táctica mientras lees sus derechos?",
            placeholder: "Analiza el comportamiento del sospechoso y tu seguridad táctica...",
            keywords: ["sospechoso", "calma", "seguridad táctica", "derechos", "procedimiento"]
          },
          definir: {
            question: "Define los delitos penales (porte ilegal de armas) y las normas de incautación aplicables a este elemento.",
            placeholder: "Identifica la norma penal e incautación aplicable...",
            keywords: ["decreto 2535", "porte ilegal", "código penal", "delito", "incautación", "cadena de custodia"]
          },
          idear: {
            question: "¿Cómo garantizar que el arma quede descargada y embalada de forma segura para la cadena de custodia sin alterar huellas o pruebas balísticas?",
            placeholder: "Plantea medidas de seguridad y cadena de custodia...",
            keywords: ["embalar", "descargar", "seguro", "guantes", "acta de incautación", "cadena de custodia"]
          },
          prototipar: {
            question: "Escribe las palabras exactas de lectura de derechos del capturado según el Artículo 303 del Código de Procedimiento Penal que debes recitar en el acto.",
            placeholder: "Ej: 'Usted se encuentra capturado por el delito de... Tiene derecho a permanecer en silencio, a un abogado...'",
            keywords: ["capturado", "permanecer en silencio", "abogado", "comunicarse", "delito", "porte ilegal"]
          }
        },
        evaluation: {
          perfectKeywords: ["decreto 2535", "artículo 303", "cadena de custodia", "permanecer en silencio", "abogado", "incautación", "captura"],
          iaResponseGood: "Excelente procedimiento. Has recitado correctamente los derechos constitucionales del capturado y asegurado el arma bajo el protocolo de cadena de custodia y el Decreto 2535 de 1993, evitando vicios de legalidad.",
          iaResponseRegular: "El procedimiento es adecuado, pero recuerda registrar de inmediato el hecho en el sistema SPOA y rotular técnicamente el contenedor del arma con guantes de látex para preservar pruebas dactilares.",
          iaResponseBad: "Procedimiento incorrecto. Omitir la lectura de derechos del capturado (Art. 303 CPP) invalida la captura ante el juez de control de garantías, y no asegurar la cadena de custodia del arma anula el proceso penal."
        }
      },
      {
        id: "puesto-control-transito",
        title: "7. Puesto de Control y Accidentes de Tránsito",
        videoDescription: "El video instruye en las directrices de seguridad vial: el correcto montaje y señalización de un Puesto de Control en carretera (distancias, conos, chalecos) y el protocolo de primer respondiente en caso de colisiones viales con lesionados, incluyendo la preservación técnica del croquis.",
        metrics: {
          type: "Seguridad Vial / Control Vial",
          means: "Puesto de Control / Señalización Vial / Croquis",
          law: "Ley 769 de 2002 (Código Nacional de Tránsito)"
        },
        imageSrc: "puesto_control_transito_p_1784399989800.png",
        scenarios: [
{
          title: "Instalación de Puesto de Control y Choque con Lesionados",
          description: "Estás asignado a un Puesto de Control para la prevención vial. De repente, a 50 metros del puesto, ocurre una colisión frontal entre dos vehículos particulares. Uno de los conductores está atrapado dentro del vehículo y el otro presenta aliento alcohólico e intenta huir a pie. Debes priorizar las acciones operativas y de tránsito.",
          role: "Policía vial a cargo del Puesto de Control y primer respondiente en accidentes.",
          objectives: [
            "Asegurar el área del accidente para evitar nuevos choques (canalizar tráfico).",
            "Solicitar apoyo médico prioritario para el conductor atrapado y realizar primeros auxilios.",
            "Aprehender al conductor que intenta huir y asegurar el procedimiento de tránsito y embriaguez."
          ]
        },
{
          title: "Instalación de Puesto de Control y Choque con Lesionados",
          description: "Estás asignado a un Puesto de Control para la prevención vial. De repente, a 50 metros del puesto, ocurre una colisión frontal entre dos vehículos particulares. Uno de los conductores está atrapado dentro del vehículo y el otro presenta aliento alcohólico e intenta huir a pie. Debes priorizar las acciones operativas y de tránsito.",
          role: "Policía vial a cargo del Puesto de Control y primer respondiente en accidentes.",
          objectives: [
            "Asegurar el área del accidente para evitar nuevos choques (canalizar tráfico).",
            "Solicitar apoyo médico prioritario para el conductor atrapado y realizar primeros auxilios.",
            "Aprehender al conductor que intenta huir y asegurar el procedimiento de tránsito y embriaguez."
          ]
        },
{
          title: "Instalación de Puesto de Control y Choque con Lesionados",
          description: "Estás asignado a un Puesto de Control para la prevención vial. De repente, a 50 metros del puesto, ocurre una colisión frontal entre dos vehículos particulares. Uno de los conductores está atrapado dentro del vehículo y el otro presenta aliento alcohólico e intenta huir a pie. Debes priorizar las acciones operativas y de tránsito.",
          role: "Policía vial a cargo del Puesto de Control y primer respondiente en accidentes.",
          objectives: [
            "Asegurar el área del accidente para evitar nuevos choques (canalizar tráfico).",
            "Solicitar apoyo médico prioritario para el conductor atrapado y realizar primeros auxilios.",
            "Aprehender al conductor que intenta huir y asegurar el procedimiento de tránsito y embriaguez."
          ]
        },
{
          title: "Instalación de Puesto de Control y Choque con Lesionados",
          description: "Estás asignado a un Puesto de Control para la prevención vial. De repente, a 50 metros del puesto, ocurre una colisión frontal entre dos vehículos particulares. Uno de los conductores está atrapado dentro del vehículo y el otro presenta aliento alcohólico e intenta huir a pie. Debes priorizar las acciones operativas y de tránsito.",
          role: "Policía vial a cargo del Puesto de Control y primer respondiente en accidentes.",
          objectives: [
            "Asegurar el área del accidente para evitar nuevos choques (canalizar tráfico).",
            "Solicitar apoyo médico prioritario para el conductor atrapado y realizar primeros auxilios.",
            "Aprehender al conductor que intenta huir y asegurar el procedimiento de tránsito y embriaguez."
          ]
        },
{
          title: "Instalación de Puesto de Control y Choque con Lesionados",
          description: "Estás asignado a un Puesto de Control para la prevención vial. De repente, a 50 metros del puesto, ocurre una colisión frontal entre dos vehículos particulares. Uno de los conductores está atrapado dentro del vehículo y el otro presenta aliento alcohólico e intenta huir a pie. Debes priorizar las acciones operativas y de tránsito.",
          role: "Policía vial a cargo del Puesto de Control y primer respondiente en accidentes.",
          objectives: [
            "Asegurar el área del accidente para evitar nuevos choques (canalizar tráfico).",
            "Solicitar apoyo médico prioritario para el conductor atrapado y realizar primeros auxilios.",
            "Aprehender al conductor que intenta huir y asegurar el procedimiento de tránsito y embriaguez."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cuáles son las necesidades de salud de los lesionados? ¿Qué riesgos genera el tráfico de vehículos y la imprudencia de los curiosos?",
            placeholder: "Analiza los riesgos de salud y del entorno vial...",
            keywords: ["lesionados", "tránsito", "tráfico", "salud", "primeros auxilios", "seguridad vial"]
          },
          definir: {
            question: "Identifica la infracción penal (lesiones personales culposas en accidente de tránsito, omisión de socorro) y el protocolo de primer respondiente.",
            placeholder: "Define las normas penales y viales del caso...",
            keywords: ["lesiones personales", "omisión de socorro", "embriaguez", "accidente de tránsito", "primer respondiente"]
          },
          idear: {
            question: "¿Cómo dividir las tareas entre el personal de la patrulla para acordonar la escena, atender al herido y detener al sospechoso en fuga simultáneamente?",
            placeholder: "Plantea una división táctica de funciones en el equipo...",
            keywords: ["acordonar", "primeros auxilios", "fuga", "distribución", "equipo"]
          },
          prototipar: {
            question: "Escribe la secuencia de llamadas de emergencia que harías a la central de policía y los pasos inmediatos para fijar la escena del accidente y asegurar las pruebas físicas.",
            placeholder: "Ej: 'Central, requiero ambulancia de urgencia en... procedo a acordonar con conos y detener al conductor que intentaba evadir la zona...'",
            keywords: ["ambulancia", "acordonar", "conos", "fijación", "pruebas", "prueba de alcoholemia"]
          }
        },
        evaluation: {
          perfectKeywords: ["primer respondiente", "acordonar", "ambulancia", "alcoholemia", "accidente", "lesionados", "seguridad vial"],
          iaResponseGood: "Excelente. Actuaste correctamente como primer respondiente: priorizaste la vida solicitando la ambulancia, acordonaste el sitio para evitar un nuevo accidente y detuviste al conductor ebrio que huía, garantizando la cadena de custodia vial.",
          iaResponseRegular: "El procedimiento es bueno. Recuerda documentar el croquis del accidente y solicitar la prueba de alcoholemia (examen clínico o espirómetro) dentro de los términos legales establecidos para accidentes con lesionados.",
          iaResponseBad: "Error operativo grave. Enfocarse en capturar al conductor ebrio descuidando la atención médica del lesionado atrapado o no acordonar la vía de alta velocidad es negligencia y expone a todos a un nuevo choque."
        }
      },
      {
        id: "porte-uniforme",
        title: "8. Porte de Uniforme y Elementos de Dotación",
        videoDescription: "En este video se hace énfasis en la importancia reglamentaria y legal del uso correcto del uniforme y los elementos de dotación (taser, tonfa, chaleco blindado, radio) por seguridad y autocuidado. Asimismo, explica la responsabilidad disciplinaria asociada al abandono o mal uso de los recursos públicos de policía.",
        metrics: {
          type: "Inspección Disciplinaria / Autocuidado",
          means: "Elementos de Protección / Distintivos Reglamentarios",
          law: "Resolución 3372 de 2009 (Reglamento de Uniformes e Insignias)"
        },
        imageSrc: "uso_fuerza_taser_1784399968366.png",
        scenarios: [
{
          title: "Uso Correcto de Uniformes, Accesorios y Medios Tecnológicos",
          description: "Vas a salir a un servicio de patrullaje nocturno en una zona de alta delictividad. El comandante de guardia observa que portas el chaleco antibalas mal ajustado y no llevas tu radio de comunicaciones ni el dispositivo taser de dotación. Debes fundamentar disciplinariamente el uso del uniforme y equipos.",
          role: "Patrullero respondiendo a la revista de armamento y equipo.",
          objectives: [
            "Conocer el reglamento de uniformes, insignias y distintivos de la Policía Nacional.",
            "Portar de forma obligatoria y adecuada los elementos de protección personal y armamento.",
            "Hacer uso adecuado de los medios técnicos, tecnológicos (cámaras corporales/radios)."
          ]
        },
{
          title: "Uso Correcto de Uniformes, Accesorios y Medios Tecnológicos",
          description: "Vas a salir a un servicio de patrullaje nocturno en una zona de alta delictividad. El comandante de guardia observa que portas el chaleco antibalas mal ajustado y no llevas tu radio de comunicaciones ni el dispositivo taser de dotación. Debes fundamentar disciplinariamente el uso del uniforme y equipos.",
          role: "Patrullero respondiendo a la revista de armamento y equipo.",
          objectives: [
            "Conocer el reglamento de uniformes, insignias y distintivos de la Policía Nacional.",
            "Portar de forma obligatoria y adecuada los elementos de protección personal y armamento.",
            "Hacer uso adecuado de los medios técnicos, tecnológicos (cámaras corporales/radios)."
          ]
        },
{
          title: "Uso Correcto de Uniformes, Accesorios y Medios Tecnológicos",
          description: "Vas a salir a un servicio de patrullaje nocturno en una zona de alta delictividad. El comandante de guardia observa que portas el chaleco antibalas mal ajustado y no llevas tu radio de comunicaciones ni el dispositivo taser de dotación. Debes fundamentar disciplinariamente el uso del uniforme y equipos.",
          role: "Patrullero respondiendo a la revista de armamento y equipo.",
          objectives: [
            "Conocer el reglamento de uniformes, insignias y distintivos de la Policía Nacional.",
            "Portar de forma obligatoria y adecuada los elementos de protección personal y armamento.",
            "Hacer uso adecuado de los medios técnicos, tecnológicos (cámaras corporales/radios)."
          ]
        },
{
          title: "Uso Correcto de Uniformes, Accesorios y Medios Tecnológicos",
          description: "Vas a salir a un servicio de patrullaje nocturno en una zona de alta delictividad. El comandante de guardia observa que portas el chaleco antibalas mal ajustado y no llevas tu radio de comunicaciones ni el dispositivo taser de dotación. Debes fundamentar disciplinariamente el uso del uniforme y equipos.",
          role: "Patrullero respondiendo a la revista de armamento y equipo.",
          objectives: [
            "Conocer el reglamento de uniformes, insignias y distintivos de la Policía Nacional.",
            "Portar de forma obligatoria y adecuada los elementos de protección personal y armamento.",
            "Hacer uso adecuado de los medios técnicos, tecnológicos (cámaras corporales/radios)."
          ]
        },
{
          title: "Uso Correcto de Uniformes, Accesorios y Medios Tecnológicos",
          description: "Vas a salir a un servicio de patrullaje nocturno en una zona de alta delictividad. El comandante de guardia observa que portas el chaleco antibalas mal ajustado y no llevas tu radio de comunicaciones ni el dispositivo taser de dotación. Debes fundamentar disciplinariamente el uso del uniforme y equipos.",
          role: "Patrullero respondiendo a la revista de armamento y equipo.",
          objectives: [
            "Conocer el reglamento de uniformes, insignias y distintivos de la Policía Nacional.",
            "Portar de forma obligatoria y adecuada los elementos de protección personal y armamento.",
            "Hacer uso adecuado de los medios técnicos, tecnológicos (cámaras corporales/radios)."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Por qué el no usar los elementos de protección (chaleco, radio) pone en riesgo no solo tu vida sino la seguridad de tu compañero?",
            placeholder: "Analiza el impacto del autocuidado y la seguridad colectiva de la patrulla...",
            keywords: ["autocuidado", "seguridad", "compañero", "riesgo", "vida"]
          },
          definir: {
            question: "Define las implicaciones disciplinarias y reglamentarias de portar incompleto el uniforme de policía y omitir el uso de medios de comunicación asignados.",
            placeholder: "Identifica la norma interna de uniformes y dotación...",
            keywords: ["reglamento de uniformes", "disciplina", "falta disciplinaria", "dotación", "radio", "taser"]
          },
          idear: {
            question: "¿Cómo implementar una lista de chequeo diaria previa a la salida de servicio que garantice que todos los integrantes de la patrulla lleven su equipo completo y funcional?",
            placeholder: "Propón un método de verificación pre-servicio...",
            keywords: ["lista de chequeo", "revista", "preparación", "verificación", "funcionamiento"]
          },
          prototipar: {
            question: "Escribe el compromiso de servicio y seguridad que asumes ante tu comandante, justificando la importancia de portar cada elemento de dotación para el servicio.",
            placeholder: "Ej: 'Mi suboficial, procedo a equipar mi chaleco de forma correcta, a retirar el radio y el dispositivo taser. Comprendo que estos elementos garantizan mi vida...'",
            keywords: ["chaleco", "radio", "taser", "reglamento", "equipar", "seguridad", "vida"]
          }
        },
        evaluation: {
          perfectKeywords: ["reglamento de uniformes", "falta disciplinaria", "chaleco", "radio", "taser", "seguridad", "autocuidado"],
          iaResponseGood: "Excelente conciencia profesional. Respetas las normas disciplinarias y entiendes que el chaleco balístico, la radio y el taser son herramientas indispensables para la seguridad propia y del cuadrante durante el turno.",
          iaResponseRegular: "Tu respuesta es aceptable. No olvides mencionar que el porte de la cámara corporal (bodycam), si está asignada, es una obligación tecnológica que blinda tu actuación frente a acusaciones falsas.",
          iaResponseBad: "Respuesta negligente. Ignorar el uso de los elementos de dotación y protección por comodidad vulnera las normas internas del régimen disciplinario y aumenta críticamente el riesgo de fallecimiento en actos del servicio."
        }
      }
    ]
  },
  {
    id: "derechos-humanos",
    title: "Derechos Humanos",
    description: "Garantizar, respetar y proteger los Derechos Humanos, incluyendo el enfoque de género, la no discriminación y el dominio de los mecanismos de protección constitucional.",
    modules: [
      {
        id: "garantizar-respetar-ddhh",
        title: "1. Garantizar, Respetar y Proteger los DDHH",
        videoDescription: "Instrucciones M2C1L1 - El policía debe garantizar, respetar y proteger los Derechos Humanos en todo momento de su servicio:\n\n1. En caso de manifestaciones y desorden público: Mantener la calma, usar los elementos de protección (casco, escudo) y cumplir el ordenamiento jurídico y el D.I.H.\n2. Principios de uso de fuerza: Proporcionalidad, Legalidad y Necesidad absoluta, primando siempre la vida.\n3. Protección ciudadana: Es deber constitucional brindar atención médica y auxilio inmediato a cualquier persona lesionada.",
        metrics: {
          type: "Respeto y Protección de DDHH",
          means: "Uso de la Fuerza Proporcional / Auxilio a Heridos",
          law: "Constitución Política, DD.HH y D.I.H."
        },
        imageSrc: "ai_caso_ddhh_primeros_auxilios_1784407714247.png",
        scenarios: [
{
          title: "Protección en Manifestaciones y Desorden Público",
          description: "Te encuentras en una protesta social que comienza a volverse violenta, con lanzamiento de objetos. Hay civiles no involucrados y un manifestante resulta herido. Debes activar el protocolo de defensa y actuar bajo los principios de Derechos Humanos.",
          role: "Unidad policial en control y contención de multitudes.",
          objectives: [
            "Conservar la calma, activar el plan de defensa y usar elementos de dotación (casco, escudo).",
            "Garantizar el respeto estricto de los DDHH en el control de disturbios.",
            "Prestar primeros auxilios y proteger la vida del manifestante herido."
          ]
        },
{
          title: "Protección en Manifestaciones y Desorden Público",
          description: "Te encuentras en una protesta social que comienza a volverse violenta, con lanzamiento de objetos. Hay civiles no involucrados y un manifestante resulta herido. Debes activar el protocolo de defensa y actuar bajo los principios de Derechos Humanos.",
          role: "Unidad policial en control y contención de multitudes.",
          objectives: [
            "Conservar la calma, activar el plan de defensa y usar elementos de dotación (casco, escudo).",
            "Garantizar el respeto estricto de los DDHH en el control de disturbios.",
            "Prestar primeros auxilios y proteger la vida del manifestante herido."
          ]
        },
{
          title: "Protección en Manifestaciones y Desorden Público",
          description: "Te encuentras en una protesta social que comienza a volverse violenta, con lanzamiento de objetos. Hay civiles no involucrados y un manifestante resulta herido. Debes activar el protocolo de defensa y actuar bajo los principios de Derechos Humanos.",
          role: "Unidad policial en control y contención de multitudes.",
          objectives: [
            "Conservar la calma, activar el plan de defensa y usar elementos de dotación (casco, escudo).",
            "Garantizar el respeto estricto de los DDHH en el control de disturbios.",
            "Prestar primeros auxilios y proteger la vida del manifestante herido."
          ]
        },
{
          title: "Protección en Manifestaciones y Desorden Público",
          description: "Te encuentras en una protesta social que comienza a volverse violenta, con lanzamiento de objetos. Hay civiles no involucrados y un manifestante resulta herido. Debes activar el protocolo de defensa y actuar bajo los principios de Derechos Humanos.",
          role: "Unidad policial en control y contención de multitudes.",
          objectives: [
            "Conservar la calma, activar el plan de defensa y usar elementos de dotación (casco, escudo).",
            "Garantizar el respeto estricto de los DDHH en el control de disturbios.",
            "Prestar primeros auxilios y proteger la vida del manifestante herido."
          ]
        },
{
          title: "Protección en Manifestaciones y Desorden Público",
          description: "Te encuentras en una protesta social que comienza a volverse violenta, con lanzamiento de objetos. Hay civiles no involucrados y un manifestante resulta herido. Debes activar el protocolo de defensa y actuar bajo los principios de Derechos Humanos.",
          role: "Unidad policial en control y contención de multitudes.",
          objectives: [
            "Conservar la calma, activar el plan de defensa y usar elementos de dotación (casco, escudo).",
            "Garantizar el respeto estricto de los DDHH en el control de disturbios.",
            "Prestar primeros auxilios y proteger la vida del manifestante herido."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cómo puedes equilibrar el mantenimiento del orden público con el respeto a la protesta pacífica y la vida de los transeúntes?",
            placeholder: "Analiza la responsabilidad de salvaguardar la vida mientras controlas el desorden...",
            keywords: ["protesta pacífica", "vida", "orden público", "derechos humanos", "equilibrio"]
          },
          definir: {
            question: "Identifica los principios básicos para el uso de la fuerza según los DDHH aplicables a este escenario.",
            placeholder: "Define necesidad, proporcionalidad y legalidad en el uso de elementos y fuerza...",
            keywords: ["necesidad", "proporcionalidad", "legalidad", "uso de la fuerza", "dotación"]
          },
          idear: {
            question: "¿Qué estrategias no violentas y tácticas puedes usar antes de acudir a la fuerza extrema?",
            placeholder: "Propón el uso de advertencias, diálogo, presencia disuasiva y atención médica...",
            keywords: ["diálogo", "mediación", "presencia", "disuasión", "atención médica"]
          },
          prototipar: {
            question: "Redacta el reporte rápido que le das por radio a la central de comunicaciones asegurando que estás garantizando los Derechos Humanos.",
            placeholder: "Ej: 'Central, se prioriza atención a ciudadano herido y se mantiene formación defensiva respetando el principio de proporcionalidad...'",
            keywords: ["atención", "herido", "formación", "proporcionalidad", "derechos humanos", "ambulancia"]
          }
        },
        evaluation: {
          perfectKeywords: ["proporcionalidad", "necesidad", "legalidad", "ambulancia", "derechos humanos", "vida", "auxilio"],
          iaResponseGood: "Excelente respuesta. Has aplicado los principios de proporcionalidad, priorizando la vida y solicitando asistencia médica, cumpliendo a cabalidad los mandatos del D.I.H y los DD.HH.",
          iaResponseRegular: "La respuesta es aceptable, pero recuerda hacer énfasis explícito en el uso estricto de solo la fuerza necesaria (proporcionalidad) y el aseguramiento del área antes de intervenir médicamente.",
          iaResponseBad: "Procedimiento incorrecto. Responder con fuerza desproporcionada ante provocaciones menores u omitir el auxilio de una persona herida viola gravemente los Derechos Humanos y los protocolos institucionales."
        }
      },
      {
        id: "enfoque-de-genero",
        title: "2. Enfoque de Género y No Discriminación",
        videoDescription: "Instrucciones M2C1L2 - Conocer el enfoque de género y el principio de no discriminación en la actividad de policía:\n\n1. Es mandato institucional ofrecer un trato digno e igualitario a todas las personas, respetando su identidad de género.\n2. Evitar prejuicios o sesgos, así como estereotipos que deriven en la revictimización de poblaciones vulnerables.\n3. Activación de la Ruta de Atención Integral para víctimas de violencias basadas en género (VBG).",
        metrics: {
          type: "Enfoque de Género / Inclusión",
          means: "Trato Digno / Ruta VBG / Cero Estereotipos",
          law: "Constitución Política (Principio de Igualdad y No Discriminación)"
        },
        imageSrc: "ai_caso_enfoque_genero_1784407721258.png",
        scenarios: [
{
          title: "Atención de Caso con Enfoque de Género y Diversidad",
          description: "Atiendes un caso de violencia intrafamiliar. Al llegar, identificas que la víctima es una persona perteneciente a la comunidad LGTBIQ+ que ha sido agredida físicamente por su pareja. Debes garantizar un procedimiento libre de discriminación y asegurar su integridad.",
          role: "Integrantes de patrulla de vigilancia comunitaria.",
          objectives: [
            "Aplicar el principio de no discriminación y garantizar el respeto a la identidad.",
            "Evitar cualquier comentario de revictimización o sesgo personal.",
            "Activar la Ruta de Atención Integral para violencia de género y brindar protección."
          ]
        },
{
          title: "Atención de Caso con Enfoque de Género y Diversidad",
          description: "Atiendes un caso de violencia intrafamiliar. Al llegar, identificas que la víctima es una persona perteneciente a la comunidad LGTBIQ+ que ha sido agredida físicamente por su pareja. Debes garantizar un procedimiento libre de discriminación y asegurar su integridad.",
          role: "Integrantes de patrulla de vigilancia comunitaria.",
          objectives: [
            "Aplicar el principio de no discriminación y garantizar el respeto a la identidad.",
            "Evitar cualquier comentario de revictimización o sesgo personal.",
            "Activar la Ruta de Atención Integral para violencia de género y brindar protección."
          ]
        },
{
          title: "Atención de Caso con Enfoque de Género y Diversidad",
          description: "Atiendes un caso de violencia intrafamiliar. Al llegar, identificas que la víctima es una persona perteneciente a la comunidad LGTBIQ+ que ha sido agredida físicamente por su pareja. Debes garantizar un procedimiento libre de discriminación y asegurar su integridad.",
          role: "Integrantes de patrulla de vigilancia comunitaria.",
          objectives: [
            "Aplicar el principio de no discriminación y garantizar el respeto a la identidad.",
            "Evitar cualquier comentario de revictimización o sesgo personal.",
            "Activar la Ruta de Atención Integral para violencia de género y brindar protección."
          ]
        },
{
          title: "Atención de Caso con Enfoque de Género y Diversidad",
          description: "Atiendes un caso de violencia intrafamiliar. Al llegar, identificas que la víctima es una persona perteneciente a la comunidad LGTBIQ+ que ha sido agredida físicamente por su pareja. Debes garantizar un procedimiento libre de discriminación y asegurar su integridad.",
          role: "Integrantes de patrulla de vigilancia comunitaria.",
          objectives: [
            "Aplicar el principio de no discriminación y garantizar el respeto a la identidad.",
            "Evitar cualquier comentario de revictimización o sesgo personal.",
            "Activar la Ruta de Atención Integral para violencia de género y brindar protección."
          ]
        },
{
          title: "Atención de Caso con Enfoque de Género y Diversidad",
          description: "Atiendes un caso de violencia intrafamiliar. Al llegar, identificas que la víctima es una persona perteneciente a la comunidad LGTBIQ+ que ha sido agredida físicamente por su pareja. Debes garantizar un procedimiento libre de discriminación y asegurar su integridad.",
          role: "Integrantes de patrulla de vigilancia comunitaria.",
          objectives: [
            "Aplicar el principio de no discriminación y garantizar el respeto a la identidad.",
            "Evitar cualquier comentario de revictimización o sesgo personal.",
            "Activar la Ruta de Atención Integral para violencia de género y brindar protección."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Por qué es crucial evitar sesgos personales o institucionales al atender a una víctima de la comunidad LGTBIQ+?",
            placeholder: "Analiza el riesgo de revictimización, el daño psicológico y la pérdida de confianza...",
            keywords: ["revictimización", "confianza", "sesgos", "identidad", "empatía", "dignidad"]
          },
          definir: {
            question: "Define las acciones obligatorias para garantizar el principio de no discriminación durante tu atención.",
            placeholder: "Identifica el uso del pronombre correcto, evitar juicios y activar rutas...",
            keywords: ["ruta de género", "pronombre", "identidad", "no discriminación", "juicios"]
          },
          idear: {
            question: "¿Cómo coordinarías con otras instituciones y entidades para ofrecer el apoyo integral a la víctima de violencia de género?",
            placeholder: "Propón el contacto con salud, Fiscalía, Comisaría de Familia, patrulla púrpura...",
            keywords: ["comisaría", "fiscalía", "salud", "patrulla púrpura", "ruta de atención", "integral"]
          },
          prototipar: {
            question: "Escribe cómo te dirigirías a la víctima al iniciar el procedimiento, respetando su identidad de manera asertiva y protectora.",
            placeholder: "Ej: 'Buenas noches, somos la Policía, estamos aquí para protegerle. Nos dirigiremos a usted como prefiera... activaremos los protocolos de salud.'",
            keywords: ["identidad", "proteger", "garantías", "respeto", "ruta", "pronombre", "salud"]
          }
        },
        evaluation: {
          perfectKeywords: ["ruta", "patrulla púrpura", "no discriminación", "identidad", "revictimización", "pronombre", "respeto"],
          iaResponseGood: "Excelente. Has garantizado el trato digno, aplicando correctamente el enfoque de género, activando la ruta correspondiente (como la Patrulla Púrpura) y brindando seguridad sin emitir juicios de valor.",
          iaResponseRegular: "El procedimiento es adecuado en cuanto al respeto, pero te faltó mencionar específicamente la activación de las rutas de salud y justicia competentes (Ruta Integral de Atención VBG).",
          iaResponseBad: "Procedimiento revictimizante y altamente incorrecto. El uso de estereotipos, chistes ofensivos, o la desestimación de la denuncia de la víctima constituyen violaciones severas al principio constitucional de no discriminación y acarrean graves sanciones."
        }
      },
      {
        id: "mecanismos-proteccion",
        title: "3. Mecanismos de Protección Constitucional",
        videoDescription: "Instrucciones M2C1L3 - Conocer y orientar al ciudadano sobre los mecanismos de protección constitucional de Derechos Humanos:\n\n1. Acción de Tutela (Art. 86): Para reclamar la protección inmediata de derechos fundamentales vulnerados (vida, salud, buen nombre, etc.).\n2. Habeas Corpus (Art. 30): Para proteger el derecho a la libertad personal ante capturas o detenciones ilegales o prolongadas indebidamente.\n3. Derecho de Petición (Art. 23): Para presentar solicitudes respetuosas y recibir pronta respuesta institucional.",
        metrics: {
          type: "Asesoría Constitucional",
          means: "Acción de Tutela / Habeas Corpus / Derecho Petición",
          law: "Constitución Política de Colombia"
        },
        imageSrc: "ai_caso_mecanismos_constitucionales_1784407738502.png",
        scenarios: [
{
          title: "Orientación Ciudadana sobre Mecanismos de Protección",
          description: "En tu patrullaje, un ciudadano te aborda desesperado manifestando que su familiar requiere una cirugía urgente para salvar su vida y la EPS se la niega. A su vez, te cuenta que su hijo fue retenido por unos guardias de seguridad privada en un conjunto residencial por más de 12 horas sin justificación legal. Pide orientación de la Policía.",
          role: "Patrullero ofreciendo orientación y mediación comunitaria.",
          objectives: [
            "Orientar al ciudadano sobre el uso de la Acción de Tutela para el derecho a la salud/vida.",
            "Orientar sobre la acción de Habeas Corpus o la intervención policial inmediata por retención ilegal.",
            "Brindar una respuesta asertiva basada en el conocimiento de la Constitución."
          ]
        },
{
          title: "Orientación Ciudadana sobre Mecanismos de Protección",
          description: "En tu patrullaje, un ciudadano te aborda desesperado manifestando que su familiar requiere una cirugía urgente para salvar su vida y la EPS se la niega. A su vez, te cuenta que su hijo fue retenido por unos guardias de seguridad privada en un conjunto residencial por más de 12 horas sin justificación legal. Pide orientación de la Policía.",
          role: "Patrullero ofreciendo orientación y mediación comunitaria.",
          objectives: [
            "Orientar al ciudadano sobre el uso de la Acción de Tutela para el derecho a la salud/vida.",
            "Orientar sobre la acción de Habeas Corpus o la intervención policial inmediata por retención ilegal.",
            "Brindar una respuesta asertiva basada en el conocimiento de la Constitución."
          ]
        },
{
          title: "Orientación Ciudadana sobre Mecanismos de Protección",
          description: "En tu patrullaje, un ciudadano te aborda desesperado manifestando que su familiar requiere una cirugía urgente para salvar su vida y la EPS se la niega. A su vez, te cuenta que su hijo fue retenido por unos guardias de seguridad privada en un conjunto residencial por más de 12 horas sin justificación legal. Pide orientación de la Policía.",
          role: "Patrullero ofreciendo orientación y mediación comunitaria.",
          objectives: [
            "Orientar al ciudadano sobre el uso de la Acción de Tutela para el derecho a la salud/vida.",
            "Orientar sobre la acción de Habeas Corpus o la intervención policial inmediata por retención ilegal.",
            "Brindar una respuesta asertiva basada en el conocimiento de la Constitución."
          ]
        },
{
          title: "Orientación Ciudadana sobre Mecanismos de Protección",
          description: "En tu patrullaje, un adulto mayor te aborda desesperado manifestando que su familiar requiere una cirugía urgente para salvar su vida y la EPS se la niega. A su vez, te cuenta que su hijo fue retenido por unos guardias de seguridad privada en un conjunto residencial por más de 12 horas sin justificación legal. Pide orientación de la Policía.",
          role: "Patrullero ofreciendo orientación y mediación comunitaria.",
          objectives: [
            "Orientar al adulto mayor sobre el uso de la Acción de Tutela para el derecho a la salud/vida.",
            "Orientar sobre la acción de Habeas Corpus o la intervención policial inmediata por retención ilegal.",
            "Brindar una respuesta asertiva basada en el conocimiento de la Constitución."
          ]
        },
{
          title: "Orientación Ciudadana sobre Mecanismos de Protección",
          description: "En tu patrullaje, un turista extranjero te aborda desesperado manifestando que su familiar requiere una cirugía urgente para salvar su vida y la EPS se la niega. A su vez, te cuenta que su hijo fue retenido por unos guardias de seguridad privada en un conjunto residencial por más de 12 horas sin justificación legal. Pide orientación de la Policía.",
          role: "Patrullero ofreciendo orientación y mediación comunitaria.",
          objectives: [
            "Orientar al turista extranjero sobre el uso de la Acción de Tutela para el derecho a la salud/vida.",
            "Orientar sobre la acción de Habeas Corpus o la intervención policial inmediata por retención ilegal.",
            "Brindar una respuesta asertiva basada en el conocimiento de la Constitución."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cómo afecta a la percepción ciudadana de seguridad y justicia que un policía no conozca y no asesore sobre los derechos fundamentales?",
            placeholder: "Analiza el impacto del desconocimiento policial en la garantía de derechos de la sociedad...",
            keywords: ["desprotección", "justicia", "confianza", "asesoría", "derechos fundamentales"]
          },
          definir: {
            question: "Define exactamente qué mecanismo constitucional aplica para el caso de salud (EPS) y cuál para la retención ilegal (guardias privados).",
            placeholder: "Identifica la Acción de Tutela y el Habeas Corpus/Libertad...",
            keywords: ["tutela", "salud", "habeas corpus", "libertad", "vida", "ilegal"]
          },
          idear: {
            question: "¿Cómo le explicarías al ciudadano de manera sencilla qué debe hacer para interponer estos mecanismos o cómo vas a actuar tú frente a la retención?",
            placeholder: "Plantea una orientación paso a paso y la acción policial de verificación en el conjunto...",
            keywords: ["juez", "defensoría", "verificación", "personería", "orientación", "sencillo"]
          },
          prototipar: {
            question: "Redacta el diálogo exacto de asesoría que le ofreces al ciudadano.",
            placeholder: "Ej: 'Señor, para la cirugía de su familiar, debe interponer una Acción de Tutela ante cualquier juez... para la situación de su hijo, eso es una privación ilegal y aplicaría el Habeas Corpus, vamos inmediatamente a verificar...'",
            keywords: ["acción de tutela", "habeas corpus", "juez", "vamos", "verificar", "salud", "libertad"]
          }
        },
        evaluation: {
          perfectKeywords: ["acción de tutela", "habeas corpus", "juez", "verificar", "libertad", "salud", "derecho fundamental"],
          iaResponseGood: "Excelente dominio jurídico. Orientaste perfectamente sobre la Acción de Tutela (salud/vida) e identificaste la gravedad de la privación ilegal interviniendo de inmediato (Habeas Corpus/rescate).",
          iaResponseRegular: "Buena orientación teórica sobre los recursos, pero recuerda que frente a un delito en curso (secuestro/retención ilegal) el policía debe actuar inmediatamente en el lugar de los hechos y no solo asesorar.",
          iaResponseBad: "Orientación deficiente. No asesorar sobre la Tutela y evadir la responsabilidad policial frente a una retención ilegal en curso, vulnera el mandato de protección y acarrea consecuencias disciplinarias y penales por omisión."
        }
      }
    ]
  },
  {
    id: "procedimientos-policia",
    title: "Procedimientos de Policía",
    description: "Dominio técnico, legal y procedimental en seguridad vial, mediación policial, incautaciones y el correcto porte del uniforme y elementos del servicio.",
    modules: [
      {
        id: "procedimiento-transito",
        title: "1. Tránsito: Puesto de Control y Accidentes",
        videoDescription: "Instrucciones de Tránsito (M4C3L6E y M4C3L8E):\n\n1. Puesto de Control: Instalar la señalización reglamentaria, mantener medidas de seguridad táctica y realizar un abordaje cortés a los vehículos.\n2. Accidentes de Tránsito: Acordonar el área, solicitar asistencia médica prioritaria para heridos y salvaguardar la escena sin alterar el material probatorio (fijación).",
        metrics: {
          type: "Seguridad Vial y Tránsito",
          means: "Puesto de Control / Acordonamiento / Primer Respondiente",
          law: "Código Nacional de Tránsito (Ley 769 de 2002)"
        },
        imageSrc: "ai_caso_transito_puesto_control_1784407746273.png",
        scenarios: [
{
          title: "Accidente con Lesionados cerca al Puesto de Control",
          description: "Mientras ejecutas un puesto de control vial, ocurre un accidente grave a pocos metros con un vehículo particular y una motocicleta. El motociclista está gravemente herido en el asfalto. Debes actuar como primer respondiente garantizando el procedimiento de tránsito y la vida.",
          role: "Policía de Tránsito / Vigilancia.",
          objectives: [
            "Asegurar y acordonar el área para evitar siniestros secundarios.",
            "Prestar primeros auxilios y solicitar ambulancia de forma inmediata.",
            "Fijar la escena para el informe de accidente (croquis) sin alterar evidencias."
          ]
        },
{
          title: "Choque Múltiple en Hora Pico cerca al Puesto de Control",
          description: "Mientras ejecutas un puesto de control vial, ocurre un accidente grave a pocos metros con un vehículo particular y una motocicleta. El motociclista está gravemente herido en el asfalto. Debes actuar como primer respondiente garantizando el procedimiento de tránsito y la vida.",
          role: "Policía de Tránsito / Vigilancia.",
          objectives: [
            "Asegurar y acordonar el área para evitar siniestros secundarios.",
            "Prestar primeros auxilios y solicitar ambulancia de forma inmediata.",
            "Fijar la escena para el informe de accidente (croquis) sin alterar evidencias."
          ]
        },
{
          title: "Accidente con Lesionados cerca al Puesto de Control",
          description: "Mientras ejecutas un puesto de control vial, ocurre un accidente grave a pocos metros con un vehículo particular y una motocicleta. El motociclista está gravemente herido en el asfalto. Debes actuar como primer respondiente garantizando el procedimiento de tránsito y la vida.",
          role: "Policía de Tránsito / Vigilancia.",
          objectives: [
            "Asegurar y acordonar el área para evitar siniestros secundarios.",
            "Prestar primeros auxilios y solicitar ambulancia de forma inmediata.",
            "Fijar la escena para el informe de accidente (croquis) sin alterar evidencias."
          ]
        },
{
          title: "Accidente con Lesionados cerca al Puesto de Control",
          description: "Mientras ejecutas un puesto de control vial, ocurre un accidente grave a pocos metros con un vehículo particular y una motocicleta. El motociclista está gravemente herido en el asfalto. Debes actuar como primer respondiente garantizando el procedimiento de tránsito y la vida.",
          role: "Policía de Tránsito / Vigilancia.",
          objectives: [
            "Asegurar y acordonar el área para evitar siniestros secundarios.",
            "Prestar primeros auxilios y solicitar ambulancia de forma inmediata.",
            "Fijar la escena para el informe de accidente (croquis) sin alterar evidencias."
          ]
        },
{
          title: "Accidente con Lesionados cerca al Puesto de Control",
          description: "Mientras ejecutas un puesto de control vial, ocurre un accidente grave a pocos metros con un vehículo particular y una motocicleta. El motociclista está gravemente herido en el asfalto. Debes actuar como primer respondiente garantizando el procedimiento de tránsito y la vida.",
          role: "Policía de Tránsito / Vigilancia.",
          objectives: [
            "Asegurar y acordonar el área para evitar siniestros secundarios.",
            "Prestar primeros auxilios y solicitar ambulancia de forma inmediata.",
            "Fijar la escena para el informe de accidente (croquis) sin alterar evidencias."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cuáles son las necesidades de salud inmediatas del motociclista y qué riesgos genera el tráfico de vehículos cercano?",
            placeholder: "Analiza el riesgo vital del lesionado y el peligro del entorno vehicular...",
            keywords: ["lesionado", "vida", "riesgos", "tráfico", "seguridad vial"]
          },
          definir: {
            question: "Identifica las acciones normativas como primer respondiente en un accidente con heridos.",
            placeholder: "Define acordonamiento, atención médica y fijación probatoria...",
            keywords: ["acordonar", "primer respondiente", "ambulancia", "fijación", "escena"]
          },
          idear: {
            question: "¿Cómo coordinarías con tu compañero la división de tareas entre desviar el tráfico y atender al herido?",
            placeholder: "Propón la asignación de roles operativos...",
            keywords: ["compañero", "tráfico", "desviar", "roles", "atención"]
          },
          prototipar: {
            question: "Redacta la comunicación de radio a la central solicitando apoyo y describiendo el aseguramiento de la escena.",
            placeholder: "Ej: 'Central, requiero ambulancia urgente por accidente... procedo a acordonar la escena y desviar el flujo vehicular.'",
            keywords: ["ambulancia", "central", "acordonar", "desviar", "flujo", "accidente"]
          }
        },
        evaluation: {
          perfectKeywords: ["acordonar", "ambulancia", "primer respondiente", "tráfico", "evidencia", "fijar"],
          iaResponseGood: "Procedimiento impecable. Protegiste la vida solicitando la ambulancia rápidamente, aseguraste el área (acordonamiento) y garantizaste la inalterabilidad de la escena para las autoridades competentes.",
          iaResponseRegular: "La respuesta es aceptable, pero recuerda siempre mencionar la fijación topográfica o fotográfica de la escena antes de que los vehículos sean removidos.",
          iaResponseBad: "Fallo procedimental grave. Mover los vehículos antes de la fijación técnica en un accidente con heridos o no solicitar asistencia médica urgente viola el protocolo de primer respondiente y de tránsito."
        }
      },
      {
        id: "mediacion-policial",
        title: "2. Mediación Policial y Resolución de Conflictos",
        videoDescription: "Instrucciones Mediación Policial (M4C1L1E y M4C1L3E):\n\n1. El rol del mediador policial es neutral, imparcial y facilitador. No impone soluciones, ayuda a las partes a encontrarlas.\n2. Se debe aplicar el protocolo de mediación INSITU (en el lugar de los hechos) para desactivar la escalada de la violencia.\n3. Habilidades requeridas: Escucha activa, comunicación asertiva, empatía y manejo de las emociones.",
        metrics: {
          type: "Resolución de Conflictos",
          means: "Mediación Policial In Situ / Escucha Activa",
          law: "Ley 1801 de 2016 (Código Nacional de Seguridad y Convivencia)"
        },
        imageSrc: "ai_caso_mediacion_vecinal_1784407707633.png",
        scenarios: [
{
          title: "Conflicto Vecinal por Ruido y Basuras",
          description: "Acudes a un requerimiento ciudadano donde dos vecinos están a punto de agredirse físicamente. Uno acusa al otro de ruido excesivo y de arrojar basuras en su puerta. Debes aplicar la mediación policial In Situ para resolver el conflicto.",
          role: "Policía Mediador del Cuadrante.",
          objectives: [
            "Desescalar la agresividad y separar a las partes garantizando la seguridad.",
            "Mantener la neutralidad y aplicar la escucha activa sin emitir juicios.",
            "Guiar a las partes para que construyan un acuerdo de convivencia voluntario."
          ]
        },
{
          title: "Conflicto entre Comerciantes por Espacio Público",
          description: "Acudes a un requerimiento ciudadano donde dos comerciantes están a punto de agredirse físicamente. Uno acusa al otro de invadir el andén con mercancía en su puerta. Debes aplicar la mediación policial In Situ para resolver el conflicto.",
          role: "Policía Mediador del Cuadrante.",
          objectives: [
            "Desescalar la agresividad y separar a las partes garantizando la seguridad.",
            "Mantener la neutralidad y aplicar la escucha activa sin emitir juicios.",
            "Guiar a las partes para que construyan un acuerdo de convivencia voluntario."
          ]
        },
{
          title: "Riña Familiar por Ruido y Basuras",
          description: "Acudes a un requerimiento ciudadano donde dos vecinos están a punto de agredirse físicamente. Uno acusa al otro de problemas de herencia y de arrojar basuras en su puerta. Debes aplicar la mediación policial In Situ para resolver el conflicto.",
          role: "Policía Mediador del Cuadrante.",
          objectives: [
            "Desescalar la agresividad y separar a las partes garantizando la seguridad.",
            "Mantener la neutralidad y aplicar la escucha activa sin emitir juicios.",
            "Guiar a las partes para que construyan un acuerdo de convivencia voluntario."
          ]
        },
{
          title: "Conflicto Vecinal por Ruido y Basuras",
          description: "Acudes a un requerimiento adulto mayor donde dos vecinos están a punto de agredirse físicamente. Uno acusa al otro de ruido excesivo y de arrojar basuras en su puerta. Debes aplicar la mediación policial In Situ para resolver el conflicto.",
          role: "Policía Mediador del Cuadrante.",
          objectives: [
            "Desescalar la agresividad y separar a las partes garantizando la seguridad.",
            "Mantener la neutralidad y aplicar la escucha activa sin emitir juicios.",
            "Guiar a las partes para que construyan un acuerdo de convivencia voluntario."
          ]
        },
{
          title: "Conflicto Vecinal por Ruido y Basuras",
          description: "Acudes a un requerimiento turista extranjero donde dos vecinos están a punto de agredirse físicamente. Uno acusa al otro de ruido excesivo y de arrojar basuras en su puerta. Debes aplicar la mediación policial In Situ para resolver el conflicto.",
          role: "Policía Mediador del Cuadrante.",
          objectives: [
            "Desescalar la agresividad y separar a las partes garantizando la seguridad.",
            "Mantener la neutralidad y aplicar la escucha activa sin emitir juicios.",
            "Guiar a las partes para que construyan un acuerdo de convivencia voluntario."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Por qué es fundamental que el policía no tome partido ni juzgue a ninguno de los vecinos durante el conflicto?",
            placeholder: "Analiza el principio de imparcialidad y confianza...",
            keywords: ["imparcialidad", "neutral", "juzgar", "confianza", "partido"]
          },
          definir: {
            question: "Define los pasos del protocolo de mediación In Situ (desescalar, escuchar, proponer).",
            placeholder: "Identifica la intervención temprana y la facilitación del diálogo...",
            keywords: ["desescalar", "escuchar", "dialogar", "mediación", "acuerdo"]
          },
          idear: {
            question: "¿Qué técnicas de comunicación usarías para que un vecino muy alterado baje la voz y comience a escuchar?",
            placeholder: "Propón el tono de voz calmado, validación de emociones y pausas...",
            keywords: ["tono calmado", "voz", "validar", "escucha activa", "empatía"]
          },
          prototipar: {
            question: "Redacta el abordaje inicial y la invitación a conciliar que harías a las dos partes.",
            placeholder: "Ej: 'Buenas noches, somos la Policía Nacional. Por favor, bajemos la voz. Vamos a escuchar a cada uno por turnos para llegar a un acuerdo...'",
            keywords: ["buenas noches", "bajar la voz", "turnos", "escuchar", "acuerdo", "convivencia"]
          }
        },
        evaluation: {
          perfectKeywords: ["neutral", "imparcial", "escucha activa", "acuerdo", "turnos", "desescalar"],
          iaResponseGood: "Excelente manejo de conflicto. Has asumido un rol imparcial y facilitador, logrando desescalar la situación a través del diálogo y permitiendo que los vecinos construyan su propio acuerdo.",
          iaResponseRegular: "El abordaje es aceptable, pero recuerda que como mediador no debes imponer la solución, sino hacer preguntas orientadoras para que las partes lleguen a un pacto voluntario.",
          iaResponseBad: "Procedimiento incorrecto. Tomar partido, imponer una solución arbitraria o amenazar inmediatamente con comparendos sin agotar la mediación (cuando aplica) anula el propósito preventivo del Código de Convivencia."
        }
      },
      {
        id: "porte-uniforme-comunicaciones",
        title: "3. Porte del Uniforme y Radiocomunicaciones",
        videoDescription: "Instrucciones de Uniformes y Comunicaciones (M4C4L1E y M4C4L3E):\n\n1. Obligaciones y Prohibiciones: Portar el uniforme con decoro y pulcritud. Prohibido usar el celular en servicio, comer en vía pública o desdibujar la imagen institucional.\n2. Elementos del Servicio: Portar de forma obligatoria el cinturón multipropósito con los elementos de dotación (radio, taser, esposa, bastón tonfa).\n3. Radiocomunicaciones: Utilizar la radio de manera efectiva, clara y precisa, usando las claves y jerga institucional correspondiente.",
        metrics: {
          type: "Disciplina Policial y Doctrina",
          means: "Uso correcto del uniforme / Radio / Dotación",
          law: "Reglamento de Uniformes y Régimen Disciplinario"
        },
        imageSrc: "ai_caso_porte_uniforme_radio_1784407761368.png",
        scenarios: [
{
          title: "Revista de Presentación y Solicitud de Apoyo por Radio",
          description: "Estás en el turno de vigilancia y un comandante pasa revista. Encuentra que tienes el uniforme incompleto. Minutos después, debes reportar una situación sospechosa por radio y pedir apoyo urgente. Demuestra tu pericia en ambas situaciones.",
          role: "Patrullero en servicio de vigilancia.",
          objectives: [
            "Reconocer las obligaciones y prohibiciones del porte del uniforme.",
            "Identificar la correcta ubicación del equipo en el cinturón multipropósito.",
            "Transmitir un mensaje por radio de forma clara, concisa y bajo los protocolos de comunicación."
          ]
        },
{
          title: "Revista de Presentación y Solicitud de Apoyo por Radio",
          description: "Estás en el turno de vigilancia y un comandante pasa revista. Encuentra que tienes el uniforme incompleto. Minutos después, debes reportar una situación sospechosa por radio y pedir apoyo urgente. Demuestra tu pericia en ambas situaciones.",
          role: "Patrullero en servicio de vigilancia.",
          objectives: [
            "Reconocer las obligaciones y prohibiciones del porte del uniforme.",
            "Identificar la correcta ubicación del equipo en el cinturón multipropósito.",
            "Transmitir un mensaje por radio de forma clara, concisa y bajo los protocolos de comunicación."
          ]
        },
{
          title: "Revista de Presentación y Solicitud de Apoyo por Radio",
          description: "Estás en el turno de vigilancia y un comandante pasa revista. Encuentra que tienes el uniforme incompleto. Minutos después, debes reportar una situación sospechosa por radio y pedir apoyo urgente. Demuestra tu pericia en ambas situaciones.",
          role: "Patrullero en servicio de vigilancia.",
          objectives: [
            "Reconocer las obligaciones y prohibiciones del porte del uniforme.",
            "Identificar la correcta ubicación del equipo en el cinturón multipropósito.",
            "Transmitir un mensaje por radio de forma clara, concisa y bajo los protocolos de comunicación."
          ]
        },
{
          title: "Revista de Presentación y Solicitud de Apoyo por Radio",
          description: "Estás en el turno de vigilancia y un comandante pasa revista. Encuentra que tienes el uniforme incompleto. Minutos después, debes reportar una situación sospechosa por radio y pedir apoyo urgente. Demuestra tu pericia en ambas situaciones.",
          role: "Patrullero en servicio de vigilancia.",
          objectives: [
            "Reconocer las obligaciones y prohibiciones del porte del uniforme.",
            "Identificar la correcta ubicación del equipo en el cinturón multipropósito.",
            "Transmitir un mensaje por radio de forma clara, concisa y bajo los protocolos de comunicación."
          ]
        },
{
          title: "Revista de Presentación y Solicitud de Apoyo por Radio",
          description: "Estás en el turno de vigilancia y un comandante pasa revista. Encuentra que tienes el uniforme incompleto. Minutos después, debes reportar una situación sospechosa por radio y pedir apoyo urgente. Demuestra tu pericia en ambas situaciones.",
          role: "Patrullero en servicio de vigilancia.",
          objectives: [
            "Reconocer las obligaciones y prohibiciones del porte del uniforme.",
            "Identificar la correcta ubicación del equipo en el cinturón multipropósito.",
            "Transmitir un mensaje por radio de forma clara, concisa y bajo los protocolos de comunicación."
          ]
        }
],
designThinking: {
          empatizar: {
            question: "¿Cómo afecta a la percepción de seguridad del ciudadano verte usar el celular para asuntos personales o portar el uniforme desorganizado?",
            placeholder: "Analiza el impacto en la imagen institucional y el respeto...",
            keywords: ["imagen", "respeto", "seguridad", "celular", "desorganizado", "disciplina"]
          },
          definir: {
            question: "Define las obligaciones principales sobre el cinturón multipropósito y qué elementos salvaguardan tu vida.",
            placeholder: "Identifica radio, tonfa, arma de dotación, esposa...",
            keywords: ["cinturón", "tonfa", "radio", "esposas", "dotación", "seguridad"]
          },
          idear: {
            question: "¿Qué datos son indispensables al pedir apoyo por radio para que las demás patrullas lleguen rápido y seguras?",
            placeholder: "Propón ubicación, descripción del sospechoso, tipo de arma, etc...",
            keywords: ["ubicación", "dirección", "sospechoso", "apoyo", "claridad"]
          },
          prototipar: {
            question: "Redacta la transmisión exacta por radio solicitando apoyo usando lenguaje claro y conciso.",
            placeholder: "Ej: 'Central, de la patrulla del cuadrante, requerimos apoyo inmediato en la calle X con carrera Y, sujeto sospechoso armado...'",
            keywords: ["central", "cuadrante", "apoyo", "inmediato", "ubicación", "armado"]
          }
        },
        evaluation: {
          perfectKeywords: ["central", "apoyo", "ubicación", "disciplina", "cinturón multipropósito", "imagen", "dotación"],
          iaResponseGood: "Excelente dominio de la doctrina. Eres consciente de la disciplina en el porte del uniforme y lograste transmitir un mensaje radial claro, vital para salvaguardar tu vida y la de tus compañeros.",
          iaResponseRegular: "Respuesta aceptable. Asegúrate de ser más preciso con la dirección y las características del evento al usar la radio, cada segundo cuenta en una emergencia.",
          iaResponseBad: "Evaluación deficiente. Restarle importancia a la presentación personal afecta la disciplina policial, y dar un reporte confuso o incompleto por radio pone en riesgo la vida de las unidades de apoyo."
        }
      }
    ]
  }
];

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
        videoUrl: "https://www.youtube.com/embed/cl7iUeFvy5E",
        videoDescription: "Instrucciones del Manual de Atención y Servicio al Ciudadano (Resolución 04180 de 2022):\n\n1. Protocolo de Atención Presencial Común (Art. 16):\n   - Saludo Obligatorio: 'Dios y Patria, buenos días/tardes/noches, mi nombre es (Grado, Nombre y Apellido), ¿En qué puedo servirle?'.\n   - Presentación Personal: Identificación siempre visible y uniforme impecable.\n   - Comportamiento: Prohibido realizar actividades personales (comer en el puesto de facción, chicle, maquillarse, usar celular personal o hablar con compañeros temas ajenos al servicio) frente al ciudadano.\n   - Primeros y Últimos 30 Segundos: Usar los primeros 30 segundos del contacto para sorprender favorablemente al ciudadano con cordialidad y respeto, y los últimos 30 segundos para reforzar la credibilidad y confianza institucional.\n   - Despedida formal: Agradecer al ciudadano por recurrir a la Policía, preguntar si se le ofrece algo más y dar un apretón de manos seguro.\n\n2. Habilidades Comunicativas Básicas (Art. 13):\n   - Amabilidad y cortesía, Tolerancia, Persuasión, Capacidad para asesorar/orientar, Autocontrol y Capacidad de Escucha Activa.",
        metrics: {
          type: "Protocolo de Atención Personal (Art. 16 - Res. 04180/2022)",
          means: "Saludar, Escuchar, Actuar (SEA Policía) / Habilidades del Art. 13",
          law: "Resolución 04180 de 2022 (Manual de Atención al Ciudadano)"
        },
        imageSrc: "atencion_caso_comercial_1784399958164.png",
        scenario: {
          title: "Aplicación del Protocolo Común y Habilidades del Art. 13",
          description: "Estás de facción en el puesto de información de la estación de policía. Un ciudadano ingresa de manera abrupta e insultando a los uniformados debido a una inconformidad. Debes aplicar estrictamente el protocolo del Artículo 16 de la Resolución 04180 (Saludo reglamentario, control de comportamiento, voz y despedida) y las habilidades de amabilidad, tolerancia y autocontrol para canalizar el caso.",
          role: "Patrullero del área de atención al ciudadano en Estación de Policía.",
          objectives: [
            "Iniciar la atención con el saludo reglamentario de la Resolución 04180 ('Dios y Patria...').",
            "Aplicar las pautas de comportamiento del puesto de trabajo y autocontrol ante insultos.",
            "Utilizar la técnica de los primeros y últimos 30 segundos y realizar la despedida institucional."
          ]
        },
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
        title: "2. Atención Presencial Preferencial",
        videoUrl: "https://www.youtube.com/embed/cl7iUeFvy5E", // Se mantiene el video doctrinal oficial
        videoDescription: "Instrucciones del Protocolo de Atención Presencial Preferencial (Art. 16, numeral 2 - Resolución 04180 de 2022):\n\n1. Beneficiarios prioritarios: Adultos mayores, mujeres embarazadas, niños, niñas y adolescentes, personas en situación de vulnerabilidad, grupos étnicos, personas en condición de discapacidad y personas de talla baja.\n2. Pautas para Adultos Mayores y Gestantes:\n   - Orientarlos de inmediato a las áreas destinadas en la sala de espera.\n   - Asignar turno preferencial de llegada.\n   - PROHIBIDO usar términos paternalistas o diminutivos (como 'abuelito', 'mamita', etc.).\n   - Escuchar con actitud de acompañamiento y verificar que la respuesta sea comprendida en lenguaje claro.\n3. Pautas para Víctimas (sufrieron menoscabo de derechos o daño por el conflicto/delitos):\n   - Escuchar atentamente sin prevención ni juicios de valor por su vestir o hablar (no hay estereotipos).\n   - No generar falsas expectativas; usar lenguaje sencillo sin tecnicismos.\n   - Garantizar la confidencialidad absoluta.\n4. Pautas para Personas en Condición de Discapacidad:\n   - Tratar a adultos con discapacidad con la madurez correspondiente (nunca tono aniñado o consentirles la cabeza).\n   - Mirar con naturalidad, preguntar antes de ayudar: '¿En qué puedo servirle?'.",
        metrics: {
          type: "Atención Preferencial (Art. 16 Numeral 2)",
          means: "Turno Preferencial / Trato Digno sin Diminutivos",
          law: "Resolución 04180 de 2022 / Ley 1346 de 2009"
        },
        imageSrc: "atencion_caso_comercial_1784399958164.png",
        scenario: {
          title: "Atención a Poblaciones Vulnerables y Víctimas",
          description: "Ingresa a la Oficina de Atención al Ciudadano un adulto mayor que manifiesta ser víctima de desplazamiento forzado y no sabe cómo solicitar orientación. Además, en la sala se encuentra una persona sorda esperando turno. Debes aplicar las directrices del Protocolo Preferencial de la Resolución 04180 de 2022.",
          role: "Encargado de la Oficina de Atención al Ciudadano (OAC).",
          objectives: [
            "Aplicar el protocolo de adultos mayores evitando términos paternalistas ('abuelito').",
            "Atender la condición de víctima garantizando confidencialidad y sin tecnicismos ni falsas expectativas.",
            "Orientar a la persona en condición de discapacidad con respeto, naturalidad y de acuerdo a su autonomía."
          ]
        },
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
        videoUrl: "https://www.youtube.com/embed/dkWStFwfvOw",
        videoDescription: "Contenido del Portafolio de Servicios y Canales de Atención (Resolución 04180 de 2022):\n\n1. Servicios Clave del Portafolio:\n   - Recepcionar y Despachar Motivos de Policía: Gestión de emergencias y despachos a través de la Línea de Emergencia 123.\n   - Consulta de Antecedentes Judiciales: Expedición de información judicial en tiempo real.\n   - Revisión Técnica de Automotores: Verificación física de la procedencia lícita de vehículos.\n   - Denuncia Virtual: Sistema nacional para denunciar hurtos, extorsión y delitos informáticos.\n   - Atención de Emergencias Viales: Información en tiempo real del estado de vías y pico y placa.\n   - Incorporación Policial: Procesos de selección de Oficiales y Patrulleros.\n   - Oficinas de Atención al Ciudadano: 98 oficinas desconcentradas y 1423 puntos de atención de la Inspección General para la gestión de PQRS.\n   - Centros de Conciliación y Mediación: 13 centros nacionales para resolver civil, familia y convivencia de forma alternativa.\n\n2. Clasificación de Canales de PQRS:\n   - Presencial: Puntos OAC y Centros de Conciliación.\n   - Virtual: Plataforma ADenunciar, Portal de Servicios Internos (PSI) y correo lineadirecta@policia.gov.co.\n   - Telefónico: Línea de Integridad Policial (166) y línea nacional 018000 910112.",
        metrics: {
          type: "Portafolio de Servicios y PQRS (Art. 11)",
          means: "98 Oficinas OAC / 13 Centros de Conciliación / Línea 123",
          law: "Ley 1755 de 2015 / Resolución 04180 de 2022"
        },
        imageSrc: "atencion_caso_comercial_1784399958164.png",
        scenario: {
          title: "Orientación del Portafolio y Recepción de PQRS",
          description: "Un ciudadano acude al CAI para reportar la pérdida de su motocicleta, consultar si tiene antecedentes pendientes para un empleo, y quejarse por el maltrato físico de una patrulla. Debes canalizar estos tres requerimientos utilizando los servicios y oficinas específicas del portafolio.",
          role: "Integrante de patrulla orientador en CAI.",
          objectives: [
            "Remitir la queja disciplinaria al canal adecuado (Oficinas OAC de la Inspección General o correo lineadirecta@policia.gov.co).",
            "Orientar el caso de la motocicleta (Línea 123 / Denuncia Virtual ADenunciar) y explicar la revisión técnica de automotores.",
            "Guiar la consulta de antecedentes judiciales a través del canal virtual oficial de la institución."
          ]
        },
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
        videoUrl: "https://www.youtube.com/embed/OureU4LT2is",
        videoDescription: "Este video explica el estándar de protección al derecho a la vida y la integridad física. Instruye sobre las garantías y precauciones durante un allanamiento o ingreso excepcional por voces de auxilio (Art. 32 de la Constitución y la Ley 1801). Enfatiza en el respeto incondicional por la dignidad del ciudadano bajo custodia.",
        metrics: {
          type: "Procedimiento de Auxilio e Ingreso",
          means: "Ingreso sin Orden Escrita / Auxilio de Vida",
          law: "Artículo 32 de la Constitución Política de Colombia / Ley 1801"
        },
        imageSrc: "uso_fuerza_taser_1784399968366.png",
        scenario: {
          title: "Protección del Derecho a la Vida en Procedimientos Policiales",
          description: "La patrulla acude a una riña intrafamiliar donde un sujeto está agrediendo físicamente a su pareja dentro de una vivienda y amenaza con matarla. El agresor grita que nadie puede entrar porque es propiedad privada. Tu prioridad absoluta es proteger la vida de la víctima respetando los marcos constitucionales.",
          role: "Integrante del cuadrante de policía respondiendo a la emergencia.",
          objectives: [
            "Identificar el deber de protección inmediata del derecho a la vida por encima de otras consideraciones.",
            "Reconocer las causales constitucionales para el ingreso a inmueble sin orden escrita (vulneración de derechos / flagrancia).",
            "Neutralizar la amenaza sin violar los Derechos Humanos del agresor una vez sometido."
          ]
        },
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
        videoUrl: "https://www.youtube.com/embed/oS_bI6arJkc",
        videoDescription: "El video demuestra las técnicas físicas y tácticas de esposamiento (manos a la cabeza, manos atrás, reducción a piso) y los esquemas de movimientos con la tonfa policial y posiciones tácticas con armas de fuego. Adicionalmente, enseña el concepto de la triangulación de seguridad (agente de contacto y de seguridad).",
        metrics: {
          type: "Procedimiento de Control Táctico / Reducción",
          means: "Uso de Esposas / Dispositivos Menos Letales / Bastón Tonfa",
          law: "Resolución 02903 de 2017 (Reglamento Uso de la Fuerza)"
        },
        imageSrc: "uso_fuerza_taser_1784399968366.png",
        scenario: {
          title: "Uso Proporcional, Esposamiento y Posiciones Tácticas",
          description: "Durante un patrullaje nocturno, interceptas a un sospechoso que coincide con la descripción de un autor de hurtos recientes. Al solicitarle un registro, el ciudadano reacciona de forma hostil, empuja al uniformado e intenta sacar un objeto metálico de su cinturón. Debes aplicar el modelo diferenciado y las técnicas tácticas (triangulación, tonfa, esposamiento).",
          role: "Patrullero en labor de control y registro de personas.",
          objectives: [
            "Aplicar el modelo de uso proporcional y diferenciado de la fuerza según la resistencia.",
            "Emplear la triangulación táctica con tu compañero de patrulla.",
            "Desplegar la tonfa o dispositivos menos letales y realizar el esposamiento reglamentario."
          ]
        },
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
        videoUrl: "https://www.youtube.com/embed/ck7LS7n7B8Y",
        videoDescription: "El video expone cómo opera la mediación policial en el marco de la convivencia ciudadana. Muestra técnicas de resolución alternativa de conflictos sociales, vecinales, escolares y familiares, y el diligenciamiento legal del Acta de Mediación conforme a la Ley 1801 de 2016.",
        metrics: {
          type: "Resolución Alternativa de Conflictos",
          means: "Mediación Comunitaria / Acta de Convivencia",
          law: "Ley 1801 de 2016 (Código de Seguridad y Convivencia)"
        },
        imageSrc: "mediacion_policial_calle_1784399979535.png",
        scenario: {
          title: "Mediación Policial frente al Servicio Público de Policía",
          description: "Un grupo de vecinos bloquea una vía principal en protesta porque llevan tres días sin servicio de agua potable. Se genera un caos vehicular inmenso y hay agresiones verbales entre conductores atrapados y los manifestantes. Debes intervenir para desescalar el conflicto aplicando el diálogo y la mediación.",
          role: "Policía mediador en conflictos de convivencia ciudadana.",
          objectives: [
            "Emplear la mediación policial como instrumento para desescalar conflictos.",
            "Facilitar el diálogo entre los líderes de la manifestación and los afectados.",
            "Llegar a acuerdos temporales para habilitar la movilidad respetando los derechos de todos."
          ]
        },
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
        videoUrl: "https://www.youtube.com/embed/QieQW7-4NRc",
        videoDescription: "El video instruye en los pasos del procedimiento judicial de captura y la incautación de armas bajo el Decreto 2535. Explica cómo realizar un registro minucioso, la lectura formal de derechos del capturado (Artículo 303 de CPP), y el inicio seguro de la cadena de custodia de elementos incautados.",
        metrics: {
          type: "Procedimiento Judicial / Administrativo",
          means: "Captura en Flagrancia / Incautación de Armamento",
          law: "Decreto 2535 de 1993 / Artículo 303 de CPP"
        },
        imageSrc: "mediacion_policial_calle_1784399979535.png",
        scenario: {
          title: "Incautación de Armas (Decreto 2535) y Procedimiento de Captura",
          description: "Durante una requisa en un establecimiento público, hallas en el bolso de un ciudadano una pistola 9mm con su cargador abastecido. El ciudadano no presenta el permiso para porte ni tenencia del arma de fuego. Debes proceder a realizar la captura por porte ilegal y la respectiva incautación.",
          role: "Patrullero del cuadrante realizando el control de armas.",
          objectives: [
            "Aplicar el procedimiento de captura garantizando los derechos del capturado (Art. 303 CPP).",
            "Realizar la incautación del arma de fuego de conformidad con el Decreto 2535 de 1993.",
            "Asegurar la cadena de custodia de los elementos materiales probatorios."
          ]
        },
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
        videoUrl: "https://www.youtube.com/embed/aXXeg6wiOF4",
        videoDescription: "El video instruye en las directrices de seguridad vial: el correcto montaje y señalización de un Puesto de Control en carretera (distancias, conos, chalecos) y el protocolo de primer respondiente en caso de colisiones viales con lesionados, incluyendo la preservación técnica del croquis.",
        metrics: {
          type: "Seguridad Vial / Control Vial",
          means: "Puesto de Control / Señalización Vial / Croquis",
          law: "Ley 769 de 2002 (Código Nacional de Tránsito)"
        },
        imageSrc: "puesto_control_transito_p_1784399989800.png",
        scenario: {
          title: "Instalación de Puesto de Control y Choque con Lesionados",
          description: "Estás asignado a un Puesto de Control para la prevención vial. De repente, a 50 metros del puesto, ocurre una colisión frontal entre dos vehículos particulares. Uno de los conductores está atrapado dentro del vehículo y el otro presenta aliento alcohólico e intenta huir a pie. Debes priorizar las acciones operativas y de tránsito.",
          role: "Policía vial a cargo del Puesto de Control y primer respondiente en accidentes.",
          objectives: [
            "Asegurar el área del accidente para evitar nuevos choques (canalizar tráfico).",
            "Solicitar apoyo médico prioritario para el conductor atrapado y realizar primeros auxilios.",
            "Aprehender al conductor que intenta huir y asegurar el procedimiento de tránsito y embriaguez."
          ]
        },
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
        videoUrl: "https://www.youtube.com/embed/oS_bI6arJkc",
        videoDescription: "En este video se hace énfasis en la importancia reglamentaria y legal del uso correcto del uniforme y los elementos de dotación (taser, tonfa, chaleco blindado, radio) por seguridad y autocuidado. Asimismo, explica la responsabilidad disciplinaria asociada al abandono o mal uso de los recursos públicos de policía.",
        metrics: {
          type: "Inspección Disciplinaria / Autocuidado",
          means: "Elementos de Protección / Distintivos Reglamentarios",
          law: "Resolución 3372 de 2009 (Reglamento de Uniformes e Insignias)"
        },
        imageSrc: "uso_fuerza_taser_1784399968366.png",
        scenario: {
          title: "Uso Correcto de Uniformes, Accesorios y Medios Tecnológicos",
          description: "Vas a salir a un servicio de patrullaje nocturno en una zona de alta delictividad. El comandante de guardia observa que portas el chaleco antibalas mal ajustado y no llevas tu radio de comunicaciones ni el dispositivo taser de dotación. Debes fundamentar disciplinariamente el uso del uniforme y equipos.",
          role: "Patrullero respondiendo a la revista de armamento y equipo.",
          objectives: [
            "Conocer el reglamento de uniformes, insignias y distintivos de la Policía Nacional.",
            "Portar de forma obligatoria y adecuada los elementos de protección personal y armamento.",
            "Hacer uso adecuado de los medios técnicos, tecnológicos (cámaras corporales/radios)."
          ]
        },
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
  }
];

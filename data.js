// Base de datos de los Cursos Mandatorios de la Policía Nacional de Colombia
// Actualizada con los contenidos, estándares mínimos, links de videos, transcripciones, métricas e imágenes de referencia

const COURSES_DATA = [
  {
    id: "atencion-ciudadano",
    title: "Atención al Ciudadano",
    description: "Orientación y atención presencial promoviendo la comunicación asertiva y el portafolio de trámites institucionales.",
    modules: [
      {
        id: "comunicacion-asertiva",
        title: "1. Atención y Comunicación Asertiva",
        videoUrl: "https://www.youtube.com/embed/cl7iUeFvy5E",
        videoDescription: "En este video se instruye sobre la atención presencial enfocada en la empatía y la comunicación asertiva en la actividad de policía. Se explican los factores proxémicos (espacio personal), la importancia del contacto visual, la postura corporal de apertura y la modulación del tono de voz para desescalar conflictos con la ciudadanía.",
        metrics: {
          type: "Atención Ciudadana / Prevención",
          means: "Diálogo / Mediación / SEA Policía",
          law: "Resolución 06558 de 2024 / Ley 1801 de 2016"
        },
        imageSrc: "atencion_caso_comercial_1784399958164.png",
        scenario: {
          title: "Promover la comunicación asertiva en la actividad de policía",
          description: "Durante una patrulla en zona comercial, un ciudadano muy exaltado y molesto se acerca gritando que un comerciante lo estafó. El ciudadano exige que arrestes inmediatamente al comerciante. Si respondes a la defensiva o de forma autoritaria el conflicto escalará. Debes aplicar la comunicación asertiva y el lenguaje no verbal adecuado para calmar al ciudadano y mediar la situación.",
          role: "Patrullero del cuadrante en atención inmediata al ciudadano.",
          objectives: [
            "Aplicar las técnicas de comunicación no verbal (postura, distancia de seguridad y contacto visual).",
            "Promover el diálogo asertivo y la escucha activa.",
            "Desescalar la hostilidad y canalizar el requerimiento de forma profesional."
          ]
        },
        designThinking: {
          empatizar: {
            question: "¿Qué emociones identificas en el ciudadano alterado? ¿Cuáles son sus necesidades prioritarias (sentirse escuchado, resolver su dinero, respeto) y cómo influye tu lenguaje corporal?",
            placeholder: "Analiza el estado emocional del ciudadano y cómo tu postura corporal (brazos abiertos, distancia) puede tranquilizarlo...",
            keywords: ["emociones", "escucha activa", "lenguaje corporal", "tranquilidad", "empatía", "respeto"]
          },
          definir: {
            question: "Identifica cuál es la barrera de comunicación principal en este escenario y define el problema central de convivencia o legal que se presenta.",
            placeholder: "Define el obstáculo comunicativo y el conflicto a resolver...",
            keywords: ["barrera", "exaltación", "estafa", "conflicto", "atención"]
          },
          idear: {
            question: "¿Qué técnicas de comunicación verbal y de desescalamiento (parafraseo, preguntas abiertas, tono de voz pausado) puedes plantear para canalizar el caso?",
            placeholder: "Plantea al menos dos técnicas de comunicación asertiva...",
            keywords: ["tono de voz", "parafraseo", "preguntas abiertas", "calma", "asertividad"]
          },
          prototipar: {
            question: "Redacta el diálogo exacto o las palabras con las que abordarías al ciudadano para calmarlo y guiar el caso.",
            placeholder: "Ej: 'Buenas tardes, entiendo perfectamente su malestar. Permítame escucharle detalladamente para poder orientarle de la mejor manera...'",
            keywords: ["buenas tardes", "entiendo", "permítame", "respeto", "orientarle", "escucharle"]
          }
        },
        evaluation: {
          perfectKeywords: ["comunicación asertiva", "escucha activa", "lenguaje no verbal", "tono de voz", "respeto", "empatía", "desescalar"],
          iaResponseGood: "Excelente aplicación de la comunicación asertiva policial. Has priorizado la empatía y la escucha activa junto con el control de tu lenguaje no verbal, lo cual es fundamental para una atención al ciudadano de alta calidad.",
          iaResponseRegular: "Tu respuesta es correcta pero se enfoca demasiado en la norma escrita. Recuerda que la comunicación asertiva requiere primero calmar la emoción de la persona mediante el tono de voz y el parafraseo.",
          iaResponseBad: "Debes mejorar el abordaje. Responder de manera impositiva o autoritaria escala la hostilidad y no soluciona la problemática del ciudadano, violando los principios de atención y comunicación asertiva."
        }
      },
      {
        id: "portafolio-servicios",
        title: "2. Portafolio de Servicios y Trámites",
        videoUrl: "https://www.youtube.com/embed/dkWStFwfvOw",
        videoDescription: "Explicación de PQRS y Canales de Atención: En este video aprenderás a identificar los canales formales que tiene la Policía Nacional para la recepción de Peticiones, Quejas, Reclamos, Sugerencias y Reconocimientos. Específicamente aprenderás sobre: \n\n1. Canal Presencial: Oficinas de Atención al Ciudadano a nivel nacional y Centros de Conciliación.\n2. Canal Telefónico: Línea de emergencias 123, línea directa anticorrupción 166 y líneas nacionales gratuitas (018000 910112).\n3. Canal Virtual: Plataforma de denuncia virtual 'ADenunciar' en convenio con la Fiscalía, portal web institucional de la Policía, y el correo formal 'lineadirecta@policia.gov.co'.",
        metrics: {
          type: "Canales de PQRS y Recepción Ciudadana",
          means: "Oficinas OAC / Correo Institucional / ADenunciar",
          law: "Resolución 06558 de 2024 / Ley 1755 de 2015"
        },
        imageSrc: "atencion_caso_comercial_1784399958164.png",
        scenario: {
          title: "Orientación de Trámites y Canales de Atención",
          description: "Un ciudadano acude al CAI deseando interponer una queja formal contra una actuación policial y denunciar el extravío de sus documentos. Debes guiarlo y orientarlo asertivamente sobre qué canal (presencial, virtual o telefónico) es el idóneo para su PQRS.",
          role: "Policía encargado de la atención ciudadana en el CAI.",
          objectives: [
            "Identificar y explicar los tres tipos de canales de atención de PQRS (presencial, telefónico y virtual).",
            "Explicar el uso de la plataforma digital ADenunciar y el correo lineadirecta@policia.gov.co.",
            "Asesorar de manera preferencial y transparente al ciudadano sobre cómo tramitar su inconformidad o reporte."
          ]
        },
        designThinking: {
          empatizar: {
            question: "¿Cuáles son las dudas y temores del ciudadano al interponer una queja o denuncia? ¿Cómo generas confianza y transparencia desde el primer momento?",
            placeholder: "Analiza el estado de desconfianza o necesidad del ciudadano y cómo tu orientación imparcial ayuda...",
            keywords: ["queja", "denuncia", "transparencia", "confianza", "imparcial", "preferencial"]
          },
          definir: {
            question: "Define los canales de PQRS adecuados para este caso: ¿Dónde se radica la queja contra la actuación y dónde la pérdida de documentos?",
            placeholder: "Especifica los canales presenciales, virtuales o telefónicos exactos...",
            keywords: ["lineadirecta@policia.gov.co", "adenunciar", "queja", "correo", "plataforma"]
          },
          idear: {
            question: "¿Cómo estructurar tu explicación para que el ciudadano diferencie con claridad el canal virtual (para denuncias y quejas rápidas) del presencial?",
            placeholder: "Plantea ideas pedagógicas de orientación al ciudadano...",
            keywords: ["correo", "virtual", "explicar", "presencial", "cai"]
          },
          prototipar: {
            question: "Escribe la respuesta exacta que le darías al ciudadano indicándole los canales de radicación y sus respectivos enlaces/medios.",
            placeholder: "Ej: 'Para su queja formal puede escribir al correo lineadirecta@policia.gov.co y para la pérdida de sus documentos ingresamos a la plataforma ADenunciar...'",
            keywords: ["lineadirecta@policia.gov.co", "correo", "adenunciar", "teléfono", "oac"]
          }
        },
        evaluation: {
          perfectKeywords: ["lineadirecta@policia.gov.co", "adenunciar", "pqrs", "virtual", "presencial", "telefónico", "queja"],
          iaResponseGood: "Excelente orientación. Has clasificado perfectamente los canales presenciales, telefónicos y virtuales de PQRS, guiando al ciudadano de forma exacta y transparente.",
          iaResponseRegular: "Tu orientación es buena, pero asegúrate de especificar el correo oficial lineadirecta@policia.gov.co como el canal virtual exclusivo para la radicación de quejas y reclamos disciplinarios.",
          iaResponseBad: "Incorrecto. Ignorar o no saber orientar sobre los canales oficiales de radicación de PQRS (como el correo institucional o la plataforma ADenunciar) afecta el debido proceso del ciudadano."
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
            "Facilitar el diálogo entre los líderes de la manifestación y los afectados.",
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

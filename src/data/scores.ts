import { AttributeRefs, Attributes, ScoreMessages } from "@/types/types";

export const scoreColors = {
  low: "#92d5ce",
  medium: "#9f7eee",
  high: "#5325a0",
};

export enum ScoreLevels {
  LOW = 105,
  MEDIUM = 201,
  HIGH = 250,
}

export const attributesRefs: AttributeRefs[] = [
  {
    id: "7bc8d7e3-a30c-45d1-be3b-79e57118f6b5",
    positive: true,
    type: Attributes.RELATIONAL,
  },
  {
    id: "8bc5bea4-1c0d-4902-a4d4-fa931358f439",
    positive: true,
    type: Attributes.RELATIONAL,
  },
  {
    id: "60dd6649-6ca8-4e61-8c9a-4279e505b9f7",
    positive: true,
    type: Attributes.RELATIONAL,
  },
  {
    id: "7c61f94d-7983-41de-9646-b940e5cf2100",
    positive: true,
    type: Attributes.RELATIONAL,
  },
  {
    id: "bcf59e4a-8597-4f18-bede-5911345908e2",
    positive: true,
    type: Attributes.RELATIONAL,
  },
  {
    id: "3001a874-3b1d-4453-9082-1fc21d58658b",
    positive: false,
    type: Attributes.RELATIONAL,
  },
  {
    id: "ff26b4f9-9515-4e32-aa90-fc0e90b56ec1",
    positive: false,
    type: Attributes.RELATIONAL,
  },
  {
    id: "58566b1e-309a-4cc5-8884-a704c3c46e29",
    positive: false,
    type: Attributes.RELATIONAL,
  },
  {
    id: "e2991e31-c652-4ebd-b56c-0e560e38eb27",
    positive: false,
    type: Attributes.RELATIONAL,
  },
  {
    id: "0296c93d-a8ca-4f33-ab4f-d590c341143d",
    positive: false,
    type: Attributes.RELATIONAL,
  },
  //----------Emotional
  {
    id: "45404b55-bb58-4961-8cce-a760b7ff7ec2",
    positive: true,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "5a3d7cd8-59da-46df-a861-4e63e4313cc3",
    positive: true,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "e37d7711-c5aa-4d11-9139-eb4e5ceee04b",
    positive: true,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "a621d494-2e71-4a0f-b174-b58ae9b4983f",
    positive: true,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "77ef6b90-41a5-49f2-9252-3f9b9cd8d036",
    positive: true,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "bd70f397-af97-41b3-ba13-4e3b46170b42",
    positive: false,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "d162820c-8a7b-41db-9eab-10aa96f27cd0",
    positive: false,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "f5e60e9e-e8a9-40d9-bc97-953caa4001a2",
    positive: false,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "bec67626-a133-4547-8f02-1deb9a49388d",
    positive: false,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "016c79b2-9ffa-455c-a071-f6be971c6c2a",
    positive: false,
    type: Attributes.EMOTIONAL,
  },

  //----------Mental
  {
    id: "d21f2041-680c-4693-bff2-c60c1f4254a4",
    positive: true,
    type: Attributes.MENTAL,
  },
  {
    id: "24149c3f-8bc7-43af-b996-2131f9f40a33",
    positive: true,
    type: Attributes.MENTAL,
  },
  {
    id: "cab76abc-5e14-4715-bf90-f0bdec1d46d9",
    positive: true,
    type: Attributes.MENTAL,
  },
  {
    id: "5b0f5fca-c9a0-4dcc-8861-a9ff5b0e9249",
    positive: true,
    type: Attributes.MENTAL,
  },
  {
    id: "2c350609-3cbb-481a-a262-499644797922",
    positive: true,
    type: Attributes.MENTAL,
  },
  {
    id: "5ffd3a24-9383-4054-854f-b5fde0bead02",
    positive: false,
    type: Attributes.MENTAL,
  },
  {
    id: "5adb6f81-d45b-4476-8d47-9dc84281ef60",
    positive: false,
    type: Attributes.MENTAL,
  },
  {
    id: "b07fcfc7-d6f1-4e35-8b9b-34a619ec19e0",
    positive: false,
    type: Attributes.MENTAL,
  },
  {
    id: "ebfb726a-d0f6-4fe2-85b7-6b6c61e420fb",
    positive: false,
    type: Attributes.MENTAL,
  },
  {
    id: "3d1c42c2-0733-4e49-a4ce-fa79bdd9a5a7",
    positive: false,
    type: Attributes.MENTAL,
  },

  //----------Physical
  {
    id: "f7917771-4a34-4086-915f-1d1f715ff2ba",
    positive: true,
    type: Attributes.PHYSICAL,
  },
  {
    id: "55cd8a79-0dd3-431e-85ce-bac4dbcd697e",
    positive: true,
    type: Attributes.PHYSICAL,
  },
  {
    id: "adfa1e1e-6128-4524-a3fa-8f0fbdc1b3cb",
    positive: true,
    type: Attributes.PHYSICAL,
  },
  {
    id: "52d37a22-8edd-4fba-b06e-94bee3cabb82",
    positive: true,
    type: Attributes.PHYSICAL,
  },
  {
    id: "887b4cea-daad-4f5b-bcbe-a346faab50f4",
    positive: true,
    type: Attributes.PHYSICAL,
  },
  {
    id: "aaf87fea-e57b-4d43-b5af-176623963ca1",
    positive: false,
    type: Attributes.PHYSICAL,
  },
  {
    id: "b8a68eec-eb3e-40e5-9e67-f9fb53c69dcb",
    positive: false,
    type: Attributes.PHYSICAL,
  },
  {
    id: "a04255a7-af8e-43f0-99cd-a790e64b2f82",
    positive: false,
    type: Attributes.PHYSICAL,
  },
  {
    id: "3939773d-f20a-46ae-8a35-280d756380bb",
    positive: false,
    type: Attributes.PHYSICAL,
  },
  {
    id: "e309bfb7-e056-4882-b89b-0f20d3d5c973",
    positive: false,
    type: Attributes.PHYSICAL,
  },

  //----------financial
  {
    id: "f418c1ec-4445-4641-9daa-adbaa8bdff59",
    positive: true,
    type: Attributes.FINANCIAL,
  },
  {
    id: "bc794b22-77b9-4e23-a086-8bb648bc87a1",
    positive: true,
    type: Attributes.FINANCIAL,
  },
  {
    id: "2af086ff-6f6b-4ced-81fe-5c78361ec989",
    positive: true,
    type: Attributes.FINANCIAL,
  },
  {
    id: "cb99d9a0-62cd-4035-bba5-1c37a40558cb",
    positive: true,
    type: Attributes.FINANCIAL,
  },
  {
    id: "0e284d11-4cbb-41ea-bfa8-2b9cac491960",
    positive: true,
    type: Attributes.FINANCIAL,
  },
  {
    id: "6836d717-6435-4a73-90a7-98fe21039f9a",
    positive: false,
    type: Attributes.FINANCIAL,
  },
  {
    id: "c8a8778d-bd03-48fb-b863-c32a3463648d",
    positive: false,
    type: Attributes.FINANCIAL,
  },
  {
    id: "d5b995d3-774f-4076-a552-927c067aa734",
    positive: false,
    type: Attributes.FINANCIAL,
  },
  {
    id: "a560ce0c-7deb-43c1-9386-7e43ab133a20",
    positive: false,
    type: Attributes.FINANCIAL,
  },
  {
    id: "263f1bbf-d6c5-4273-860a-c5f95692be3b",
    positive: false,
    type: Attributes.FINANCIAL,
  },

  //----------Burnout
  {
    id: "7ea10a64-ffff-48f2-aaee-d73a3e64f47f",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "c704d226-227a-4ace-969d-108ebee263e9",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "b16b8f5f-8568-4a21-b876-e089c19aa0f7",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "972cb31b-ce91-442d-9c27-3ef2de8c8aa7",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "9f925f4d-9cd6-43f6-a39f-334d384ec8c8",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "6b4e9791-5696-4075-bae8-93463f6b9870",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "c20ef5cc-6a7b-45e9-b665-2698da83655f",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "7f90b662-be55-4838-a995-74d717eb76a4",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "fe2f0f04-88b3-4edb-b4c9-9a41ded25fb8",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "483446fa-2828-4728-b2aa-de421a1849b8",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "59fd8e15-6125-49b4-ace9-14609bb0b801",
    positive: true,
    type: Attributes.BURNOUT,
  },
  {
    id: "8ecf31d1-66a1-4512-8d8d-0c4b61c536d4",
    positive: true,
    type: Attributes.BURNOUT,
  },
];

export const relationalScoreMessage: ScoreMessages = {
  low: `Esta encuesta explora tu desempeño en tus relaciones interpersonales y tu forma de resolver conflictos mediante el diálogo, la comunicación y la escucha. Tu puntaje en la categoría social de las habilidades de vida es bajo. 
  <br/><br/>
  Lo anterior indica que tienes dificultades que interfieren de forma significativa en tus relaciones interpersonales. Desde Nua, te recomendamos explorar las diferentes herramientas y técnicas que tenemos para que logres aumentar tu desempeño en tus relaciones interpersonales. En las herramientas esenciales puedes encontrar técnicas como la exhalación prolongada que te permite respirar antes de responder ante una situación.
  <br/><br/>
  También contamos con un curso titulado "Domina el lenguaje para tener una vida laboral y personal más próspera" que te ayudará a desarrollar habilidades de comunicación, escucha y de resolución de problemas. Sabemos que obtener un puntaje bajo puede desanimarte, pero la buena noticia es que hay mucho espacio para crecer.`,
  medium: `Esta encuesta explora tu desempeño en tus relaciones interpersonales y tu forma de resolver conflictos mediante el diálogo, la comunicación y la escucha. Tu puntaje en la categoría social de las habilidades de vida es medio.
  <br/><br/>
   Lo anterior indica que se te presentan algunas dificultades en esta área que no necesariamente interfieren en tu vida pero que pueden generar cierto malestar en tus relaciones interpersonales. Desde Nua, te recomendamos herramientas y técnicas para que puedas seguir mejorando tu comunicación y resolución de conflictos para aumentar tu desempeño en tus relaciones interpersonales. 
  <br/><br/>
  Contamos con un curso titulado "Reducción del estrés basado en Mindfulness" que te ayudará a desarrollar las habilidades mencionadas. Aunque presentes dificultades, siempre puedes desarrollar nuevas habilidades para lograr construir relaciones interpersonales de más calidad, así que no te desanimes.`,
  high: `Esta encuesta explora tu desempeño en tus relaciones interpersonales y tu forma de resolver conflictos mediante el diálogo, la comunicación y la escucha. Tu puntaje en la categoría social de las habilidades de vida es alto. 
  <br/><br/>
  Lo anterior indica que te desempeñas con facilidad en tus relaciones interpersonales, logras comunicar el mensaje que quieres decir para llegar a acuerdos, y escuchas a las personas con atención. Desde Nua, te recomendamos profundizar en las herramientas que traemos para ti, donde puedes aprender formas de seguir aumentando tu desempeño en tus relaciones interpersonales. 
  <br/><br/>
  Contamos con el curso "Botiquín de la buena actitud" que busca desarrollar habilidades de empatía, autocontrol y comunicación que pueden ayudarte a seguir conectándote con los demás. Estamos seguros de que profundizar en estas habilidades te permitirá seguir disfrutando de relaciones de calidad en el futuro.`,
};

export const emotionalScoreMessage: ScoreMessages = {
  low: `Esta encuesta explora tu conciencia sobre tus sentimientos y experiencias emocionales, tu forma de responder a ellas y su impacto en tu bienestar. Tu puntaje en la categoría emocional de las habilidades de vida es bajo. 
  <br/><br/>
  Lo anterior indica que se te dificulta identificar, aceptar y manejar las emociones, lo que afecta en otras áreas de tu vida. Al no saber manejar emociones, puedes enganchar en conductas que a corto plazo te hacen sentir bien pero que a largo plazo traen consecuencias negativas. Desde Nua, te recomendamos diferentes herramientas y técnicas que buscan aumentar tu bienestar emocional. En nuestra plataforma puedes encontrar desde momentos de conexión de menos de 5 minutos con técnicas de mindfulness, de respiración y de regulación emocional, hasta contacto con coaches premium que te pueden enseñar de manera más personalizada estas herramientas.
  <br/><br/>
   Contamos con un curso titulado "Medita, libera y lidera tu vida" que busca desarrollar las habilidades mencionadas. Con paciencia, práctica y un compromiso constante, estamos seguros de que podrás desarrollar habilidades para manejar tus emociones y experimentar una mayor tranquilidad interior.`,
  medium: `Esta encuesta explora tu conciencia sobre tus sentimientos y experiencias emocionales, tu forma de responder a ellas y su impacto en tu bienestar.  Tu puntaje en la categoría emocional de las habilidades de vida es medio. 
  <br/><br/>
  Lo anterior indica que tienes un conocimiento emocional básico que te permite navegar las emociones, pero en ocasiones se te dificulta identificarlas, manejarlas y expresarlas. Desde Nua, te recomendamos profundizar en las diferentes herramientas con las que contamos que pueden llevarte a prosperar en tu área emocional. Nuestros módulos están diseñados para acompañarte en este proceso. 
  <br/><br/>
  Contamos con herramientas esenciales de 5 minutos como meditaciones para principiantes y manejo de respiración, y con un curso llamado "Mindfulness: herramienta de vida", todo para aprender a manejar de mejor forma las emociones. Encontrar un balance emocional es un camino más no una meta, y estamos seguros que vas a prosperar.`,
  high: `Esta encuesta explora tu conciencia sobre tus sentimientos y experiencias emocionales, tu forma de responder a ellas y su impacto en tu bienestar. Tu puntaje en la categoría emocional de las habilidades de vida es alto. 
  <br/><br/>
  Lo anterior indica que reconoces lo que sientes y lo que necesitas, y respondes de forma saludable a esas experiencias emocionales. Desde Nua, te recomendamos continuar cultivando tu bienestar emocional,  poniendo en práctica técnicas de autocuidado que te nutran y te ayuden a mantener un equilibrio emocional. 
  <br/><br/>
  Contamos con herramientas esenciales para generar momentos de conexión, las cuales diseñamos para que puedas gestionar esas emociones que pueden llegar a ser muy intensas, como lo es señalar y nombrar. Al reconocer y aceptar tus sentimientos, has creado una base sólida para manejarlos, felicitaciones.`,
};

export const mentalScoreMessage: ScoreMessages = {
  low: `Esta encuesta explora tu forma de pensar y de tomar decisiones, y tu habilidad de mantener la atención, la concentración, y de estar en el momento presente.   Tu puntaje en la categoría cognitiva de las habilidades de vida es bajo. 
  <br/><br/>
  Lo anterior indica que presentas dificultades en la toma de decisiones importantes, y en mantener tu atención y concentración en las tareas del día a día. Tus pensamientos suelen estar atascados en el pasado o en el futuro, por lo que no logras disfrutar tu momento presente. También te quedas atascado en el peor escenario posible y no logras hacerle frente a los problemas que se te presentan. Desde Nua, te recomendamos explorar nuestras herramientas esenciales enfocadas en esta categoría cognitiva, donde puedes aprender técnicas de 5 minutos para manejar esos pensamientos que evitan que disfrutes la vida, y herramientas para volver al momento presente mediante ejercicios de meditación y respiración. 
  <br/><br/>
  También está el módulo de entrenamiento personalizado donde se encuentra el curso titulado "Medita, libera y lidera tu vida", el cual busca entrenarte para cultivar una buena mente. Te recordamos que obtener un puntaje bajo no te define como persona, y que tienes el poder de cambiar y mejorar tu situación, así que este es el mejor momento para continuar en este camino hacia un bienestar cognitivo.`,
  medium: `Esta encuesta explora tu forma de pensar y de tomar decisiones, y tu habilidad de mantener la atención, la concentración, y de estar en el momento presente. Tu puntaje en la categoría cognitiva de las habilidades de vida es medio. 
  <br/><br/>
  Lo anterior indica que se te puede dificultar tomar decisiones importantes, concentrarte en diferentes actividades o mantener tu atención en tareas importantes. Tus pensamientos suelen estar en el pasado o en el futuro, lo que interfiere en tu capacidad de vivir el momento presente. Puedes quedarte atrapado en un círculo vicioso de pensamientos sobre el peor escenario posible del cual es difícil salir. Desde Nua, te recomendamos utilizar los diferentes módulos para adquirir herramientas para manejar tus pensamientos, tu atención y tu concentración. 
  <br/><br/>
  Con el módulo de entrenamiento personalizado puedes profundizar en aquellos aspectos que necesitas para alcanzar esa flexibilidad de pensamientos, como por ejemplo el curso titulado "Punto de partida para un estilo de vida". Estamos convencidos que el continuar desarrollando estas habilidades te permitirá encontrar un mayor bienestar cognitivo.`,
  high: `Esta encuesta explora tu forma de pensar y de tomar decisiones, y tu habilidad de mantener la atención, la concentración, y de estar en el momento presente. Tu puntaje en la categoría cognitiva de las habilidades de vida es alto. 
  <br/><br/>
  Lo anterior indica que tienes la habilidad de tomar decisiones importantes y mantienes tu concentración y atención en tareas difíciles. Logras vivir el momento presente, sin quedarte atascado en el pasado o en el futuro, y no te enfrascas en el peor escenario posible. Desde Nua, te recomendamos visitar nuestra plataforma para seguir nutriendo este equilibrio mental. 
  <br/><br/>
  Encontrarás en el módulo de herramientas esenciales diferentes técnicas que te pueden ayudar a desarrollar tu potencial mental, mientras te brindan momentos de conexión a través de ejercicios de mindfulness y de desagüe mental para sacar lo que tienes en la mente. Desarrollar aún más tus habilidades cognitivas te llevará a la promoción de una mentalidad más saludable.`,
};

export const physicalScoreMessage: ScoreMessages = {
  low: `Esta encuesta explora tus hábitos saludables y rutinas, como el sueño, la alimentación, el ejercicio y el descanso. Tu puntaje en la categoría física de las habilidades de vida es bajo. 
  <br/><br/>
  Lo anterior indica que se te dificulta mantener hábitos y rutinas saludables que interfieren de forma significativa en tus áreas de vida. Tu sueño, alimentación, ejercicio o descanso se ven afectados, impactando tu bienestar general. 
  <br/><br/>
  Desde Nua, te recomendamos profundizar en este tema mediante nuestra plataforma, donde encontrarás diferentes módulos que te brindan las herramientas necesarias para generar y mantener hábitos y rutinas saludables, y cursos, como el de yoga, para mover el cuerpo y darle descanso. Te recordamos que el progreso es gradual y que cada esfuerzo cuenta. Aprecia tus esfuerzos y celebra cada logro, por pequeño que sea.`,
  medium: `Esta encuesta explora tus hábitos saludables y rutinas, como el sueño, la alimentación, el ejercicio y el descanso. Tu puntaje en la categoría física de las habilidades de vida es medio. 
  <br/><br/>
  Lo anterior indica que hay una conciencia de la importancia de cuidar tu cuerpo y que existen algunos hábitos y rutinas para lograrlo. Se pueden presentar algunas dificultades en el sueño, la alimentación, el ejercicio o el descanso que interfieren en tus áreas de vida. Desde Nua, te recomendamos explorar en nuestra plataforma las herramientas necesarias para afrontar esas dificultades y acercarte a una mejor salud física. 
  <br/><br/>
  En nuestros módulos puedes encontrar formas para aprender a generar hábitos saludables y técnicas para mover el cuerpo, como con nuestro curso de yoga. Estás en el camino correcto y estamos emocionados de ver tu progreso hacia un mayor bienestar físico.`,
  high: `Esta encuesta explora tus hábitos saludables y rutinas, como el sueño, la alimentación, el ejercicio y el descanso. Tu puntaje en la categoría física de habilidades de vida es alto. 
  <br/><br/>
  Lo anterior indica que tienes hábitos saludables y rutinas que aportan a tu salud física, como mover el cuerpo durante el día, descansar para recargar energía, y alimentarte e hidratarte adecuadamente. Desde Nua, te recomendamos explorar nuestros diferentes módulos donde puedes encontrar una diversidad de herramientas y técnicas para mantener esos hábitos saludables. 
  <br/><br/>
  Te recordamos que el bienestar físico es un viaje continuo y que siempre hay espacio para crecer y mejorar. Sigue cuidando de tí mismo y disfrutando de los beneficios de una vida saludable.`,
};

export const financialScoreMessage: ScoreMessages = {
  low: `Esta encuesta explora tus bases de cómo calculas y das seguimiento a tus ingresos y gastos, a tus ahorros e inversiones, y cómo determinas las estrategias que mejor te ayudan. Tu puntaje en la categoría financiera de las habilidades de vida es bajo. 
  <br/><br/>
  Lo anterior indica que tienes dificultades significativas en tu salud financiera. No contar con planes financieros o presupuestos de ahorro y gastos interfiere con nuestras áreas de vida.  Desde Nua, te recomendamos nuestros módulos, donde puedes encontrar técnicas y herramientas que te den el manejo emocional y de pensamientos para tomar decisiones conscientes que te acerquen a la tranquilidad financiera que estás buscando. 
  <br/><br/>
  Nuestros coaches premium están precisamente para entrenarte en las habilidades que requieren refuerzo, especialmente en el entendimiento y la administración de tus finanzas con nuestro curso "Finanzas para humanos". Con perseverancia y dedicación, podrás superar los desafíos y alcanzar tus metas financieras.`,
  medium: `Esta encuesta explora tus bases de cómo calculas y das seguimiento a tus ingresos y gastos, a tus ahorros e inversiones, y cómo determinas las estrategias que mejor te ayudan. Tu puntaje en la categoría financiera de las habilidades de vida es medio. 
  <br/><br/>
  Lo anterior indica que puedes tener dificultades para generar planes financieros y presupuestos de ahorro e inversión, lo que puede generar malestar. Desde Nua, te recomendamos diferentes técnicas y herramientas para fortalecer este aspecto financiero. 
  <br/><br/>
  Contamos con el curso "Finanzas para humanos" que busca dar entendimiento y estrategias de administración para las finanzas personales. Recuerda que cada paso que tomes hacia una mayor salud financiera es un logro significativo. Con tiempo, esfuerzo y dedicación, estarás en el camino hacia una mejor estabilidad financiera.`,
  high: `Esta encuesta explora tus bases de cómo calculas y das seguimiento a tus ingresos y gastos, a tus ahorros e inversiones, y cómo determinas las estrategias que mejor te ayudan. Tu puntaje en la categoría financiera de las habilidades de vida es alto.
  <br/><br/>
   Lo anterior indica una comprensión sólida de los conceptos y prácticas financieras saludables, y mantienes presupuestos y planes financieros. 
  <br/><br/>
  Desde Nua, te recomendamos generar un espacio donde puedas seguir aprendiendo nuevas técnicas y herramientas que te permitan seguir creciendo financieramente. Te recordamos la importancia de seguir fortaleciendo esta área para mantener el ritmo y así alcanzar una mejor salud financiera.`,
};

export const burnoutScoreMessage: ScoreMessages = {
  low: `Esta encuesta explora tus niveles de agotamiento, desgaste emocional y falta de energía, revelando tu bienestar laboral y mental. Tu puntaje es bajo. Lo anterior indica que tus niveles de burnout son bajos y que cuentas con las herramientas para afrontar las dificultades del día a día de forma saludable. 
  <br/><br/>
  Desde Nua, te recomendamos seguir fortaleciendo estas habilidades de autocuidado. En nuestros módulos puedes encontrar técnicas y herramientas sencillas que te enseñan a manejar tus emociones y tus pensamientos, como ejercicios de respiración, de escritura y de meditación. 
  <br/><br/>
  También te enseñan a volver al momento presente mediante ejercicios de meditación, entre otros. Queremos que sigas practicando técnicas para manejar el burnout y que juntos busquemos nuevas estrategias para ayudarte a mantener un equilibrio emocional. Te recordamos que el bienestar es un camino sin destino y que hay espacio para seguir mejorando.`,
  medium: `Esta encuesta explora tus niveles de agotamiento, desgaste emocional y falta de energía, revelando tu bienestar laboral y mental. Tu puntaje es medio. Lo anterior indica que tienes una consciencia sobre tu agotamiento durante la jornada laboral. 
  <br/><br/>
  Aunque cuentas con algunas herramientas para navegarlo, se te pueden presentar dificultades en el manejo diario. Desde Nua, te recomendamos visitar nuestra plataforma donde puedes encontrar diferentes herramientas que te permiten aprender a recargarte de energía. 
  <br/><br/>
  Con nuestras herramientas esenciales puedes aprender técnicas para manejar tus pensamientos y emociones, a través de ejercicios de respiración, de escritura y de meditación. 
  <br/><br/>
  Tienes contacto directo con nuestros coaches premium, los cuales buscan brindarte herramientas especializadas para afrontar el burnout de la mejor manera, como por ejemplo con nuestro curso "Reducción del estrés basado en Mindfulness". Te queremos recordar que tu bienestar es la prioridad y que es importante sacarle el tiempo y el espacio para nutrirlo.`,
  high: `Esta encuesta explora tus niveles de agotamiento, desgaste emocional y falta de energía, revelando tu bienestar laboral y mental. Tu puntaje es alto. Lo anterior indica que estás en riesgo de sentir burnout, lo que interfiere de forma significativa en tu vida y en tu bienestar integral. 
  <br/><br/>
  Tiendes a sentir agotamiento constante, lo que te lleva a distanciarte de tus emociones, de tus compañeros, y de las actividades que antes disfrutabas. Desde Nua, te recomendamos explorar nuestra plataforma, pues es fundamental reconocer la importancia de tu bienestar y sacar el tiempo y el espacio para desarrollar habilidades que te permitan alcanzar un bienestar integral. 
  <br/><br/>
  Contamos con una diversidad de módulos que enseñan diferentes habilidades. Desde herramientas esenciales de tan solo 5 minutos donde puedes aprender a manejar tus emociones, pensamientos y volver al momento presente, hasta contacto directo con coaches premium que pueden brindarte información individualizada para alcanzar un bienestar adecuado. 
  <br/><br/>
  Te recordamos la importancia de ponerte como prioridad y sacar este tiempo para ti, pues superar el burnout lleva tiempo y esfuerzo, pero con el autocuidado adecuado y el apoyo necesario, puedes recuperarte y volver a encontrar un equilibrio saludable en tu vida.`,
};

export const totalScoreMessage: ScoreMessages = {
  low: `Tu puntaje general en las habilidades de vida es bajo. Lo anterior indica que los obstáculos del día a día interfieren con tus áreas de vida, y tus habilidades no son suficientes para navegar el malestar que esto puede generar. 
  <br/><br/>
  La buena noticia es que las habilidades se pueden adquirir si se ponen en práctica algunas herramientas y técnicas. Desde Nua, te recomendamos un acompañamiento en la adquisición de estas habilidades para que puedas mejorar tu bienestar integral. 
  <br/><br/>
  En nuestros módulos puedes encontrar desde técnicas que no duran más de 5 minutos para aprender a darle manejo a tus pensamientos y a tus emociones, hasta sesiones personalizadas con coaches premium que te ayudan a explotar el potencial que tienes dentro. Bienvenido al comienzo de un nuevo capítulo de tu vida, juntos podemos lograrlo.`,
  medium: `Tu puntaje general en las habilidades de vida es medio. Lo anterior indica que cuentas con ciertas habilidades que te permiten navegar las situaciones difíciles, no obstante a veces los obstáculos interfieren en tu bienestar integral. 
  <br/><br/>
  Estas interferencias se pueden presentar en tus diferentes áreas de vida, por lo que este es el momento para reflexionar sobre las metas que quieres alcanzar para generar y mantener un equilibrio en tu bienestar. Desde Nua, te recomendamos terminar de desarrollar esas habilidades para alcanzar tu potencial. 
  <br/><br/>
  En nuestros módulos puedes encontrar herramientas de menos de 5 minutos para el manejo de emociones y pensamientos, y entrenamientos personalizados para terminar de adquirir las habilidades que necesitas. Vas encaminado hacia un mayor bienestar y estamos acá para acompañarte.`,
  high: `Tu puntaje general en las habilidades de vida es alto. Lo anterior indica que cuentas con herramientas adecuadas para afrontar los obstáculos que se te presentan en el día a día. 
  <br/><br/>
  Cuentas con un desempeño adecuado en tus relaciones interpersonales, reconoces lo que sientes y lo que necesitas, logras vivir el momento presente, tienes hábitos saludables y rutinas que aportan a tu salud física, una comprensión sólida de los conceptos y prácticas financieras saludables, y mantienes presupuestos y planes financieros. Desde Nua, te recomendamos seguir fortaleciendo estas habilidades, ya que no debemos olvidar que la práctica hace al maestro. 
  <br/><br/>
  Con nuestros módulos puedes profundizar en aquellos detalles que pueden ayudarte a alcanzar tu potencial. Contamos con herramientas esenciales para momentos de conexión y con coaches premium que pueden brindarte esa información que te puede hacer falta. Felicitaciones por tu bienestar integral, estamos seguros que juntos vamos a poder llegar a tu destino.`,
};

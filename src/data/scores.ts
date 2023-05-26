import { AttributeRefs, Attributes } from "@/types/types";

export enum Scores {
  ATTRIBUTE_LOW = 24,
  ATTRIBUTE_HIGH = 41,
  TOTAL_LOW = 100,
  TOTAL_HIGH = 201,
}

export const attributesRefs: AttributeRefs[] = [
  {
    id: "7bc8d7e3-a30c-45d1-be3b-79e57118f6b5",
    positive: true,
    type: Attributes.RELATIONAL,
  },
  {
    id: "7c61f94d-7983-41de-9646-b940e5cf2100",
    positive: false,
    type: Attributes.RELATIONAL,
  },
  {
    id: "8bc5bea4-1c0d-4902-a4d4-fa931358f439",
    positive: true,
    type: Attributes.RELATIONAL,
  },
  {
    id: "bcf59e4a-8597-4f18-bede-5911345908e2",
    positive: false,
    type: Attributes.RELATIONAL,
  },
  {
    id: "3001a874-3b1d-4453-9082-1fc21d58658b",
    positive: false,
    type: Attributes.RELATIONAL,
  },
  {
    id: "60dd6649-6ca8-4e61-8c9a-4279e505b9f7",
    positive: true,
    type: Attributes.RELATIONAL,
  },
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
    positive: false,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "a621d494-2e71-4a0f-b174-b58ae9b4983f",
    positive: true,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "77ef6b90-41a5-49f2-9252-3f9b9cd8d036",
    positive: false,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "d162820c-8a7b-41db-9eab-10aa96f27cd0",
    positive: false,
    type: Attributes.EMOTIONAL,
  },
  {
    id: "d21f2041-680c-4693-bff2-c60c1f4254a4",
    positive: true,
    type: Attributes.MENTAL,
  },
  {
    id: "24149c3f-8bc7-43af-b996-2131f9f40a33",
    positive: false,
    type: Attributes.MENTAL,
  },
  {
    id: "cab76abc-5e14-4715-bf90-f0bdec1d46d9",
    positive: false,
    type: Attributes.MENTAL,
  },
  {
    id: "2c350609-3cbb-481a-a262-499644797922",
    positive: true,
    type: Attributes.MENTAL,
  },
  {
    id: "3d1c42c2-0733-4e49-a4ce-fa79bdd9a5a7",
    positive: false,
    type: Attributes.MENTAL,
  },
  {
    id: "5ffd3a24-9383-4054-854f-b5fde0bead02",
    positive: false,
    type: Attributes.MENTAL,
  },
  {
    id: "f7917771-4a34-4086-915f-1d1f715ff2ba",
    positive: true,
    type: Attributes.PHYSICAL,
  },
  {
    id: "55cd8a79-0dd3-431e-85ce-bac4dbcd697e",
    positive: false,
    type: Attributes.PHYSICAL,
  },
  {
    id: "adfa1e1e-6128-4524-a3fa-8f0fbdc1b3cb",
    positive: true,
    type: Attributes.PHYSICAL,
  },
  {
    id: "52d37a22-8edd-4fba-b06e-94bee3cabb82",
    positive: false,
    type: Attributes.PHYSICAL,
  },
  {
    id: "887b4cea-daad-4f5b-bcbe-a346faab50f4",
    positive: false,
    type: Attributes.PHYSICAL,
  },
  {
    id: "aaf87fea-e57b-4d43-b5af-176623963ca1",
    positive: true,
    type: Attributes.PHYSICAL,
  },
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
    positive: false,
    type: Attributes.FINANCIAL,
  },
  {
    id: "cb99d9a0-62cd-4035-bba5-1c37a40558cb",
    positive: false,
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
    id: "7ea10a64-ffff-48f2-aaee-d73a3e64f47f",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "c704d226-227a-4ace-969d-108ebee263e9",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "b16b8f5f-8568-4a21-b876-e089c19aa0f7",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "972cb31b-ce91-442d-9c27-3ef2de8c8aa7",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "9f925f4d-9cd6-43f6-a39f-334d384ec8c8",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "6b4e9791-5696-4075-bae8-93463f6b9870",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "c20ef5cc-6a7b-45e9-b665-2698da83655f",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "7f90b662-be55-4838-a995-74d717eb76a4",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "fe2f0f04-88b3-4edb-b4c9-9a41ded25fb8",
    positive: false,
    type: Attributes.BURNOUT,
  },
  {
    id: "483446fa-2828-4728-b2aa-de421a1849b8",
    positive: false,
    type: Attributes.BURNOUT,
  },
];

type ScoreMessage = {
  low: string;
  medium: string;
  high: string;
};

export const relationalScore: ScoreMessage = {
  low: "Tu puntaje en la categoría relacional de las habilidades blandas es bajo. Aunque hayas obtenido este puntaje, te queremos recordar que todos tenemos áreas en las que podemos crecer y desarrollarnos. Es comprensible que puedas sentirte desanimado por los resultados, pero desde Nua queremos contarte que este es solo el comienzo de tu camino hacia una mayor satisfacción en tus relaciones personales. Nua está acá para ayudarte a alcanzar ese potencial, con sus módulos de programas en línea puedes conectar con el conocimiento de coaches premium de los que puedes aprender a generar y mantener relaciones más positivas y satisfactorias. El módulo de herramientas esenciales te permite tener momentos de conexión y poner en práctica diferentes técnicas de regulación emocional para aprender a calmar la emoción antes de actuar, logrando reconocer tus necesidades para poder pedirlas mediante una comunicación efectiva. Los módulos de entrenamiento personalizado sirven para focalizar tus metas y llevarte a explotar el potencial que tienes dentro. Recuerda ser paciente contigo mismo durante este proceso de crecimiento. El cambio lleva tiempo y esfuerzo, y es normal experimentar contratiempos en el camino. ¡No te rindas y sigue adelante en tu camino hacia un mayor crecimiento y satisfacción personal en el área relacional!",
  medium:
    "Tu puntaje en la categoría relacional de las habilidades blandas es medio. Desde Nua, queremos felicitarte por tu esfuerzo y compromiso, pues es importante recordar que el crecimiento personal y el desarrollo de habilidades sociales llevan tiempo y práctica. Aunque mantienes relaciones positivas y significativas, se te dificulta comunicarte de forma efectiva con otros. Ahora es el momento perfecto para reflexionar sobre tu resultado y establecer metas realistas para mejorar tus habilidades en el área relacional. Puedes comenzar profundizando en las herramientas que Nua trae para ti, como los programas en línea enfocados en el área relacional, los módulos de herramientas esenciales para aprender a manejar emociones y pensamientos con el fin de nutrir y mantener relaciones interpersonales, y el módulo de servicios especiales que te permite conectar con otros en el ámbito laboral. ¡No te desanimes! Si tomas una acción concreta hacia lo que quieres lograr en el área relacional, puedes aprender a establecer más límites saludables y construir relaciones más equilibradas y satisfactorias.",
  high: "Tu puntaje en la categoría relacional de las habilidades blandas es alto. Lo anterior denota tu dedicación y compromiso en cultivar relaciones saludables y significativas, así como una habilidad para construir vínculos positivos con los demás. Utilizas la comunicación efectiva para comunicar tus necesidades y escuchar las necesidades de otros, poniendo límites que permiten la construcción de relaciones positivas y satisfactorias. Se te facilita aceptar la opinión de otros, no te tomas las cosas de forma personal y logras resolver conflictos mediante el diálogo. Si sigues enfocándote en nutrir esta área, puedes tener un mayor impacto positivo en otras áreas de tu vida, ya que las relaciones interpersonales son uno de los indicadores de la felicidad y de una vida placentera. Desde Nua te recomendamos profundizar en las herramientas que traemos para ti, donde puedes aprender formas de seguir nutriendo relaciones significativas mediante las herramientas esenciales, diseñadas para enseñarte técnicas de menos de 5 minutos para tener un momento de conexión contigo mismo/a. Sigue cultivando tu habilidad para conectarte con los demás, mantén tu apertura y empatía hacia otros, y estamos seguros de que seguirás disfrutando de relaciones saludables y enriquecedoras en el futuro.",
};

export const emotionalScore: ScoreMessage = {
  low: "Tu puntaje en la categoría emocional de las habilidades blandas es bajo. Aunque hayas obtenido este puntaje, te queremos recordar que todos enfrentamos desafíos en nuestro camino hacia el bienestar emocional. Se te dificulta identificar, aceptar y gestionar las emociones, lo que afecta en otras áreas de tu vida. Ante una baja regulación emocional, puedes enganchar en conductas que a corto plazo te hacen sentir bien pero que sabes que a largo plazo traen consecuencias negativas. Este es un momento crucial para reflexionar sobre tus resultados y comprometerte a trabajar en tu bienestar emocional. Es normal tener áreas en las que podemos crecer, y esta es una oportunidad para aprender y desarrollar habilidades que te ayuden a manejar tus emociones de manera saludable. Desde Nua queremos acompañarte en este proceso para aumentar tu bienestar emocional. Te recomendamos utilizar nuestra plataforma donde puedes encontrar desde momentos de conexión de menos de 5 minutos, hasta contacto con coaches premium que te pueden enseñar de manera más personalizada lo que necesites para seguir avanzando en este camino. Tú tienes el poder de trabajar en tu bienestar emocional y construir una vida más equilibrada y satisfactoria. Con paciencia, práctica y un compromiso constante, estamos seguros de que podrás desarrollar habilidades para manejar tus emociones y experimentar una mayor tranquilidad interior.",
  medium:
    "Tu puntaje en la categoría emocional de las habilidades blandas es medio. Aunque hayas obtenido un puntaje medio, te queremos recordar que el desarrollo emocional es un proceso continuo y todos tenemos áreas en las que podemos crecer. Tienes un conocimiento emocional básico que te permite navegar las emociones, pero en ocasiones se te dificulta identificarlas, gestionarlas y expresarlas. Este es un momento propicio para reflexionar sobre tus resultados y establecer metas realistas para fortalecer tu bienestar emocional. Con Nua queremos invitarte a que profundices en diferentes herramientas que pueden llevarte a prosperar en tu área emocional. Nuestros módulos están diseñados para acompañarte en este proceso donde puedes aprender sobre nuestras técnicas de menos de 5 minutos que te permiten aceptar y gestionar la emoción en nuestros hacks emocionales. También tenemos los módulos de entrenamiento personalizado para profundizar en los temas específicos que puedan ser de tu interés. Tú tienes el poder de fortalecer tu bienestar emocional. Con dedicación y práctica continua, estamos seguros de que puedes mejorar tu habilidad para gestionar tus emociones y experimentar una mayor satisfacción en tu vida. ¡No te rindas y sigue adelante en tu camino hacia un mayor bienestar emocional!",
  high: "Tu puntaje en la categoría emocional de las habilidades blandas es alto, lo que indica que eres una persona que reconoce lo que siente y lo que necesita, lo pone en palabras y lo lleva a la acción de forma constructiva. Te dedicas a cultivar y fortalecer tu bienestar emocional y se demuestra en tu capacidad para manejar tus emociones de manera saludable, pues logras comprender tus propias emociones e identificar cómo te afectan. Al reconocer y aceptar tus sentimientos, has creado una base sólida para gestionarlos de manera efectiva. Para continuar cultivando tu bienestar emocional, te contamos que es importante poner en práctica técnicas de autocuidado que te nutran y te ayuden a mantener un equilibrio emocional. Desde Nua te acompañamos en este proceso de crecimiento y desarrollo, donde puedes utilizar nuestra plataforma para acceder a los diferentes módulos. Los hacks emocionales se encuentran en el módulo de herramientas esenciales para generar momentos de conexión, las cuales diseñamos para que puedas gestionar esas emociones que pueden llegar a ser muy intensas. Te recordamos que el bienestar emocional es un viaje continuo y que siempre habrá altibajos en la vida y, aplicando nuestras herramientas que están diseñadas especialmente para ti, puedes continuar experimentando un alto nivel de bienestar emocional en tu vida.",
};

export const mentalScore: ScoreMessage = {
  low: "Tu puntaje en la categoría mental de las habilidades blandas es bajo. Aunque hayas obtenido un puntaje bajo, te recordamos que todos enfrentamos desafíos en nuestra salud mental en algún momento de nuestras vidas. Estos desafíos consisten en la dificultad de tomar decisiones importantes, y en mantener tu atención y concentración en las tareas del día a día. Tus pensamientos suelen estar atascados en el pasado o en el futuro, por lo que no logras disfrutar tu momento presente. También te quedas atascado en pensamientos negativos y no logras hacerle frente a los problemas que se te presentan. Este es un momento crucial para reflexionar sobre tus resultados y comprometerte a trabajar en tu bienestar mental. Te recordamos que obtener un puntaje bajo no te define como persona, y que tienes el poder de cambiar y mejorar tu situación. Por eso es que desde Nua queremos acompañarte en este camino, ofreciéndote una diversidad de herramientas y técnicas que pueden brindarte ese balance mental. Puedes acceder a los hacks mentales y volver al momento presente aprendiendo técnicas de 5 minutos o menos para manejar esos pensamientos negativos que evitan que disfrutes la vida. También está el módulo de entrenamiento personalizado donde juntos podemos profundizar en esos aspectos que te dificultan alcanzar un bienestar mental. Con el compromiso, apoyo adecuado y esfuerzo constante, estamos seguros de que puedes desarrollar habilidades y estrategias para enfrentar los desafíos que encuentres. Sigue adelante en tu camino hacia una mejor salud mental y recuerda que estás en control de tu propio bienestar.",
  medium:
    "Tu puntaje en la categoría mental de las habilidades blandas es medio. Obtener un puntaje medio indica que ya estás tomando medidas para cuidar tu salud mental y cognitiva, lo cual es un gran paso en el camino hacia un bienestar integral. Se te puede dificultar tomar decisiones importantes, concentrarte en diferente actividades o mantener tu atención en tareas importantes. Tus pensamientos suelen estar en el pasado o en el futuro, lo que interfiere en tu capacidad de vivir el momento presente. Cuando se presentan pensamientos negativos, puedes quedarte atrapado en un círculo vicioso del cual es difícil salir. Aunque hayas obtenido un puntaje medio, te recordamos que el bienestar mental y cognitivo es un proceso continuo y todos tenemos áreas en las que podemos crecer. Este es un momento propicio para reflexionar sobre tus resultados y establecer metas realistas para fortalecer tu salud mental y cognitiva. Desde Nua te queremos acompañar en este camino, donde puedes utilizar los diferentes modelos para adquirir herramientas para manejar tus pensamientos, tu atención y tu concentración. Con el módulo de entrenamiento personalizado puedes profundizar en aquellos aspectos que necesitas para alcanzar esa flexibilidad de pensamientos. Tú tienes el poder de trabajar en tu bienestar mental. Con dedicación y práctica continua, estamos seguros de que podrás experimentar una mayor claridad mental y bienestar en tu vida.",
  high: "Tu puntaje en la categoría mental de las habilidades blandas es alto. Lo anterior indica que tienes la habilidad de tomar decisiones difíciles, logras concentrarte y mantener tu atención en tareas difíciles y manejas tus pensamientos con agilidad mental y flexibilidad cognitiva. Logras vivir el momento presente, sin quedarte atascado en el pasado o en el futuro, y no te enfrascas en pensamientos negativos. Sigue aprovechando esta fortaleza para nutrir tu bienestar y mantener un equilibrio mental. Desde Nua te recomendamos explorar diferentes técnicas y herramientas que te permitan desarrollar aún más tus habilidades y la promoción de una mentalidad más útil. Para eso, te recomendamos visitar nuestra plataforma en donde encontrarás en el módulo de herramientas esenciales diferentes técnicas o hacks mentales que te pueden ayudar a desarrollar tu potencial mental, mientras te brindan momentos de conexión. Continúa celebrando tus logros y reconociendo el progreso que has hecho. La salud mental es un viaje en constante evolución y cada pequeño paso cuenta. Estamos seguros que juntos podremos seguir experimentando un alto nivel de bienestar mental en tu vida.",
};

export const physicalScore: ScoreMessage = {
  low: "Tu puntaje en la categoría física de las habilidades blandas es bajo. Aunque hayas obtenido un puntaje bajo, te recordamos que todos enfrentamos desafíos en nuestra salud física en algún momento de nuestras vidas. Esos desafíos pueden consistir en una dificultad para mantener hábitos saludables como una adecuada higiene de sueño. Se te puede complicar conciliar el sueño y/o dormir sin interrupción durante la noche. El ejercicio es algo que sueles evitar y no realizas pausas activas entre actividades para recargarte. Mantener una nutrición adecuada no es algo que sea tu prioridad, y no te hidratas lo suficiente durante el día.  Este es un momento crucial para reflexionar sobre tus resultados y comprometerte a trabajar en tu bienestar físico. Desde Nua, queremos contarte que estamos acá para apoyarte en este proceso de búsqueda de bienestar físico. Contamos con diferentes módulos que te brindan las herramientas necesarias para alcanzar esa motivación e información que puede estar haciéndote falta. Las metas se desglosan de tal manera de que puedas verlas como alcanzables, en vez de sentirte abrumado cada vez que las pongas. Pequeños pasos son mejores que pasos imposibles de alcanzar. Contamos con coaches premium que pueden darte esas técnicas que podemos aplicar para lograr generar y mantener hábitos en nuestra área física. Te recordamos que el progreso es gradual y que cada esfuerzo cuenta. No te desanimes si encuentras obstáculos en el camino. Aprecia tus esfuerzos y celebra cada logro, por pequeño que sea.",
  medium:
    "Tu puntaje en la categoría física de las habilidades blandas es medio. Obtener un puntaje medio indica que estás tomando conciencia de la importancia de cuidar tu cuerpo y estás dispuesto a trabajar en tu bienestar físico. Mantienes hábitos saludables en esta área, no obstante encuentras dificultades en el camino que impiden tu crecimiento. Se te puede dificultar conciliar el sueño y dormir sin interrupción durante la noche, mantener una rutina de ejercicio que te de los resultados que buscas o seguir una nutrición adecuada en la alimentación e hidratación. Te recordamos que tu cuerpo es tu templo, el vehículo que nos mueve en el mundo por lo que es importante cuidar de él. Este es un momento oportuno para reflexionar sobre tus resultados y comprometerte a tomar medidas para mejorar tu salud física. Desde Nua te brindamos las herramientas necesarias para encontrar esa motivación e información que te puede estar faltando. En nuestros módulos puedes encontrar formas para realizar metas claras y logrables, desglosarlas paso a paso para no abrumarte por la magnitud de la misma, y maneras de llevarlas a la acción mediante conductas comprometidas. Te recordamos que el progreso es gradual y que cada pequeño paso cuenta. Estás en el camino correcto y estamos emocionados de ver tu progreso en el camino hacia un mayor bienestar físico.",
  high: "Tu puntaje en la categoría física de las habilidades blandas es alto. Lo anterior indica que tienes hábitos saludables que aportan a tu salud física. Mantienes horarios de sueño que te permiten recargar lo necesario para afrontar las dificultades del día a día con la energía necesaria. Logras mover el cuerpo durante la semana, actividad fundamental para liberar dopamina y serotonina, hormonas encargadas del placer y la energía. Haces pausas activas a lo largo del día para recargarte antes de seguir con la siguiente actividad. Tu alimentación e hidratación son importantes para ti, por lo que te encargas de mantener hábitos saludables. Sigue aprovechando este impulso y mantén el enfoque en tu salud física. Desde Nua queremos acompañarte en este camino con nuestros diferentes módulos donde puedes encontrar una diversidad de herramientas y técnicas para encontrar la motivación de mantener esos hábitos saludables y generar momentos de conexión. Te recordamos que el bienestar físico es un viaje continuo y que siempre hay espacio para crecer y mejorar. Sigue cuidando de tí mismo y disfrutando de los beneficios de una vida saludable.",
};

export const financialScore: ScoreMessage = {
  low: "Tu puntaje en la categoría financiera de las habilidades blandas es bajo. Aunque es un puntaje que puede desmotivar, te queremos recordar que este es el primer paso que puedes tomar para generar cambios significativos en tu área financiera. Sabemos que el tema financiero es un tema delicado y que tener conductas impulsivas o tomar decisiones de forma inconsciente puede tener repercusiones no deseables. No contar con la información sobre inversión y/o ahorro puede llevarte a sentir una inestabilidad financiera que te genera intranquilidad. Desde Nua, estamos acá para apoyarte en tu camino hacia una mayor salud financiera. Dentro de nuestros módulos puedes encontrar técnicas y herramientas que te den el manejo emocional y de pensamientos para tomar decisiones conscientes que te acerquen a la tranquilidad financiera que estás buscando. Nuestros coaches premium están precisamente para entrenarte en las habilidades que requieren refuerzo, especialmente en la generación y mantenimiento de metas alcanzables y realistas. Con perseverancia y dedicación, podrás superar los desafíos y alcanzar tus metas financieras.",
  medium:
    "Tu puntaje en la categoría financiera de las habilidades blandas es medio. Este es un paso importante hacia el desarrollo de una salud financiera sólida y demuestra tu compromiso de mejorar en este aspecto de tu vida. Puedes tener dificultades para tener una relación sana con el dinero, para tomar decisiones conscientes o tener metas realistas. La preocupación respecto a las deudas, a los ahorros y a las inversiones pueden rondar en tu mente. Aunque tu puntaje sea medio, recuerda que el bienestar financiero es un proceso continuo y que cada pequeño paso cuenta. Desde Nua, te brindamos diferentes técnicas y herramientas para fortalecer este aspecto financiero. En nuestros módulos puedes encontrar hacks o técnicas que no toman más de 5 minutos y traen consigo grandes beneficios como manejo emocional y de pensamientos que te permiten tomar decisiones más conscientes, en vez de dejarte guiar por un impulso. Es un momento de conexión. En nuestros módulos de entrenamiento especializado puedes encontrar aquellos detalles que te pueden estar faltando para lograr tus metas financieras. Recuerda que cada paso que tomes hacia una mayor salud financiera es un logro significativo. Mantén una mentalidad de crecimiento y continúa esforzándote por mejorar tus habilidades financieras. Con tiempo, esfuerzo y dedicación, estarás en el camino hacia una mejor estabilidad financiera y una vida más tranquila.",
  high: "Tu puntaje en la categoría financiera de las habilidades blandas es alto. Tu puntaje alto refleja una comprensión sólida de los conceptos y prácticas financieras saludables. Lo anterior indica una dedicación y responsabilidad hacia tu área financiera. Tienes claro la importancia de tener conocimiento financiero para tomar decisiones importantes, como tener un dinero apartado para emergencias financieras que no esperabas. Cuentas con un presupuesto personal y/o familiar y mantienes una estabilidad financiera que te brinda tranquilidad. Para resumir, tienes una relación saludable con el dinero. Te recordamos la importancia de seguir fortaleciendo esta área para mantener el ritmo y seguir con esta inteligencia financiera. Desde Nua, te brindamos un espacio donde puedes seguir aprendiendo nuevas técnicas y herramientas que te permiten seguir creciendo financieramente. Contamos con coaches premium que pueden darte esa información que puede estar faltando para terminar de alcanzar tu potencial. Nuestros módulos te brindan herramientas para manejar esos impulsos que nos llevan a tomar decisiones no conscientes respecto al dinero, mediante hacks o técnicas mentales que no toman más de 5 minutos, generando momentos de conexión. Con tu compromiso y conocimiento, estás bien encaminado para alcanzar tus metas financieras y disfrutar de una vida económica saludable.",
};

export const burnoutScore: ScoreMessage = {
  low: "Tu puntaje es bajo. Aunque el puntaje puede generar desmotivación, para nosotros es importante mencionar que el burnout es un desafío común en nuestra sociedad actual e interfiere en el bienestar de la mayoría de las personas. Te sientes agotado, sin energía, lo que te lleva a distanciarte de tus emociones, de tus compañeros, y de las actividades que antes disfrutabas. Sientes malestar constante y se te dificulta desconectarte del trabajo. Desde Nua, queremos contarte que es fundamental reconocer la importancia de tu bienestar y sacar el tiempo y el espacio para desarrollar habilidades que te permiten alcanzar un bienestar integral. Contamos con una diversidad de módulos que enseñan diferentes habilidades. Desde hacks o técnicas de tan solo 5 minutos donde puedes aprender a gestionar tus emociones y pensamientos y volver al presente, hasta contacto directo con coaches premium que pueden brindarte información individualizada para alcanzar un bienestar adecuado. Te recordamos la importancia de ponerte como prioridad y sacar este tiempo para ti, pues superar el burnout lleva tiempo y esfuerzo, pero con el autocuidado adecuado y el apoyo necesario, puedes recuperarte y volver a encontrar un equilibrio saludable en tu vida. No te desanimes y toma las medidas necesarias para cuidarte. ¡Tu bienestar es primordial!",
  medium:
    "Tu puntaje es medio. Obtener esta calificación significa que ya has identificado algunos de los signos del burnout y estás tomando medidas para abordarlo. Ya identificas que te sientes agotado durante la jornada laboral y que te cuesta recuperar esa energía. Pierdes fácilmente el interés en las tareas laborales y hasta en las actividades que antes solías disfrutar. Puedes llegar a responder con irritabilidad cuando no suele ser lo común en tí. Desde Nua, estamos acá para apoyarte en tu camino hacia la recuperación y el bienestar. En nuestra plataforma puedes encontrar diferentes herramientas que te permiten aprender a gestionar mejor tus emociones para recargarte de energía. Tienes contacto directo con nuestros coaches premium, los cuales buscan brindarte herramientas especializadas para afrontar el burnout de la mejor manera. Te queremos recordar que tu bienestar es la prioridad y que es importante sacarle el tiempo y el espacio para nutrirlo. Sabemos que no es fácil, que requiere de esfuerzo y trabajo pero para esto estamos acá, para acompañarte y brindarte las mejores herramientas para superar este agotamiento. Juntos podemos lograrlo.",
  high: "Tu puntaje es alto. Lo anterior indica que tus niveles de burnout son bajos y que cuentas con las herramientas para afrontar las dificultades del día a día de forma saludable. Sientes una conexión positiva con tus emociones y con tus compañeros de trabajo. Tienes la energía necesaria para afrontar los obstáculos laborales y tienes la capacidad de tomar medidas efectivas para superar el agotamiento. Te recordamos que el bienestar es un camino sin destino y que hay espacio para seguir mejorando. Es por esto que desde Nua queremos acompañarte en este camino, donde puedes seguir fortaleciendo estas habilidades de autocuidado. En nuestros módulos puedes encontrar técnicas y herramientas sencillas que te enseñan a manejar tus emociones y tus pensamientos. También te enseñan a volver al momento presente mediante ejercicios de meditación, entre otros. Queremos que sigas practicando técnicas para manejar el burnout y que juntos busquemos nuevas estrategias para ayudarte a mantener un equilibrio emocional.",
};

export const totalScore: ScoreMessage = {
  low: "Tu puntaje general en las habilidades blandas es bajo. Aunque es un puntaje que puede generar desmotivación, te queremos recordar que siempre hay espacio para el aprendizaje y el crecimiento. Los obstáculos del día a día interfieren con tus áreas de vida y tus habilidades no son suficientes para navegar el malestar que esto puede generar. Tus relaciones interpersonales se ven afectadas al no comunicar de forma efectiva lo que sientes o necesitas. Si no sabes identificar lo que sientes tampoco vas a tener las habilidades para gestionar esas emociones. Puedes quedarte atascado en el pasado, en el futuro y en bucles de pensamientos negativos que no te permiten disfrutar del momento presente. No mantienes hábitos saludables en tu higiene de sueño, nutrición y rutina de ejercicio. En el área financiera, tomas decisiones impulsivas que te generan aún más intranquilidad que interfiere con una relación saludable con el dinero. La buena noticia es que como su nombre lo indica, las habilidades se pueden adquirir si se ponen en práctica algunas herramientas y técnicas. Y eso es lo que queremos brindarte desde Nua, un acompañamiento en la adquisición de estas habilidades para que puedas mejorar tu bienestar integral, generando momentos de conexión. En nuestros módulos puedes encontrar desde técnicas que no duran más de 5 minutos para aprender a darle manejo a tus pensamientos y a tus emociones, hasta sesiones personalizadas con coaches premium que te ayudan a explotar el potencial que tienes dentro. Bienvenido al comienzo de un nuevo capítulo de tu vida, juntos podemos lograrlo.",
  medium:
    "Tu puntaje general en las habilidades blandas es medio. Lo anterior indica que cuentas con ciertas habilidades que te permiten navegar las situaciones difíciles, no obstante a veces los obstáculos interfieren en tu bienestar integral. Estas interferencias se pueden presentar en tus diferentes áreas de vida, por lo que este es el momento para reflexionar sobre las metas que quieres alcanzar para generar y mantener un equilibrio en tu bienestar. Tus relaciones interpersonales se pueden ver afectadas si no sabes comunicar de forma efectiva lo que necesitas o si no sabes mantener relaciones positivas y significativas. Al no identificar tus emociones, no vas a poder gestionarlas o pedir lo que necesitas a otros. Se te dificulta mantener la concentración y la atención en tareas del día a día y en rutinas de hábitos saludables, como lo es el sueño, el ejercicio y la alimentación. Aunque tienes conocimiento financiero, te preocupan algunas decisiones que tomas, lo que te genera intranquilidad en esta área. Es el momento para parar e implementar cambios significativos en tu vida. Desde Nua, queremos acompañarte en este camino. Juntos podemos terminar de desarrollar esas habilidades para alcanzar tu potencial. En nuestros módulos puedes encontrar desde hacks o técnicas de menos de 5 minutos, hasta entrenamientos personalizados para terminar de adquirir las habilidades que necesitas. Vas encaminado hacia un mayor bienestar, juntos lo podemos lograr.",
  high: "Tu puntaje general en las habilidades blandas es alto. Lo anterior indica que cuentas con herramientas adecuadas para afrontar los obstáculos que se te presentan en el día a día. Construyes y mantienes relaciones interpersonales positivas, logrando una comunicación efectiva con las personas que te rodean. Identificas tus emociones y las de otros, logrando una gestión emocional adecuada que te permite pedir lo que necesitas y establecer límites. Vives en tu momento presente, evitando quedarte atascado en el pasado, en el futuro o en un bucle de pensamientos negativos. Mantienes hábitos saludables en tu rutina de sueño, alimentación y ejercicio. Tomas decisiones conscientes en el área financiera y tienes una relación saludable con el dinero. Desde Nua, queremos acompañarte a seguir fortaleciendo estas habilidades, ya que no debemos olvidar que la práctica hace al maestro. Con nuestros módulos puedes profundizar en aquellos detalles que pueden ayudarte a alcanzar tu potencial, cuentas con hacks o técnicas esenciales para momentos de conexión y con coaches premium que pueden brindarte ese pedazo de información que te puede hacer falta. Felicitaciones por tu bienestar integral, estamos seguros que juntos vamos a poder llegar a tu destino.",
};

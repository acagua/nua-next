import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const CategoryResult = ({
  score,
  title,
}: {
  score: number;
  title: string;
}) => {
  const colors = {
    low: "#92d5ce",
    medium: "#9f7eee",
    high: "#5325a0",
  };
  let pathColor = colors.low;
  if (score > 24) {
    pathColor = colors.medium;
  }
  if (score > 40) {
    pathColor = colors.high;
  }

  return (
    <div className="p-4 m-2 rounded-md border-2 text-justify">
      <p className="text-lg font-title font-bold"> {title} </p>
      <p className="font-text">
        Tu puntaje en la categoría relacional de las habilidades blandas es
        alto. Lo anterior denota tu dedicación y compromiso en cultivar
        relaciones saludables y significativas, así como una habilidad para
        construir vínculos positivos con los demás. Utilizas la comunicación
        efectiva para comunicar tus necesidades y escuchar las necesidades de
        otros, poniendo límites que permiten la construcción de relaciones
        positivas y satisfactorias. Se te facilita aceptar la opinión de otros,
        no te tomas las cosas de forma personal y logras resolver conflictos
        mediante el diálogo. Si sigues enfocándote en nutrir esta área, puedes
        tener un mayor impacto positivo en otras áreas de tu vida, ya que las
        relaciones interpersonales son uno de los indicadores de la felicidad y
        de una vida placentera. Desde Nua te recomendamos profundizar en las
        herramientas que traemos para ti, donde puedes aprender formas de seguir
        nutriendo relaciones significativas mediante las herramientas
        esenciales, diseñadas para enseñarte técnicas de menos de 5 minutos para
        tener un momento de conexión contigo mismo/a. Sigue cultivando tu
        habilidad para conectarte con los demás, mantén tu apertura y empatía
        hacia otros, y estamos seguros de que seguirás disfrutando de relaciones
        saludables y enriquecedoras en el futuro.
      </p>
      <div className="w-[100px]">
        <CircularProgressbar
          value={score}
          text={`${score}`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textSize: "25px",
            // Colors
            pathColor: pathColor,
            textColor: pathColor,
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
          maxValue={50}
        />
      </div>
    </div>
  );
};

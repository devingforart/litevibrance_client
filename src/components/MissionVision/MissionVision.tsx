import React from "react";
import "./MissionVision.scss";

const principles = [
  {
    title: "Misión",
    description:
      "Brindar atención personalizada, continua y eficiente, haciendo foco en la persona y proponiendo un espacio de mutuo respeto y colaboración. Nuestro compromiso es acompañarlo en cada etapa de la vida, demostrando pasión y profesionalismo en lo que hacemos.",
  },
  {
    title: "Visión",
    description:
      "Ser el grupo humano de profesionales de referencia para usted y su familia, brindando servicios de alta calidad mediante la mejora continua de técnicas y conocimientos en el área de salud. Aspiramos a ser una empresa boutique donde la calidad y el cuidado integral sean la prioridad.",
  },
  {
    title: "Valores",
    description:
      "Adoptamos el cuidado como estilo de vida. Valoramos la capacitación continua y la colaboración con el familiar, parte del equipo de atención, para garantizar la excelencia en el servicio. Creemos que cada detalle, por pequeño que sea, contribuye a un servicio de calidad.",
  },
];

const ApplePrinciples = () => {
  return (
    <section className="apple-principles">
      <div className="apple-principles__container">
        {principles.map((principle, index) => (
          <div className="apple-card" key={index}>
            <h2 className="apple-card__title">{principle.title}</h2>
            <p className="apple-card__description">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplePrinciples;

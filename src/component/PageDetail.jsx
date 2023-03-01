import "./PageDetail.css";

function PageDetail() {
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col">
          <h1 className="colorAcent mb-3">El Yaguareté</h1>
          <p>
            Los Esteros del Iberá, en la provincia de Corrientes, Argentina, han
            sido el hogar de muchos animales autóctonos durante siglos. Uno de
            ellos, el Yaguareté, es uno de los grandes felinos más emblemáticos de
            la región. Sin embargo, debido a la caza y la pérdida de hábitat, su
            población en la zona ha disminuido drásticamente. Para ayudar a
            revertir esta tendencia, un proyecto de reintroducción de Yaguaretés
            comenzó en los Esteros del Iberá en 2018. En los últimos años, se
            han insertado varios ejemplares en la zona, incluyendo dos
            hembras en noviembre de 2020. Este proyecto ha sido una iniciativa
            conjunta entre el gobierno provincial de Corrientes, la ONG
            Rewilding Argentina y la Fundación Conservation Land Trust. El
            objetivo es restablecer una población saludable de Yaguaretés en la
            región y ayudar a proteger la biodiversidad de la zona. Los ejemplares
            insertados en los Esteros del Iberá han sido previamente criados en
            cautiverio y han sido sometidos a un riguroso proceso de adaptación
            antes de su liberación en la naturaleza. Además, se han instalado
            cámaras de monitoreo para seguir su progreso y asegurar su
            supervivencia. Este proyecto es un gran paso hacia la protección y
            conservación en los Esteros del Iberá. Esta especie es
            una parte esencial del ecosistema local y su reintroducción puede
            ayudar a restaurar el equilibrio natural de la región. Con el
            tiempo, se espera que su población en los Esteros del
            Iberá crezca y que la región se convierta en un refugio seguro y
            sostenible para esta emblemática especie.
          </p>
        </div>
        <div className="col">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677701595/yaguaret%C3%A9_beka7d.jpg"
            alt="yaguareté"
            title="yaguareté"
            className="img-size mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default PageDetail;

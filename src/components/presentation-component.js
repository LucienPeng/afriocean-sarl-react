import React from "react";
import worker from "../asset/worker.jpeg";
import worker2 from "../asset/worker2.jpeg";

const presentationComponent = () => {
  return (
    <div>
      <div className="container presentation-section mb-5 mt-5">
        <div className="row d-flex flex-column flex-nowrap flex-md-row  align-items-center justify-content-around ">
          <div className="col col-10 col-md-5 img-container">
            <img src={worker2} alt="" />
          </div>
          <div className="col col-10 col-md-6">
            <h3 className="text-center mb-5 mt-5">Qui Sommes-Nous ?</h3>
            <p>
              Au Sénégal, une des régions les plus poissonneuses du monde, le
              secteur de la pêche, en progression constante, joue un rôle
              capital dans l’économie nationale. Avec un taux de captures
              annuelles de 450 000 tonnes l’an, le Sénégal est le deuxième pays
              producteur de la sous région, derrière le Nigéria (530 000 t). La
              pêche est aussi la première branche exportatrice du pays. Le
              principal produit halieutique exporté est le poisson frais (79 %),
              suivi par les conserves (5 %), les produits transformés (4 %).
              <br />
              <br />
              C’est dans cette logique que AFRIOCEAN, une entreprise franche
              d’exportation de produits halieutiques a été créé en 2013. Afin
              d’entrer dans la politique économique dans laquelle est lancé le
              SENEGAL.
              <br />
              <br /> Notre but est de fournir à nos clients des produits de la
              mer frais et diversifiés en fonction de nos marchés. Cela grâce à
              des techniques de productions de haute qualité, à basse
              température pour préserver la bonne qualité et une chaîne de froid
              maitrisée. Nous essayons toujours d’améliorer nos produits pour
              atteindre plus de segments du marché. Nous leur proposons un
              produit de qualité avec une très grande valeur ajoutée et à un
              prix défiant toute concurrence.
              <br />
              <br /> AFRIOCEAN travaille aussi avec des clients un peu partout
              dans le monde à savoir : Taiwan, Corée, Chine, Afrique du Sud,
              Côte d’Ivoire, Guinée, Burkina…
            </p>
          </div>
        </div>
      </div>

      <div className="container history-section mb-5">
        <div className="row d-flex flex-column flex-nowrap flex-md-row align-items-center justify-content-around g-3 ">
          <div className="col col-10 col-md-6">
            <h3 className="text-center mb-5 mt-5">Historie</h3>

            <p>
              AFRIOCEAN a été créé en 2013 par M. CHEN CHUNG-HSIN (JOHN CHEN).
              L’entreprise était située à Yarakh et travaillée en sous traitance
              avec une autre entreprise de la place. AFRIOCEAN n’avait que ses
              bureaux commerciaux pour la vente et l’expédition de ses produits
              un peu partout dans le monde.
              <br />
              <br />
              Dans un souci d’expansion, AFRIOCEAN entame la construction d’une
              usine de transformations de produits halieutiques dans le pôle
              urbain en plein essor de DIAMNIADIO en 2017. L’usine a été
              inaugurée le 10 Février 2018 avec toutes les autorités compétentes
              qui évoluent dans ce secteur d’activité.
            </p>
          </div>
          <div className="col col-10 col-md-4 img-container">
            <img src={worker} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default presentationComponent;

import React from "react";
import equipment1 from "../asset/equipment1.jpeg";
import equipment2 from "../asset/equipment2.jpeg";
import equipment5 from "../asset/equipment5.jpeg";

const EquipmentComponent = () => {
  return (
    <div className="equipment-section">
      <div className="container">
        <h2 className="text-center text-white p-5">Équipements</h2>
        <p>
          Pour la bonne exécution du process de production, AFRIOCEAN a investi
          dans des équipements ultra modernes pour la qualité de son service.
          Une zone 3 a également été développé pour la ligne de production des
          produits élaborés et la ligne de production des gastéropodes /
          céphalopodes. Pour les produits élaborés il s’agit des poissons en
          filet et pour les des gastéropodes / céphalopodes il s’agit de la
          cuisson des coquillages.
        </p>

        <div
          className="row d-flex justify-content-around align-itens-center g-5 mt-5 pb-5"
          data-aos="fade-up"
        >
          <div className="col col-10  d-flex flex-column align-items-center justify-content-start">
            <div className="img-container">
              <img className="img-fluid" src={equipment1} alt="" />
            </div>
            <div>
              <h3>Équipements Frigorifiques</h3>
              <ul>
                <li> 2 tunnels de congélation de 8t.</li>
                <li>2 tunnels de congélation de 4t.</li>
                <li>
                  2 chambres froides avec la capacité de stockage en total de
                  1000T. <br />
                  (Pallet emballé avec film.)
                  <br /> (-20℃ maintenu, maximum -50℃.)
                </li>
                <li>
                  1 chambre de SAS pour protéger les produits. BITZER
                  compresseurs adaptés.
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-10  d-flex flex-column align-items-center justify-content-start">
            <div className="img-container">
              <img className="img-fluid" src={equipment2} alt="" />
            </div>
            <div>
              <h3>Locaux Productions</h3>
              <ul>
                <li> 2 Salles de production pour poisson afrique.</li>
                <li>1 salle de fabrique de glace</li>
                <li>
                  1 salle de production pour produit élaboré
                  <br /> (Conforme aux régles HSQE de l’UE)
                  <br /> (Chariots tous en inox.)
                </li>
                <li>
                  1 salles de production pour la cuisson
                  <br /> (Equipement de cuisson en vapeur)
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-10  d-flex flex-column align-items-center justify-content-start">
            <div className="img-container">
              <img className="img-fluid" src={equipment5} alt="" />
            </div>
            <div>
              <h3>Avantages Compétitifs</h3>
              <ul>
                <li>Vitesse de la congélation (Arêtes des cristaux)</li>
                <li>Température</li>
                <li>constante Emballage avec haute qualité </li>
                <li>Bonne pratique du QHSE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentComponent;

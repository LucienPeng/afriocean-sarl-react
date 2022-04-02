import equipmentPhotos from "../asset/equipmentPhoto.json";
import locauxPhotos from "../asset/locauxPhotos.json";
import avantagesPhotos from "../asset/avantages.json";

import PhotoLoaderComponent from "./photoLoader-component";
import { useState } from "react";

const EquipmentComponent = () => {
  let [carousel, setCarousel] = useState("");
  const carouselHandle = (e) => {
    setCarousel(e.target.getAttribute("data-set"));
  };
  let photoSource = [];
  if (carousel === "equipement") photoSource = equipmentPhotos;
  else if (carousel === "locaux") photoSource = locauxPhotos;
  else if (carousel === "avantages") photoSource = avantagesPhotos;

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
          data-aos="zoom-in-up"
        >
          <div className="col col-10  d-flex flex-column align-items-center justify-content-start">
            <div
              className="img-container"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img
                className="img-fluid"
                src="https://i.imgur.com/ZibFR4x.jpg"
                alt=""
                data-set="equipement"
                onClick={carouselHandle}
              />
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
            <div
              className="img-container"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img
                className="img-fluid"
                src="https://i.imgur.com/S0e3u4Z.jpg"
                alt=""
                data-set="locaux"
                onClick={carouselHandle}
              />
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
            <div
              className="img-container"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img
                className="img-fluid"
                src="https://i.imgur.com/Skl1LXB.jpg"
                alt=""
                data-set="avantages"
                onClick={carouselHandle}
              />
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

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn-close mx-3 mt-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                    {carousel === "equipement" && (
                      <img
                        src="https://i.imgur.com/ZibFR4x.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    )}
                    {carousel === "locaux" && (
                      <img
                        src="https://i.imgur.com/S0e3u4Z.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    )}
                    {carousel === "avantages" && (
                      <img
                        src="https://i.imgur.com/Skl1LXB.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    )}
                  </div>
                  {photoSource.map((photo) => {
                    return (
                      <div key={photo.id} className="carousel-item">
                        <PhotoLoaderComponent photo={photo} />
                      </div>
                    );
                  })}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentComponent;

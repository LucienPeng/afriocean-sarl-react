import { useNavigate } from "react-router-dom";
const IntroComponent = () => {
  const navigate = useNavigate();
  const redirectHandle = () => {
    navigate("/afriocean-sarl-react/about");
  };
  return (
    <div className="intro-section">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div data-aos="zoom-out-down" className="col col-6">
            <h2 className="text-center">A propos de Nous</h2>
            <p>
              AFRIOCEAN, une entreprise franche d’exportation de produits
              halieutiques a été créé en 2013. Afin d’entrer dans la politique
              économique dans laquelle est lancé le SENEGAL.
            </p>
            <button
              onClick={redirectHandle}
              type="submit"
              className="btn btn-dark button"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;

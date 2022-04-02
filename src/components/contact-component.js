const ContactComponent = () => {
  return (
    <div className="contact-section text-center mt-5 mb-5">
      <h2 className="mb-5">Nos Contacts</h2>
      <div className="container-fluid">
        <div
          className="row g-5 mb-5 d-flex justify-content-between"
          data-aos="zoom-in-down"
        >
          <div className="col col-12 col-sm-6 col-md-3">
            <h4>Horaire</h4>
            <p>
              Lundi – Vendredi <br />
              09h00 – 18h00
            </p>
          </div>
          <div className="col col-12 col-sm-6 col-md-3">
            <h4>Adresse</h4>
            <p>
              KM 0.5 Route de Sébi Ponty, <br />
              Diamniadio, Sénégal
            </p>
          </div>
          <div className="col col-12 col-sm-6 col-md-3">
            <h4>Nº Téléphone</h4>
            <p>
              +221 33 836 80 88 <br />
              +221 76 223 24 05
            </p>
          </div>
          <div className="col col-12 col-sm-6 col-md-3">
            <h4>Email</h4>
            <p>
              afriocean.sarl@gmail.com <br />
              Karima.afriocean@gmail.com
            </p>
          </div>
        </div>

        <div
          className="row mt-5 gy-5 d-flex justify-content-around align-items-center"
          data-aos="zoom-in-down"
        >
          <div className="col col-11 mb-5  col-md-5">
            <form>
              <div className="form-group text-start mb-3">
                <label htmlFor="name">
                  <p>Nom et Prénom</p>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  placeholder="Mr./Mme."
                ></input>
              </div>

              <div className="form-group text-start mb-3">
                <label htmlFor="email">
                  <p>Address Email</p>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                ></input>
              </div>

              <div className="form-group text-start mb-3">
                <label htmlFor="message">
                  <p>Commentaire</p>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Merci de partager vos pensés avec nous..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
          <div className="col col-11  col-md-5">
            <div className="ratio ratio-1x1">
              <iframe
                title="googleMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7717.365070935294!2d-17.169175!3d14.730532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd079694bf98a2ff6!2sAFRIOCEAN%20SARL!5e0!3m2!1szh-TW!2stw!4v1648269332225!5m2!1szh-TW!2stw"
                allowFullScreen={""}
                loading={"lazy"}
                referrerPolicy={"no-referrer-when-downgrade"}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;

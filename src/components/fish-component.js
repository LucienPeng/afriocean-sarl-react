import React from "react";

const FishComponent = (source) => {
  return (
    <div className="col col-md-3 col-sm-6 mx-5 col-12 d-flex flex-column align-items-center fish">
      <div className="img-container" data-aos="fade-up-left">
        <img
          data-bs-toggle="modal"
          data-bs-target={"#" + source.data.id}
          className="img-fluid"
          src={source.data.url}
          alt=""
        />
      </div>
      <h3 className="mt-3">{source.data.id}</h3>

      <div
        className="modal fade"
        id={source.data.id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={source.data.id + "Label"}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="d-flex justify-content-end m-3">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center flex-column">
              <img
                className="img-fluid animate__animated animate__rubberBand"
                src={source.data.url}
                alt=""
              />
              <div className="modal-text col-9">
                <h3 className="modal-title" id="staticBackdropLabel">
                  {source.data.id}
                </h3>
                <h5>{source.data.scientificName}</h5>
                <p>
                  En: {source.data.En}
                  <br />
                  Sn: {source.data.Sn}
                </p>
                <p>{source.data.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishComponent;

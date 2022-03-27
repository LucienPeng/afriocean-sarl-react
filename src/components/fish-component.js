import React from "react";
import "animate.css";

const fishComponent = (source) => {
  return (
    <div className="col col-md-4 col-sm-6 g-5 col-12 d-flex flex-column align-items-center fish">
      <div className="img-container">
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
            <div className="modal-body">
              <img className="img-fluid" src={source.data.url} alt="" />
              <h3 className="modal-title" id="staticBackdropLabel">
                {source.data.id}
              </h3>
              <p>{source.data.intro}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fishComponent;

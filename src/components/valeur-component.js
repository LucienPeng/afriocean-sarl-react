import React from "react";

const ValeurComponent = () => {
  return (
    <div className="valeur-section ">
      <div className="container d-lg-flex ">
        <h2 className="text-center align-self-center mt-5">Nos Valeurs</h2>
        <div className="row d-flex align-items-stretch flex-wrap justify-content-center  mt-3">
          <div className="col col-10 col-md-5" data-aos="zoom-in">
            <h3>Qualité</h3>
            <p>
              La qualité est essentielle aux yeux de AFRIOCEAN car évoluant dans
              un secteur sensible qui est celui de l’alimentation. AFRIOCEAN
              suit scrupuleusement toutes les procédures de la production de
              l’arrivée de la matière première jusqu’à la livraison au client
              final du produit fini. Une équipe QSHE est établit pour veiller au
              respect de toutes les normes qui sont régies dans ce secteur.
            </p>
          </div>

          <div className="col col-10 col-md-5" data-aos="zoom-in">
            <h3>Fiabilité</h3>
            <p>
              Nous nous efforçons à respecter les règles de notre profession. La
              qualité est au coeur de nos préoccupations quotidiennes. La
              fiabilité de l’entreprise prend appui sur des compétences
              reconnues et une constante adaptation à toute situation présente
              pour ainsi réagir en conséquent pour la satisfaction de nos
              clients.
            </p>
          </div>
          <div className="col col-10 col-md-5" data-aos="zoom-in">
            <h3>Professionalisme</h3>
            <p>
              Compétences, efficacité, réactivité sont une ligne de conduite
              dans laquelle notre équipe s’investit dans leur travail quotidien
              dans le but de répondre au mieux aux exigences du marché et plus
              particulièrement des clients.
            </p>
          </div>
          <div className="col col-10 col-md-5" data-aos="zoom-in">
            <h3>Sens de l'écoute</h3>
            <p>
              Le client est la raison d’être de l’entreprise. AFRIOCEAN ainsi
              porte une importance capitale aux besoins et suggestions de ses
              clients pour pouvoir leur fournir un produit ou service au-delà de
              leur attente. AFRIOCEAN s’attèle à créer des liens solides basés
              sur la confiance avec ses clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValeurComponent;

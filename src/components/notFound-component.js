import BannerComponent from "./Banner";

const NotFoundComponent = () => {
    return (
        <div id="not-found">
            <BannerComponent />
            <div className="mt-5 container d-flex flex-column align-items-center justify-content-center">
                <h2 className="h1">Page 404</h2>
                <h3>Oh là là !</h3>
                <p>Quelques problèmes inconnus nous arrivent. Nous y sommes dessus !</p>
            </div>
        </div>
    );
};

export default NotFoundComponent;

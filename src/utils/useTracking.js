import ReactGA from 'react-ga';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useTracking = () => {
    const location = useLocation();
    const GOOGLE_TRACKING_ID = "G-G70X5TTNS5";
    const [initialized, setInitialized] = useState(false);


    useEffect(() => {
        ReactGA.initialize(GOOGLE_TRACKING_ID);
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        };
    }, [initialized, location]);
};

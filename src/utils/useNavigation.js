import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();
    const navigationHandler = (pathname) => navigate(pathname);

    return { navigationHandler };
};


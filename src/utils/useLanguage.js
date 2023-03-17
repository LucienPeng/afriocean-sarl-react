import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const DEFAULT_LANGUAGE = 'en';

export const useLanguage = () => {
    const [searchParams, setSearchParams] = useSearchParams(DEFAULT_LANGUAGE);

    useEffect(() => {
       setSearchParams({ lang: DEFAULT_LANGUAGE });
    }, []);

    return { searchParams, setSearchParams };
};

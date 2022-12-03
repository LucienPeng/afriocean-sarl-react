import { useState } from 'react';

export const useToggle = () => {
    const [isToggle, setIsToggle] = useState(false);
    const toggleHandler = () => setIsToggle((isToggle) => !isToggle);

    return { isToggle, setIsToggle, toggleHandler };
};

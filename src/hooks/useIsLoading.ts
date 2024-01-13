import { useSpinner } from 'components/GSpinner';
import { useEffect, useState } from 'react';

const useIsLoading = () => {
    const { showSpinner } = useSpinner();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            showSpinner(false);
            setIsLoading(false);
        };

        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, [showSpinner]);

    useEffect(() => {
        if (isLoading) showSpinner(true);
    }, [isLoading, showSpinner]);
};

export default useIsLoading;

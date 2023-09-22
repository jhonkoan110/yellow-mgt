import { useState, useLayoutEffect, useMemo } from 'react';

export const useWindowDimensions = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateSize = useMemo(() => {
        return () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
    }, []);

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [window.innerWidth, window.innerHeight]);

    return dimensions;
};

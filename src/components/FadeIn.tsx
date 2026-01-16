
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1, ...options });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [options]);

    return [elementRef, isVisible] as const;
}

export const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const [ref, isVisible] = useIntersectionObserver();
    return (
        <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

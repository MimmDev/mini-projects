import { useEffect, useRef } from "react";
import { CascadeIn } from "./Cascade.styles";

interface CascadeProps {
    children: React.ReactNode[];
    interval: number;
}

export const Cascade = ({ children, interval }: CascadeProps) => {
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, children.length);
    }, [children.length]);

    return (
        <>
            {children.map((child, i) => (
                <CascadeIn
                    interval={i * interval}
                    key={i}
                    ref={(el) => (itemsRef.current[i] = el)}
                >
                    {child}
                </CascadeIn>
            ))}
        </>
    );
};

import { useMemo } from "react";
import { Square, Triangle } from "./Shapes.styles";

export const Shapes = () => {
    const shapes = useMemo(() => {
        const shapesList = [];
        for (let i = 0; i < 100; i++) {
            const random = Math.random();

            const negativeX = Math.random() >= 0.5 ? -1 : 1;
            const negativeY = Math.random() >= 0.5 ? -1 : 1;

            const finalX = negativeX * Math.random() * (window.innerWidth / 2);
            const finalY = negativeY * Math.random() * (window.innerHeight / 6);

            const shape = random >= 0.5 ? Square : Triangle;

            shapesList.push({
                startX: window.innerWidth / 2,
                startY: window.innerHeight / 2,
                finalX,
                finalY,
                shape,
            });
        }
        return shapesList;
    }, []);

    console.log(shapes);
    return (
        <>
            {shapes.map((s, index) => (
                <s.shape
                    key={index}
                    startX={s.startX}
                    startY={s.startY}
                    finalX={s.finalX}
                    finalY={s.finalY}
                />
            ))}
        </>
    );
};

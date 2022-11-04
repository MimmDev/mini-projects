import { useState } from "react";
import { useMapEvents } from "react-leaflet";

export const MapHandler = () => {
    const [polygon, setPolygon] = useState<[number, number][]>([]);

    const handleMapClick = (e: any) => {
        polygon.push([e.latlng.lat as number, e.latlng.lng as number]);
        setPolygon(polygon);
        console.log(JSON.stringify(polygon));
    };

    const map = useMapEvents({
        click: handleMapClick,
    });

    return null;
};

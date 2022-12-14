import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import { MapHandler } from "./MapHandler";

const waterPolygon = [
    [53.446104008084404, -2.411659955978394],
    [53.44569505468972, -2.411938905715943],
    [53.44488991618878, -2.413483858108521],
    [53.44411032309955, -2.4151146411895756],
    [53.44357354577114, -2.417174577713013],
    [53.44293451629909, -2.4182260036468506],
    [53.44249997076777, -2.4184834957122807],
    [53.44182258210472, -2.418376207351685],
    [53.4412857758711, -2.4185049533844],
    [53.44049333522565, -2.418891191482544],
    [53.44071061880879, -2.418376207351685],
    [53.4413369005665, -2.418097257614136],
    [53.441860925147594, -2.417882680892945],
    [53.44267890181894, -2.4176895618438725],
    [53.44321569045099, -2.4170672893524174],
    [53.44358632626253, -2.4156939983367924],
    [53.44411032309955, -2.4141490459442143],
    [53.44476211502342, -2.413054704666138],
    [53.445298877334345, -2.4120032787323002],
    [53.445784513581216, -2.411338090896607],
    [53.44595065102275, -2.4112951755523686],
];

export const LeafletMap = () => {
    return (
        <MapContainer
            // @ts-ignore
            center={[53.443829154868595, -2.4158871173858647]}
            zoom={16}
            style={{ width: "1024px", height: "768px" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapHandler />
            <Polygon
                pathOptions={{ fillColor: "blue" }}
                positions={waterPolygon}
            />
            <Marker position={[53.443829154868595, -2.4158871173858647]}>
                <Popup>
                    Old River, Irlam
                    <br />
                    Salford Friendly Anglers' Society
                    <br />
                    Free (Signup Required)
                    <br />
                    <a href="http://salfordfriendlyanglers.co.uk/">
                        Visit Website
                    </a>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

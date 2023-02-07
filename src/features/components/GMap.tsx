import ImageHotspots from "./other/ImageHotspots";
import GMapHotspot from "./GMapHotspot";
import React from "react";

type GMapProps = {
    image: string;
    hotspots: Array<{
        x: number;
        y: number;
        element: React.ReactElement<'GMapHotspot', any>;
    }>;
    style?: React.CSSProperties;
};

const GMap =({image, hotspots, style = {}}: GMapProps) => {
    return (
        <ImageHotspots image={image} hotspots={hotspots} style={style}/>
    );
};

export default GMap;
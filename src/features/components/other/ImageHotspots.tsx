import React, {useState, useEffect, useRef} from "react";
import {useSize} from "react-use";

export type ImageHotspotsProps = {
    image: string;
    style?: React.CSSProperties;
    hotspots: Array<{
        x: number;
        y: number;
        element: React.ReactElement<any, any>;
    }>;
}

const ImageHotspots: React.FC<ImageHotspotsProps> = ({ image, hotspots, style={} }) => {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    });
    const imageRef = useRef<HTMLImageElement>(null);

    const [sized, {width}] = useSize(() => <div/>, { width: 100, height: 100 });

    const handleResize = () => {
        if (imageRef.current) {
            setDimensions({
                width: imageRef.current.offsetWidth,
                height: imageRef.current.offsetHeight,
            });
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    return (
        <div style={{ position: "relative" }} onChange={() => {console.log('changed')}}>
            {sized}
            <img ref={imageRef} src={image} style={{ width: "100%", ...style }} onLoad={handleResize} alt={image}/>
            {hotspots.map(({ x, y, element }) => (
                <div
                    key={`${x}-${y}`}
                    style={{
                        position: "absolute",
                        left: `${(x / 100) * dimensions.width}px`,
                        top: `${(y / 100) * dimensions.height}px`
                    }}
                >
                    {element}
                </div>
            ))}
        </div>
    );
};

export default ImageHotspots;

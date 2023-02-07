import { motion } from "framer-motion";
import React, {useEffect, useState} from "react";
import GButton from "./GButton";

export type LoadOn = 'default'|'scroll'|'button';
export type Effect = 'rightSpring'|'leftSpring'|'bottomSpring'|'opacity';

const effects = {
    rightSpring: { opacity: 0, x: 100 },
    leftSpring: { opacity: 0, x: -100 },
    bottomSpring: { opacity: 0, y: 100 },
    opacity: { opacity: 0 }
};

interface GBlockProps {
    children: (React.ComponentType<any>|JSX.Element|string)[]|(React.ComponentType<any>|JSX.Element|string);
    loadOn?: LoadOn;
    effect?: Effect;
    buttonName?: string;
    style?: React.CSSProperties
}

const GBlock = ({children, loadOn = 'default', buttonName = 'Show more', effect = 'bottomSpring', style = {}}: GBlockProps) => {
    const [isShown, setIsShown] = useState(false);

    const defaultProps = {
        whileInView: {opacity: 1, y: 0, x: 0},
        transition: {delay: 0.3, type: "spring", duration: 2},
        viewport: { once: true }
    };

    const getProps = () => (
        loadOn === "default" ? {} : { initial: effects[effect], ...defaultProps }
    );

    useEffect(() => {
        if (loadOn !== 'button') setIsShown(true);
    }, [loadOn]);

    return (
        <div style={{paddingBottom: 40, position: "relative", ...style}}>
            {
                !isShown ? (
                    <GButton onClick={()=>setIsShown(true)}>
                        {buttonName}
                    </GButton>
                ) : null
            }
            {
                isShown ? (
                    <motion.div
                        {...getProps()}
                    >
                        {children}
                    </motion.div>
                ) : null
            }
        </div>
    )
};

export default GBlock;
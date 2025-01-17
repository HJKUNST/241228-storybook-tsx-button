//Implementing the styles in 

import { createUseStyles } from "react-jss";
import { color, typeface, fontWeight, fontSize } from "../../../theme/theme.token.json";

interface Props {
    color?:string;
    variant?: "primary" | "secondary" | "ghost"; //추가된 variant prop
}

export const useStyles = createUseStyles <string, Props>(() => ({
    button: {
        background: (props) => {
            if (props.variant === "secondary") {
                return color.secondary.$value;
            }
            if (props.variant === "ghost") {
                return "rgba(81, 77, 255, 0.05)"
            }
            return props.color ?? color.primary.$value;
        },
        color: (props) => {
            if (props.variant === 'secondary') {
                return color.grayscale.$hue;
            }
            if (props.variant === "ghost") {
                return color.secondary.$value;
            }
            return color.grayscale.$hue;
        },
        /*
        [Button variant가 두 개일 때]
        background: (props) =>
            props.variant === "secondary"
            ? theme.colors.secondary
            : props.color ?? theme.colors.primary,
        color: (props) =>
            props.variant === "secondary"
                ? "#fff"
                : "#fff",
        */
        fontFamily: typeface.primary.$value,
        fontSize: `${fontSize[1].$value}px`,
        fontWeight: fontWeight.bold.$value,
        width: '342px',
        height: '48px',
        padding: '10px 20px',
        border: (props) => 
            props.variant === "ghost"
                ? `1px solid ${color.secondary.$value}`
                : "none",
        cursor: 'pointer',
        borderRadius: '8px',
        '&:hover': {
            background: (props) => {
                if (props.variant === "secondary") {
                    return color.secondary.hover.$value;
                }
                if (props.variant === "ghost") {
                    return "rgba(81, 77, 255, 0.15)";
                }
                return color.secondary.$value;
            },
        },
    },
}));
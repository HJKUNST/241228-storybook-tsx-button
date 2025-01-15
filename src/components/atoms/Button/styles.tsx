//Implementing the styles in 

import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/types";

interface Props {
    color?:string;
    variant?: "primary" | "secondary" | "ghost"; //추가된 variant prop
}

export const useStyles = createUseStyles <
    string,
    Props,
    Theme
>((theme) => ({
    button: {
        background: (props) => {
            if (props.variant === "secondary") {
                return "#8684ff"
            }
            if (props.variant === "ghost") {
                return "rgba(81, 77, 255, 0.05)"
            }
            return props.color ?? "#504dff";
        },
        color: (props) => {
            if (props.variant === 'secondary') {
                return "#ffffff"
            }
            if (props.variant === "ghost") {
                return "#8684ff"
            }
            return "#ffffff";
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
        fontFamily: 'Pretendard',
        fontSize: '18px',
        fontWeight: '600',
        width: '342px',
        height: '48px',
        padding: '10px 20px',
        border: (props) => {
            if (props.variant === "ghost") {
                return "1px solid #8684ff"
            }
            return "none";
        },
        cursor: 'pointer',
        borderRadius: '8px',
        '&:hover': {
            background: (props) => {
                if (props.variant === "secondary") {
                    return "#8684da"
                }
                if (props.variant === "ghost") {
                    return "rgba(81, 77, 255, 0.15)"
                }
                return "#8684ff"
            },
        },
    },
}));
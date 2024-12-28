//Implementing the styles in 

import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/types";

interface Props {
    color?:string;
}

export const useStyles = createUseStyles <
    string,
    Props,
    Theme
>((theme) => ({
    button: {
        background: props => props.color ?? theme.colors.primary,
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            background: theme.colors.secondary,
        },
    },
}));
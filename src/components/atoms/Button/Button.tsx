// Creating Components - Implementing the Button Component

import React from "react";
import { useStyles } from './styles';

interface ButtonProps {
    color?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    color,
    ...props
}) => {
    const classes = useStyles({ color });

    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};

export default Button;
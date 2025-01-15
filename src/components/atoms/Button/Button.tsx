// Creating Components - Implementing the Button Component

import React from "react";
import { useStyles } from './styles';

interface ButtonProps {
    color?: string;
    variant?: "primary" | "secondary" | "ghost"; //variant 추가해서 secondary button 만들 수 있게 하기
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    color,
    variant = "primary", //variant 추가
    ...props
}) => {
    const classes = useStyles({ color, variant }); //variant 전달

    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};

export default Button;
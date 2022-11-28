import React, { ReactNode } from "react";
import { CardStyled } from "./style";

export interface CardProps {
    children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return <CardStyled>{children}</CardStyled>;
};
import React from 'react';
import Card from "./Card";
import {GotMealApi} from "../../types";

interface Props {
    infoFromApi: GotMealApi[];
}

const Cards: React.FC<Props> = ({infoFromApi}) => {
    return (
        <>
            {infoFromApi.map((item) => (
                <Card
                    key={item.id}
                    infoFromApi={item}
                />
            ))}
        </>
    );
};

export default Cards;
import React from 'react';
import Card from "./Card";
import {GotMealApi} from "../../types";

interface Props {
    infoFromApi: GotMealApi[];
    onDelete: (id: string) => void;
    removedIdItem: string;
}

const Cards: React.FC<Props> = ({infoFromApi, onDelete, removedIdItem}) => {
    return (
        <>
            {infoFromApi.map((item) => (
                <Card
                    key={item.id}
                    infoFromApi={item}
                    onDelete={() => onDelete(item.id)}
                    isLoading={removedIdItem === item.id}
                />
            ))}
        </>
    );
};

export default Cards;
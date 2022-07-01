import React from "react";
import "./Cards.css";
import { CardsData } from "../../Data/Data";
import { Card } from "../Card/Card";

export const Cards = () => {
    return (
        <div className="Cards">
            {
                CardsData.map((card, id)=>{
                    return(
                    <div className="ParentContainer">
                        <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series={card.series}
                        key={id}
                        />
                    </div>
                    )
                })
            }
        </div>
    )
}


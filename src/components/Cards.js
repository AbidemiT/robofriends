import React, {Fragment} from "react";
import Card from "./Card";


const Cards = ({robots}) => {
    return (
        <Fragment>
            <div className="tc">
                    {robots.map((robot, index) => (
                        <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username} email={robot.email} phone={robot.phone}/>
                    ))}
                </div>
        </Fragment>
    )
}

export default Cards;
import React, {Fragment} from "react";

const Card = ({id, name, username, email, phone}) => {
    return (
        <Fragment>
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <small><b>{email}</b></small>
                    <p>{phone}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;
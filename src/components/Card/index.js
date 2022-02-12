import React from "react";
import './card.css'

const Card = ({ pokemon }) => {

    const pokeStatus = [];
    const pokeTypes = [];

    for (const status of pokemon.stats) {
        pokeStatus.push(<li>{`${status.stat.name.toUpperCase()}: ${status.base_stat}`}</li>)

    }

    for (const type of pokemon.types) {
        pokeTypes.push(<li className={`type-${type.type.name} type`}> {`${type.type.name}`} </li>)
    }

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h2 className="flip-card-title" >{pokemon.name.toUpperCase()}</h2>
                    <img className="poke-img-front" src={pokemon.sprites.other.dream_world.front_default} alt='Pokemon' />
                    <ul className="type-list">{pokeTypes}</ul>
                </div>
                <div className="flip-card-back">
                    <h2 className="flip-card-title" >{pokemon.name.toUpperCase()}</h2>
                    <img className="poke-img-back" src={pokemon.sprites.front_default} alt='Pokemon' />
                    <ul className="status" >{pokeStatus}</ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
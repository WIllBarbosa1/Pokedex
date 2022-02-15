import React from "react";
import PokeStatus from "../PokeStatus";
import PokeType from "../PokeType";
import './card.css'
import './cardResponsive.css'
import defaultImg from '../../assets/default.png'

const Card = ({ pokemon, onOpen, onModalPokemon }) => {

    return (
        <div className="flip-card" onClick={() => {
            onModalPokemon(pokemon);
            onOpen();
        }} >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h2 className="flip-card-title" >{pokemon.name.toUpperCase()}</h2>
                    <img className="poke-img-front" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = defaultImg;
                    }} alt='Pokemon' />
                    <PokeType pokemon={pokemon} />
                </div>
                <div className="flip-card-back">
                    <h2 className="flip-card-title" >{pokemon.name.toUpperCase()}</h2>
                    <img className="poke-img-back" src={`${pokemon.sprites.front_default}`} onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = defaultImg;
                        currentTarget.className = 'poke-img-back-error'
                    }} alt='Pokemon' />
                    <PokeStatus pokemon={pokemon} className='status' />
                </div>
            </div>
        </div>
    );
}

export default Card;
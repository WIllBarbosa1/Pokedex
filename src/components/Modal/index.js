import { useEffect, useState } from 'react';
import api from '../../services/api';
import PokeType from '../PokeType';
import PokeStatus from '../PokeStatus';
import defaultImg from '../../assets/default.png';
import './style.css';
import './style.responsive.css';

const Modal = ({ pokemon, onClose }) => {

    const [textEntrie, setTextEntrie] = useState('');

    useEffect(() => {
        async function getTextPokemon() {
            const { data: { flavor_text_entries: [text] } } = await api.get(`/pokemon-species/${pokemon.id}/`);
            setTextEntrie(text.flavor_text);
        }

        getTextPokemon();
    }, [pokemon.id]);




    return (
        <div className='ModalBack' onClick={() => onClose()}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>
                {!!pokemon &&

                    <div>
                        <div className='WrapperHeaderModal'>
                            <h2>{pokemon.name.toUpperCase()}</h2>
                            <button onClick={() => onClose()}>X</button>
                        </div>
                        <div className='WrapperModal'>
                            <img className='imgPokemonModal' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = defaultImg;
                                currentTarget.className = 'poke-img-back-error'
                            }} alt='pokemon' />
                        </div>
                        <div className='WrapperPokeType'>
                            <PokeType pokemon={pokemon} />
                        </div>
                        <div className='Status'>
                            <p>POKEDEX NUMBER: {pokemon.id}</p>
                            <p className='Intro'>DESCRIPTION: {textEntrie}</p>
                            <p>HEIGHT: {pokemon.height}</p>
                            <p>WEIGHT: {pokemon.weight}</p>
                            <PokeStatus pokemon={pokemon} />
                        </div>

                    </div>

                }
            </div>
        </div>
    )
}

export default Modal;
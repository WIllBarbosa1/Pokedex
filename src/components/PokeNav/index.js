import './PokeNav.css';

const PokeNave = ({ onPress, pages }) => {

    const PokeNave = [];

    for (let i = 0; i < pages; i++) {
        PokeNave.push(
            <li><button className="pokeIndexNumber" onClick={() => onPress(i)} key={`PokeNavIndex_${i}`}>{i + 1}</button></li>
        )
    }

    return (
        <ul className="pokeIndexNav">
            {PokeNave}
        </ul>
    )
}

export default PokeNave;
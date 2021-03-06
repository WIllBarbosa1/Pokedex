import './style.css';
import './style.responsive.css';


const PokeType = ({ pokemon }) => {

    const typeList = [];

    for (const type of pokemon.types) {
        typeList.push(<li className={`type-${type.type.name} type`} key={`typeListId${pokemon.id}_${type.type.name}`} > {`${type.type.name.toUpperCase()}`} </li>)
    };

    return (
        <ul className="type-list">{typeList}</ul>
    )

}

export default PokeType;
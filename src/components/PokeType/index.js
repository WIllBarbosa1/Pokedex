import './PokeType.css'

const PokeType = ({ pokemon }) => {

    const typeList = [];

    for (const type of pokemon.types) {
        typeList.push(<li className={`type-${type.type.name} type`} key={`typeListId${pokemon.id}_${type.type.name}`} > {`${type.type.name}`} </li>)
    };

    return (
        <ul className="type-list">{typeList}</ul>
    )

}

export default PokeType;
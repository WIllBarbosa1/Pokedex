import './style.css';
import './style.responsive.css';

const PokeStatus = ({ pokemon, className }) => {

    const statusList = [];

    for (const status of pokemon.stats) {
        statusList.push(<li key={`statusListId${pokemon.id}_${status.stat.name}`}>{`${status.stat.name.toUpperCase()}: ${status.base_stat}`}</li>)
    };

    return (
        <ul className={className}>{statusList}</ul>
    );

}

export default PokeStatus;
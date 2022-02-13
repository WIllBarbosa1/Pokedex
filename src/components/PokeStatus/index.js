import './PokeStatus.css';
import './PokeStatusResponsive.css';

const PokeStatus = ({ pokemon }) => {

    const statusList = [];

    for (const status of pokemon.stats) {
        statusList.push(<li key={`statusListId${pokemon.id}_${status.stat.name}`}>{`${status.stat.name.toUpperCase()}: ${status.base_stat}`}</li>)
    };

    return (
        <ul className="status">{statusList}</ul>
    );

}

export default PokeStatus;
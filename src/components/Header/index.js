import './Header.css';
import icon from '../../assets/iconHeader.png';

const Header = () => {

    return (
        <header className="headerStyle">
            <div className='wrapperTitle'>
                <img src={icon} alt='Pokeball' className='headerIcon' />
                <h2 className="headerTitle">Pokedex</h2>
            </div>
            <nav className='headerNav'>
                <ul className='headerNavUl'>
                    <li className='headerNavIl'><a href="#">Home</a></li>
                    <li className='headerNavIl'><a href="#">About us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
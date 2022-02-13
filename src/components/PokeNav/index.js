import { useEffect, useState } from 'react';
import './PokeNav.css';

const PokeNave = ({ setPage, pages, index }) => {

    const [pokeNave, setPokeNav] = useState([]);

    useEffect(() => {

        function createNavBar() {

            let listItem = <></>;
            let navItems = [];
            const dots = <li><p className="dots">...</p></li>;

            for (let i = 0; i < pages; i++) {


                if (i === index || (i < index + 3 && i > index) || (i < index && i > index - 3)) {
                    console.log('Criou nav item');
                    if (i === index) {
                        listItem = <li><button className="pokeIndexNumber pokeSelected" onClick={() => setPage(i)} key={`PokeNavIndex${i}${index}`}>{i + 1}</button></li>;
                        navItems.push(listItem)
                    } else {
                        listItem = <li><button className="pokeIndexNumber" onClick={() => setPage(i)} key={`PokeNavIndex_Pre${i}${index}`}>{i + 1}</button></li>;
                        navItems.push(listItem)
                    }
                } else if (i === pages - 1) {
                    listItem = <li><button className="pokeIndexNumber" onClick={() => setPage(i)} key={`PokeNavIndex_Pos${i}${index}`}>{i + 1}</button></li>;
                    navItems.push(dots, listItem);
                } else if (i === 0) {
                    listItem = <li><button className="pokeIndexNumber" onClick={() => setPage(i)} key={`PokeNavIndex_Pos${i}${index}`}>{i + 1}</button></li>;
                    navItems.push(listItem, dots);

                }

            }

            setPokeNav(navItems);
        }

        createNavBar();

    })

    const nextPage = (index) => {
        if (!(index + 1 >= pages)) {
            setPage(index + 1);
        }
    }

    const previusPage = (index) => {
        if (!(index - 1 < 0)) {
            setPage(index - 1);
        }
    }

    return (
        <ul className="pokeIndexNav">
            <li><button className="pokeIndexNumber pokeArrows" onClick={() => previusPage(index)} key={`PokeNavIndex_Previus`}>{'<'}</button></li>
            {pokeNave}
            <li><button className="pokeIndexNumber pokeArrows" onClick={() => nextPage(index)} key={`PokeNavIndex_Next`}>{'>'}</button></li>
        </ul>
    )
}

export default PokeNave;
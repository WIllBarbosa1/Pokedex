import { useEffect, useState } from 'react';
import './PokeNav.css';
import './PokeNavResponsive.css';

const PokeNave = ({ setPage, pages, index }) => {

    const [pokeNave, setPokeNav] = useState([]);

    function nextPage(index) {
        if (!(index + 1 >= pages)) {
            setPage(index + 1);
        }
    }

    function previusPage(index) {
        if (!(index - 1 < 0)) {
            setPage(index - 1);
        }
    }

    useEffect(() => {


        function createNavBar(currentPage, maxPage, setCurrentPage) {

            let listItem = <></>;
            let navItems = [];
            const dots = <li><p className="dots">...</p></li>;

            for (let i = 0; i < maxPage; i++) {


                if (i === currentPage || (i < currentPage + 3 && i > currentPage) || (i < currentPage && i > currentPage - 3)) {
                    if (i === currentPage) {
                        listItem = <li><button className="pokeIndexNumber pokeSelected" onClick={() => setCurrentPage(i)} key={`PokeNavIndex${i}${currentPage}`}>{i + 1}</button></li>;
                        navItems.push(listItem)
                    } else {
                        listItem = <li><button className="pokeIndexNumber" onClick={() => setCurrentPage(i)} key={`PokeNavIndex_Pre${i}${currentPage}`}>{i + 1}</button></li>;
                        navItems.push(listItem)
                    }
                } else if (i === maxPage - 1) {
                    listItem = <li><button className="pokeIndexNumber" onClick={() => setCurrentPage(i)} key={`PokeNavIndex_Pos${i}${currentPage}`}>{i + 1}</button></li>;
                    navItems.push(dots, listItem);
                } else if (i === 0) {
                    listItem = <li><button className="pokeIndexNumber" onClick={() => setCurrentPage(i)} key={`PokeNavIndex_Pos${i}${currentPage}`}>{i + 1}</button></li>;
                    navItems.push(listItem, dots);

                }

            }

            setPokeNav(navItems);
        }

        createNavBar(index, pages, setPage);

    }, [index, pages, setPage]);

    return (
        <ul className="pokeIndexNav">
            <li><button className="pokeIndexNumber" onClick={() => previusPage(index)} key={`PokeNavIndex_Previus`}>{'<'}</button></li>
            {pokeNave}
            <li><button className="pokeIndexNumber" onClick={() => nextPage(index)} key={`PokeNavIndex_Next`}>{'>'}</button></li>
        </ul>
    )
}

export default PokeNave;
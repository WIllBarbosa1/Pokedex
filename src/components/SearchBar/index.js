import { useForm } from "react-hook-form";
import './SearchBar.css';
import './SearchBarResponsive.css';

const SearchBar = ({ setResult }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = ({ searchText, PokeType }) => {
        setResult(searchText.toLowerCase(), PokeType);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='searchBar'>
                <select {...register('PokeType')} defaultValue={''} >
                    <option value={''}>Type</option>
                    <option value={'normal'}>Normal</option>
                    <option value={'fighting'}>Fighting</option>
                    <option value={'flying'}>Flying</option>
                    <option value={'poison'}>Poison</option>
                    <option value={'ground'}>Ground</option>
                    <option value={'rock'}>Rock</option>
                    <option value={'bug'}>Bug</option>
                    <option value={'ghost'}>Ghost</option>
                    <option value={'steel'}>Steel</option>
                    <option value={'fire'}>Fire</option>
                    <option value={'water'}>Water</option>
                    <option value={'grass'}>Grass</option>
                    <option value={'electric'}>Eletric</option>
                    <option value={'psychic'}>Psychic</option>
                    <option value={'ice'}>Ice</option>
                    <option value={'dragon'}>Dragon</option>
                    <option value={'dark'}>Dark</option>
                    <option value={'fairy'}>Fairy</option>
                    {/* <option value={'unknown'}>Type</option> */}
                    <option value={'shadow'}>Shadow</option>
                </select>
                <div>
                    <input {...register('searchText')} placeholder='Insert pokemon name or number' className="searchBarInput" />
                    <input type={"submit"} value='Search' />
                </div>
            </form>
        </>
    )
}

export default SearchBar;

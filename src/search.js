import { useState} from "react";

const Search = (props) => {
    const [ searchValue, setSearchValue ] = useState("");

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInput = (e) => {
        setSearchValue(e.target.value)
    }

    const searchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInput();
    }

    return (
        <form >
            <div className="form-group">
                <label htmlFor="search movie">
                    Search Movie
                    <input
                      id="search movie"
                      className="form-control"
                      placeholder="Search for Movie"
                      value={searchValue}
                      onChange={handleSearch}

                    />
                </label>

               <button type="submit" className="btn btn-primary" onClick={searchFunction}>Submit</button>

            </div>

        </form>
    )
}

export default Search;
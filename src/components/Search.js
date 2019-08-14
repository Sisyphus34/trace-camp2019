import React from 'react'
import QueryContext from "contexts/QueryContext";

const Search = () => {
    const {
        query,
        queryHandler,
        querySubmitHandler
    } = React.useContext(QueryContext);
    return (
        <div>
            <form onSubmit={querySubmitHandler}>
                <input
                    type="text"
                    value={query}
                    onChange={queryHandler}
                />
                <button type="submit" value="Search">
                    Search
                </button>
            </form>
        </div>
    );
}

export default Search;
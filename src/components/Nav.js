import React from 'react'
import {NavLink} from 'react-router-dom'
import QueryContext from 'contexts/QueryContext'



const Nav = () => {
    const {
      query,
      queryHandler,
      querySubmitHandler
    } = React.useContext(QueryContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark blue lighten-2 mb-4">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form
          className="form-inline mr-auto"
          onSubmit={querySubmitHandler}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={queryHandler}
            autoComplete="off"
          />
          <button
            className="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <NavLink to="/" className="nav-item nav-link">
        Media Library
      </NavLink>
      <NavLink to="/search" className="nav-item nav-link">
        Search
      </NavLink>
      <NavLink to="/interests" className="nav-item nav-link">
        My Interests
      </NavLink>
      
    </nav>
  );
}
export default Nav

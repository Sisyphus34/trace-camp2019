import React from "react";
import QueryContext from "contexts/QueryContext";
import jsonp from "jsonp";

const Results = () => {
  const { query, querySubmission } = React.useContext(QueryContext);
  const [data, setData] = React.useState([]);
  const [info, setInfo] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);
  const [books, setBooks] = React.useState([]);
  const [shows, setShows] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [artists, setArtists] = React.useState([]);

  React.useEffect(() => {
    const API_get_request = ({ query }) => {
      return jsonp(
        `https://tastedive.com/api/similar?info=1&q=${querySubmission}&k=341647-Shawn-X8PAO8XJ`,
        {},
        (err, response) => {
          if (err) return console.log(err);
          setInfo(response.Similar.Info);
          setData(response.Similar.Results);
        }
      );
    };

    API_get_request({ querySubmission });
  }, [querySubmission]);

  React.useEffect(() => {
    let authors = [];
    let books = [];
    let movies = [];
    let shows = [];
    let artists = [];

    data.map(media => {
      if (media.Type === "author") {
        authors.push(media);
      } else if (media.Type === "book") {
        books.push(media);
      } else if (media.Type === "movie") {
        movies.push(media);
      } else if (media.Type === "show") {
        shows.push(media);
      } else if (media.Type === "music") {
        artists.push(media);
      }
    });

    setAuthors(authors);
    setBooks(books);
    setMovies(movies);
    setShows(shows);
    setArtists(artists);
  }, [data]);
  return (
    <div>
      {/* <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Books
          <span className="badge badge-primary badge-pill">{books.length}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Authors
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Movies
          <span className="badge badge-primary badge-pill">
            {movies.length}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Shows
          <span className="badge badge-primary badge-pill">{shows.length}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Artists
          <span className="badge badge-primary badge-pill">
            {artists.length}
          </span>
        </li>
      </ul> */}
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Books
              </button>
              <span className="badge badge-primary badge-pill">
                {books.length}
              </span>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {books.map(book => {
                return <div key={book.Name}>{book.Name}</div>;
              })}
            </div>
          </div>
        </div>

        {/*Start of Card two */}
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Authors
              </button>
              <span className="badge badge-primary badge-pill">
                {authors.length}
              </span>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {authors.map(author => {
                return <div key={author.Name}>{author.Name}</div>;
              })}
            </div>
          </div>
        </div>

        {/* Start of Card Three */}

        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Movies{" "}
              </button>
              <span className="badge badge-primary badge-pill">
                {movies.length}
              </span>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {movies.map(movie => {
                return <div key={movie.Name}>{movie.Name}</div>;
              })}
            </div>
          </div>
        </div>

        {/* Start of Card Four */}

        <div className="card">
          <div className="card-header" id="headingFour">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Shows{" "}
              </button>
              <span className="badge badge-primary badge-pill">
                {shows.length}
              </span>
            </h5>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {shows.map(show => {
                return <div key={show.Name}>{show.Name}</div>;
              })}
            </div>
          </div>
        </div>

        {/* Start of Card Five */}

        <div className="card">
          <div className="card-header" id="headingFive">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Artists{" "}
              </button>
              <span className="badge badge-primary badge-pill">
                {artists.length}
              </span>
            </h5>
          </div>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {artists.map(artist => {
                return <div key={artist.Name}>{artist.Name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

import React from "react";
import QueryContext from "contexts/QueryContext";
import jsonp from "jsonp";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AllInclusiveTwoToneIcon from "@material-ui/icons/AllInclusiveTwoTone";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import PersonPinTwoToneIcon from "@material-ui/icons/PersonPinTwoTone";
import LibraryBooksTwoToneTwoToneIcon from "@material-ui/icons/LibraryBooksTwoTone";
import LibraryMusicTwoToneIcon from "@material-ui/icons/LibraryMusicTwoTone";
import VideoLibraryTwoToneIcon from "@material-ui/icons/VideoLibraryTwoTone";
import TvTwoToneIcon from "@material-ui/icons/TvTwoTone";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ListView from "components/Results/ListView";

const ResultsTab = () => {
  const { query, querySubmission } = React.useContext(QueryContext);
  const [data, setData] = React.useState([]);
  const [info, setInfo] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);
  const [books, setBooks] = React.useState([]);
  const [shows, setShows] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [artists, setArtists] = React.useState([]);
  const [allResults, setAllResults] = React.useState([]);

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
    let allResults = [];
    let authors = [];
    let books = [];
    let movies = [];
    let shows = [];
    let artists = [];

    data.map(media => {
      allResults.push(media);
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
    setAllResults(allResults);
    // console.log(allResults[0]);
  }, [data]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  const useStyles = makeStyles({
    root: {
      flexGrow: 1
      //   maxWidth: 500
    }
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="TwoToneicon label tabs example"
        >
          <Tab
            icon={<AllInclusiveTwoToneIcon />}
            label={
              <span className="badge badge-primary badge-pill">
                ALL {allResults.length}
              </span>
            }
          />
          <Tab
            icon={<LibraryMusicTwoToneIcon />}
            label={
              <span className="badge badge-primary badge-pill">
                ARTISTS {artists.length}
              </span>
            }
          />
          <Tab
            icon={<PersonPinTwoToneIcon />}
            label={
              <span className="badge badge-primary badge-pill">
                AUTHORS {authors.length}
              </span>
            }
          />
          <Tab
            icon={<LibraryBooksTwoToneTwoToneIcon />}
            label={
              <span className="badge badge-primary badge-pill">
                BOOKS {books.length}
              </span>
            }
          />
          <Tab
            icon={<VideoLibraryTwoToneIcon />}
            label={
              <span className="badge badge-primary badge-pill">
                MOVIES {movies.length}
              </span>
            }
          />
          <Tab
            icon={<TvTwoToneIcon />}
            label={
              <span className="badge badge-primary badge-pill">
                SHOWS {shows.length}
              </span>
            }
          />
          <Tab
            icon={<FavoriteTwoToneIcon />}
            label={
              <span className="badge badge-primary badge-pill">FAVORITES</span>
            }
          />
        </Tabs>
        {/* Attempt to add all tab panels into a container with max width */}

        <TabPanel value={value} index={0}>
          {allResults.map(result => {
            return (
              <div key={result.Name}>
                {result.Name} - {result.Type.toUpperCase()};
              </div>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {artists.map(artist => {
            return (
              <div key={artist.Name}>
                <ListView>{artist.Name}</ListView>
              </div>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <div>
                <ListView>
                    {authors}
                </ListView>
            </div> */}
          {authors.map(author => {
            return (
              <div key={author.Name}>
                <ListView>{author}</ListView>
              </div>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {books.map(book => {
            return (
              <div key={book.Name}>
                <ListView>{book.Name}</ListView>
              </div>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {movies.map(movie => {
            return (
              <div key={movie.Name}>
                <ListView>{movie.Name}</ListView>
              </div>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {shows.map(show => {
            return (
              <div key={show.Name}>
                <ListView>{show.Name}</ListView>
              </div>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={6}>
          No Favorites Yet
        </TabPanel>
      </Paper>
    </div>
  );
};
export default ResultsTab;

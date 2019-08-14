import React from "react";
import { Route } from "react-router-dom";
import Home from "components/Home";
import Search from "components/Search";
import Favorites from 'components/Favorites'
import History from 'components/History'
import ResultsTab from 'components/Results/ResultsTab'
import Nav from 'components/Nav'
import ListView from 'components/Results/ListView'

function App() {
  return (
    <div className="App">
        <Route path="/" component={Nav} />
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/search/:query" component={ResultsTab} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/history" component={History} />
    </div>
  );
}

export default App;

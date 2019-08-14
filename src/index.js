import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "components/App";
import { AuthorProvider } from 'contexts/AuthorContext'
import {QueryProvider} from 'contexts/QueryContext'

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const root = (
  <Router>
    <QueryProvider>
      <App />
    </QueryProvider>
  </Router>
);

ReactDOM.render(root, document.getElementById("root"));

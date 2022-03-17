import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo-client";
// import App from './App';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Routes />
    </Router>
    </ApolloProvider>,
  document.getElementById('wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

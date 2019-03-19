import React, {Component} from 'react';
import { Root } from "native-base";
import Welcome from "./Components/welcome/welcome";
import Login from "./Components/login/login";
import Routes from "./routes/route/";

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Routes />
      </Root>
    );
  }
}
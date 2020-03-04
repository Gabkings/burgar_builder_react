import React, { Component } from "react";

import Layout from "./component/layouts/Layout";

import BurgarBuilder from './containers/burgar_builder/Burgar_Builder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgarBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

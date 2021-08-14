import React from "react";

import Directory from "../../Components/directory/directory.component";
import Header from "../../Components/header/header.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <Directory />
  </div>
);

export default HomePage;

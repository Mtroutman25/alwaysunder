import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Home = () =>
  <div>
    <Hero backgroundImage="../images/au.jpg">
      <h1>Always Under</h1>
      <h2>A.U.D.I. G.A.N.G.</h2>
       <h3><Link to="/artists">Check out the artists</Link></h3>
    </Hero>
    <Footer />

  </div>;

export default Home;
import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import auImage from './images/au.jpg';



const Home = () =>
  <div>
    <Hero backgroundImage= "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14606483_550195788504806_3413465728556081545_n.jpg?_nc_cat=0&oh=bbcc5e94272a49ec08c619aa03ca259a&oe=5B63C463">
      <h1>Always Under</h1>
       <h3><Link to="/build">A.U.D.I. G.A.N.G</Link></h3>
    </Hero>
    <Footer />

  </div>;

export default Home;
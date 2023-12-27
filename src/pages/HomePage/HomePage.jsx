import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import { TypeAnimation } from "react-type-animation";
import { Parallax, Background } from "react-parallax";
import { Button } from "@mui/material";
import HeaderComp from "../../components/HeaderComp/HeaderComp";

import QuoteComp from "../../components/QuoteComp/QuoteComp";
import FamilyTreeComp from "../../components/FamilyTreeComp/FamilyTreeComp";
const HomePage = () => {
  return (
    <div className="home">
      <HeaderComp />
      <div className="front-page-container">
        <div className="carousel-comp">
          <div className="carousel">
            <CarouselComp />
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h1 className="welcome-content">
              The Raj Family
            </h1>
            <QuoteComp
              text="Families are like branches on a tree, we grow in different directions yet our roots remain as one."
              author="Anonymous"
            />
          </div>
          
          <div className="family-tree">
            <Link to="/family-tree">
              <Button variant="outlined" size="large">Open Family Tree</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

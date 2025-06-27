import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Events from "./Event/Events";
import FeatureSection from "./FeatureSection/FeatureSection";
import FeaturedRoommatePost from "./FeaturedRoommatePost/FeaturedRoommatePost";
import AboutRoomsy from "./AboutRoomsy";
import Container from "../Container/Container";
import BlogSection from "./BlogSection/BlogSection";
import PromotionalSection from "./PromotionalSection/PromotionalSection";
import OfferSection from "./OfferSection/OfferSection";
import NewsletterSection from "./NewsletterSection/NewsletterSection";

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Roomsy Nest | Home</title>
      </Helmet>

      <Banner></Banner>
      <FeaturedRoommatePost></FeaturedRoommatePost>
      <AboutRoomsy></AboutRoomsy>
      <BlogSection />
  
      <Events></Events>
      <FeatureSection></FeatureSection>
          <NewsletterSection />
    </Container>
  );
};

export default Home;

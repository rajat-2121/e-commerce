import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";
import about_img from "../../Assets/about_img.jpeg"

const About = () => {
    const { loading } = useSelector(
        (state) => state.profile
      );
  return (
    <>
    {loading ? <Loading /> : 
    <>
    <MetaData title="About" />
    <div>
    <Header />
    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}
    >
      <div className="about__page">
        {/* 1st verse */}
        <div className="row flex">
          <div className="col__2">
            <img src={about_img} />
          </div>
          <div className="col__2">
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Welcome to TheWoodShapers
              </span>
              <p>
                Welcome to our online store, where the rich heritage of Varanasi's wood carving craftsmanship 
                comes to life. Nestled along the sacred Ganges River, Varanasi has been a cradle of artistic 
                excellence for centuries, and our platform is a testament to the enduring legacy of this ancient city. 
                Each wood carving on our site is a masterpiece handcrafted by skilled artisans who have inherited their 
                craft through generations. By choosing our platform, you not only bring home a piece of Varanasi's culture 
                but also support the livelihoods of local artisans, preserving their time-honored traditions.
              </p>
              <p>
                Our mission is to connect you with the heart and soul of Varanasi's artistry, offering you a curated selection
                of exquisite wood carvings that showcase the city's rich cultural tapestry. Whether it's intricately carved home 
                decor, sacred religious figurines, or unique jewelry, our collection represents the diverse facets of Varanasi's 
                wood carving heritage. We invite you to explore our virtual marketplace, discover the stories behind each creation, 
                and experience the magic of Varanasi's craftsmanship from the comfort of your home. Thank you for joining us in 
                celebrating the artistry of Varanasi and supporting the talented artisans who bring this tradition to life.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd verse */}
        <div className="second">
          <div className="heading">
            <h2>What We Provide?</h2>
          </div>
          <div className="row flex">
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                </div>
              <span>Best Prices & Offers</span>
              <p>
                Discover unbeatable prices and exclusive offers 
                on our exquisite wood carvings, ensuring you get 
                the best value for your money.
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                </div>
              <span>Best For Trust & Quality</span>
              <p>
                We take pride in our commitment to trust and 
                quality, ensuring that each wood carving you 
                purchase is a testament to the highest standards 
                of craftsmanship and authenticity.
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                </div>
              <span>Fast Delivery System</span>
              <p>
                Experience the convenience of swift and reliable
                delivery, ensuring your chosen wood carvings reach 
                your doorstep in no time.
              </p>
              </div>
            </div>


            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                </div>
              <span>Easy Returns Service</span>
              <p>
                Shop with peace of mind knowing our hassle-free 
                returns service is here to assist you if your 
                purchase doesn't meet your expectations.
              </p>
              </div>
            </div>

            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                </div>
              <span>100% satisfication</span>
              <p>
                Your satisfaction is our top priority. we guarantee
                that every wood carving you receive will bring joy 
                and cultural richness to your life.
              </p>
              </div>
            </div>
            
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                </div>
              <span>Great Daily Deal</span>
              <p>
                Explore our daily deals and discover exceptional wood
                carvings at discounted prices, making it easier than 
                ever to bring the artistry of Varanasi into your home.
              </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  <BottomTab />
  </>
    }
    </>
  );
};

export default About;

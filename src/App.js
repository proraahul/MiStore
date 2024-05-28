import "./App.css";
import PreNavbar from "./components/PreNavbar/PreNavbar";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import data from "../src/data/data.json";
import Offers from "./components/Offers/Offers";
import Heading from "./components/Heading/Heading";
import StarProducts from "./components/StarProducts/StarProducts";
import HotAccessoriesMenu from "./components/HotAccessoris/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessoris/HotAccessories.js";
import ProductReview from "./components/ProductReviews/ProductReview";
import Videos from "./components/Videos/Videos";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavOptions from "./components/Navbar/NavOptions";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />

      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifeStyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />

      <ProductReview ProductReviews={data.productReviews} />

      <Heading text="VIDEOS" />

      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner.end} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;

import { Helmet } from "react-helmet-async";
import CallUs from "../../components/Home/CallUs";
import Feature from "../../components/Home/Feature";
import Featured from "../../components/Home/Featured";
import PopularMenu from "../../components/Home/PopularMenu";
import RecommendMenu from "../../components/Home/RecommendMenu";
import Review from "../../components/Home/Review";
import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <Categories />
        <Feature />
        <PopularMenu />
        <CallUs />
        <RecommendMenu />
      </div>
      <Featured />
      <div className="max-w-screen-xl mx-auto">
        <Review />
      </div>
    </div>
  );
};

export default Home;

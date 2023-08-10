import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import dessertsImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import Offer from "./Offer";
import MenuCover from "../Shared/MenuCover";
import MenuItems from "../Shared/MenuItems";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        title="our menu"
        subtitle="Would you like to try a dish?"
      />
      <Offer />
      <MenuCover
        img={dessertsImg}
        title="desserts"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="my-20 text-center max-w-screen-xl mx-auto">
        <MenuItems
          btnName="order your favorite food"
          filteredKeyword="dessert"
        />
      </div>
      <MenuCover
        img={pizzaImg}
        title="pizza"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="my-20 text-center max-w-screen-xl mx-auto">
        <MenuItems btnName="order your favorite food" filteredKeyword="pizza" />
      </div>
      <MenuCover
        img={saladImg}
        title="salads"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="my-20 text-center max-w-screen-xl mx-auto">
        <MenuItems btnName="order your favorite food" filteredKeyword="salad" />
      </div>
      <MenuCover
        img={soupImg}
        title="soups"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="my-20 text-center max-w-screen-xl mx-auto">
        <MenuItems btnName="order your favorite food" filteredKeyword="soup" />
      </div>
    </div>
  );
};

export default Menu;

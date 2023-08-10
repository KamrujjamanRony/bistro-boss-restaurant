import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import coverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import ShopItems from "./ShopItems";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [item, setItem] = useState(initialIndex);
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Our Shop</title>
      </Helmet>
      <Cover
        img={coverImg}
        title="our shop"
        subtitle="Would you like to try a dish?"
      />
      <Tabs className="max-w-screen-xl mx-auto" defaultIndex={item} onSelect={(index) => setItem(index)}>
        <TabList className="text-center font-bold uppercase my-5">
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <ShopItems item="salad" />
        </TabPanel>
        <TabPanel>
          <ShopItems item="pizza" />
        </TabPanel>
        <TabPanel>
          <ShopItems item="soup" />
        </TabPanel>
        <TabPanel>
          <ShopItems item="dessert" />
        </TabPanel>
        <TabPanel>
          <ShopItems item="drinks" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;

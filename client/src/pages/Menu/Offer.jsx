import SectionHeader from "../../components/Home/SectionHeader";
import MenuItems from "../Shared/MenuItems";

const Offer = () => {
  return (
    <div className="my-20 text-center max-w-screen-xl mx-auto">
      <SectionHeader header="today's offer" subHeader="Don't miss" />
      <MenuItems btnName="order your favorite food" filteredKeyword="offered" />
    </div>
  );
};

export default Offer;

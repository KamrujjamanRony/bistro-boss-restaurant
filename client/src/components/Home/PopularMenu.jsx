import MenuItems from "../../pages/Shared/MenuItems";
import SectionHeader from "./SectionHeader";

const PopularMenu = () => {
  return (
    <div className="mb-20 text-center">
      <SectionHeader header="from our menu" subHeader="check it out" />
      <MenuItems btnName="view full menu" filteredKeyword="popular" />
    </div>
  );
};

export default PopularMenu;

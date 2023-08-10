import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import MenuItem from "./MenuItem";

const MenuItems = ({btnName, filteredKeyword}) => {
  const [menu] = useMenu();
  const filteredMenu = menu.filter((d) => d.category === filteredKeyword);
  return (
    <>
      <div className="grid grid-cols-2 gap-8 mb-8">
        {filteredMenu.map((menu) => (
          <MenuItem key={menu._id} menu={menu} />
        ))}
      </div>
      <Link to={`/shop/${filteredKeyword}`}>
      <button className="btn btn-outline border-0 border-b-[3px] text-xl font-semibold font-inter">
        {btnName}
      </button>
      </Link>
    </>
  );
};

export default MenuItems;

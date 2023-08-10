import SectionHeader from "./SectionHeader";
import MenuCard from "../../pages/Shared/MenuCard";
import useMenu from "../../hooks/useMenu";


const RecommendMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(d => d.category === "offered");
    return (
        <div className="mb-20 text-center">
            <SectionHeader header="chef recommends" subHeader="Should Try" />
            <div className="grid grid-cols-3 gap-8 mb-8">
                {popular.map(menu=><MenuCard key={menu._id} menu={menu} />)}
            </div>
        </div>
    );
};

export default RecommendMenu;
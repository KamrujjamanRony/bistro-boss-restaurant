

const MenuItem = ({menu}) => {
    const {name, recipe, image, price} = menu;
    return (
        <div className="flex space-x-4 items-center">
            <img src={image} alt="popular recipe" className="w-24 h-24 menu-img" />
            <div>
                <h4 className="uppercase font-cinzel">{name} ---------------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-2xl text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;
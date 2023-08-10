import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../provider/AuthProvider";

const MenuCard = ({ menu }) => {
  const {_id, name, recipe, image, price } = menu;
  const {user} = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    const cartItem = {menuItemId: _id, name, image, price, email: user?.email}
    if (user || user?.email ) {
      fetch("https://bistro-boss-server-steel-five.vercel.app/carts", {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your menu successfully added to cart',
            showConfirmButton: false,
            timer: 1500
          });
        } 
      });
    } else {
      Swal.fire({
        text: "You must be login to order the food",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
  }
  return (
    <div className="card bg-zinc-100 shadow-xl rounded-none">
        <img src={image} alt="Shoes" className="" />
        <p className="bg-black text-white absolute right-2 top-2 p-2">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="font-inter text-2xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={() => handleAddToCart()} className="rounded-lg border-b-[3px] border-amber-600 bg-gray-200 hover:bg-black hover:border-black uppercase text-amber-600 text-xl font-semibold font-inter px-8" >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

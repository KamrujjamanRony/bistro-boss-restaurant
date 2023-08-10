import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionHeader from "../../../components/Home/SectionHeader";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://bistro-boss-server-steel-five.vercel.app/carts/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
        }
      })
  }
  return (
    <div className="w-full p-12">
      <SectionHeader header="wanna add more" subHeader="My Cart" />
      <div className="uppercase flex justify-between items-center max-w-5xl mx-auto text-xl md:text-2xl lg:text-4xl font-cinzel font-semibold mb-10">
        <p>total item: {cart?.length}</p>
        <p>total Price: ${total}</p>
        <Link to="/dashboard/payment">
        <button className="btn bg-[#D1A054] hover:bg-[#be7403] text-white">
          pay
        </button>
        </Link>
      </div>

      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="table font-inter">
          {/* head */}
          <thead className="uppercase bg-[#D1A054] text-white font-semibold">
            <tr>
              <th></th>
              <th>item image</th>
              <th>item name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {cart?.map((item, index) => (
              <tr key={item?._id}>
                <th>{index+1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button className="btn btn-error btn-xs text-white" onClick={()=>handleDelete(item._id)}>
                    <RiDeleteBin5Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

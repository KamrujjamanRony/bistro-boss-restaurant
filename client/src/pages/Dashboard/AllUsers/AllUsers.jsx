import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import SectionHeader from "../../../components/Home/SectionHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleAdmin = (user) => {
    fetch(`https://bistro-boss-server-steel-five.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bistro-boss-server-steel-five.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full p-12">
      <SectionHeader header="manage all users" subHeader="How many??" />
      <div className="bg-white p-8 max-w-5xl mx-auto">
        <h2 className="uppercase text-2xl font-bold my-10">
          Total users: {users?.length || 0}
        </h2>
        <div className="overflow-x-auto">
          <table className="table font-inter">
            {/* head */}
            <thead className="uppercase bg-[#D1A054] text-white font-semibold">
              <tr>
                <th></th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {users?.map((user, index) => (
                <tr key={user?._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn bg-[#D1A054] hover:bg-[#be7403] text-white"
                      onClick={() => handleAdmin(user)}
                      disabled={user.role === "admin"}
                    >
                      <FaUsers />
                    </button>
                  </td>
                  <th>
                    <button
                      className="btn btn-error text-white"
                      onClick={() => handleDelete(user._id)}
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

import { useCallback, useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import api from "../../Api";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { Authorization } = useAuth();

  const getUsers = useCallback(async () => {
    try {
      const usersData = await api.get("/admin/users", {
        headers: { Authorization: Authorization },
      });

      if (usersData.status === 200) {
        setUsers(usersData.data?.users);
      }
    } catch (err) {
      console.log(err);
    }
  }, [Authorization]);

  useEffect(() => {
    getUsers();
  }, [Authorization, getUsers]);

  const deleteUser = async (id) => {
    const confirmation = confirm("Are you sure you want to delete");
    if (confirmation) {
      try {
        const deleteUser = await api.delete(`/admin/user/${id}/delete`, {
          headers: { Authorization: Authorization },
        });

        if (deleteUser.status === 200) {
          toast.success(deleteUser.data.msg);
          getUsers();
        }
      } catch (error) {
        console.log(error);
        toast.warn(error?.response?.data?.msg);
      }
    }
  };

  return (
    <div className="admin-table-wrapper">
      <div className="admin-title">Users</div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Username</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((curr, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{curr?.username}</td>
                <td>{curr?.email}</td>
                <td>
                  <Link
                    to={`/admin/user/${curr?._id}/edit`}
                    className="admin-btn btn-green"
                  >
                    <FaEdit size={24} color="white" />
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="admin-btn btn-red"
                    onClick={() => deleteUser(curr?._id)}
                  >
                    <MdDelete size={24} color="white" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

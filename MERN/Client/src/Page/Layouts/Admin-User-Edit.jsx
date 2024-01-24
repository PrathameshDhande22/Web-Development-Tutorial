import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../Api";
import useAuth from "../../Hooks/useAuth";

export const AdminUserEdit = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
  });

  const { Authorization } = useAuth();

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await api.get(`/admin/user/${id}`, {
          headers: { Authorization: Authorization },
        });
        if (userData.status === 200) {
          setRegisterData(userData.data?.user);
        }
      } catch (err) {
        console.error(err);
        toast.error(err?.response?.data?.msg);
      }
    };
    getUser();
  }, [id, Authorization]);

  const onChangeInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setRegisterData({
      ...registerData,
      [key]: value,
    });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updateUser = await api.patch(
        `/admin/user/${id}/update`,
        registerData,
        { headers: { Authorization: Authorization } }
      );

      if (updateUser.status === 200) {
        setLoading(false)
        toast.success(updateUser.data?.msg);
      }
    } catch (error) {
      toast.error(error.response?.data?.msg);
      console.error(error);
      setLoading(false)
    }
  };

  return (
    <div>
      <form action="" className="main-form" onSubmit={onSubmitHandle}>
        <div className="main-header">Update User</div>
        <div>
          <label htmlFor="usernamebox">Username</label>
          <input
            value={registerData.username}
            required
            type="text"
            name="username"
            id="usernamebox"
            onChange={onChangeInputs}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="emailbox">Email</label>
          <input
            value={registerData.email}
            required
            type="email"
            name="email"
            id="emailbox"
            onChange={onChangeInputs}
            placeholder="Enter your email"
          />
        </div>
        {loading ? (
          <div className="btn btn-blue">Updating...</div>
        ) : (
          <button type="Submit" className="btn btn-blue">
            Update
          </button>
        )}
      </form>
    </div>
  );
};

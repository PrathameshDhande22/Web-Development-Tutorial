import { useCallback, useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import api from "../../Api";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export const AdminServices = () => {
  const [services, setServices] = useState([]);

  const { Authorization } = useAuth();

  const getServices = useCallback(async () => {
    try {
      const servicesData = await api.get("/admin/services", {
        headers: { Authorization: Authorization },
      });

      if (servicesData.status === 200) {
        setServices(servicesData.data?.services);
      }
    } catch (err) {
      console.log(err);
    }
  }, [Authorization]);

  useEffect(() => {
    getServices();
  }, [Authorization, getServices]);

  const deleteService = async (id) => {
    const confirmation = confirm("Are you sure you want to delete");
    if (confirmation) {
      try {
        const deleteService = await api.delete(`/admin/service/${id}/delete`, {
          headers: { Authorization: Authorization },
        });

        if (deleteService.status === 200) {
          toast.success(deleteService.data.msg);
          getServices();
        }
      } catch (error) {
        console.log(error);
        toast.warn(error?.response?.data?.msg);
      }
    }
  };

  return (
    <div className="admin-table-wrapper">
      <div className="admin-title">Services</div>
      <div className="cards">
        {services.map((currService, index) => {
          return (
            <div key={index} className="card">
              <div className="card-details">
                <div>{currService?.Provider}</div>
                <div>{currService?.Price}</div>
              </div>
              <div className="card-title">{currService?.Service}</div>
              <div>{currService?.Description}</div>
              <div className="admin-cards-btns">
                <button
                  type="button"
                  className="admin-btn btn-red"
                  onClick={() => deleteService(currService?._id)}
                >
                  <MdDelete size={24} color="white" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

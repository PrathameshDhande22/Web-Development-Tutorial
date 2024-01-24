import { useCallback, useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import api from "../../Api";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export const AdminContact = () => {
  const [contacts, setContacts] = useState([]);

  const { Authorization } = useAuth();

  const getContacts = useCallback(async () => {
    try {
      const contactsData = await api.get("/admin/contacts", {
        headers: { Authorization: Authorization },
      });

      if (contactsData.status === 200) {
        setContacts(contactsData.data?.contacts);
      }
    } catch (err) {
      console.log(err);
    }
  }, [Authorization]);

  useEffect(() => {
    getContacts();
  }, [Authorization, getContacts]);

  const deleteContact = async (id) => {
    const confirmation = confirm("Are you sure you want to delete");
    if (confirmation) {
      try {
        const deleteContact = await api.delete(`/admin/contact/${id}/delete`, {
          headers: { Authorization: Authorization },
        });

        if (deleteContact.status === 200) {
          toast.success(deleteContact.data.msg);
          getContacts();
        }
      } catch (error) {
        console.log(error);
        toast.warn(error?.response?.data?.msg);
      }
    }
  };

  return (
    <div className="admin-table-wrapper">
      <div className="admin-title">Contacts</div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Username</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((curr, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{curr?.username}</td>
                <td>{curr?.email}</td>
                <td>{curr?.message}</td>
                <td>
                  <button
                    type="button"
                    className="admin-btn btn-red"
                    onClick={() => deleteContact(curr?._id)}
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

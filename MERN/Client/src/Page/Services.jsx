import { useEffect, useState } from "react";
import serviceImage from "../assets/webdev.png";
import api from "../Api";

export const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getservices = async () => {
      setLoading(true);
      try {
        const services = await api.get("/services");
        setServiceData(services.data?.services);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getservices();
  }, []);

  return (
    <div className="main-content">
      <div className="main-header">Services</div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          <div className="cards">
            {serviceData.map((currService, index) => {
              return (
                <div key={index} className="card">
                  <div className="card-img-box">
                    <img
                      src={serviceImage}
                      alt="Image of Service"
                      className="card-img"
                    />
                  </div>
                  <div className="card-details">
                    <div>{currService?.Provider}</div>
                    <div>{currService?.Price}</div>
                  </div>
                  <div className="card-title">{currService?.Service}</div>
                  <div>{currService?.Description}</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

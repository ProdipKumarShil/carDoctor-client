import { useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import ServicesCard from "./ServicesCard";

const Services = () => {

  const [services, setServices] = useState([])
  useEffect( () => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <Header top="Service" center="Our Service Area" bottom="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {
          services.map(service => <ServicesCard key={service._id} service={service}/>)
        }
      </div>
      <div className="flex justify-center">
        <button className="btn my-btn-secondary hover:text-white my-10 ">See more...</button>
      </div>
    </div>
  );
};

export default Services;
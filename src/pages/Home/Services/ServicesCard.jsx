import { BsArrowRight } from "react-icons/bs";

const ServicesCard = ({service}) => {
  return (
    <div className="card border border-[#e8e8e8] w-full">
      <figure className="px-[25px] pt-[25px]">
        <img src={service.img} alt="Shoes" className="rounded-xl h-[208px] w-full object-cover" />
      </figure>
      <div className="card-body ">
        <h2 className="text-[25px] font-bold">{service.title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-[#FF3811] text-[20px] font-semibold">Price: {service.price}</p>
          <BsArrowRight className="text-xl text-[#FF3811] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
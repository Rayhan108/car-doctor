import { FaArrowRight} from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {img,price,title}=service;
    // console.log(service);
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl h-[208px]" />
        </figure>
        <div className="card-body ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex justify-between">
          <p className="text-2xl font-bold text-[#FF3811]">Price:${price}</p>

         <FaArrowRight className="text-[#FF3811]"></FaArrowRight>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;
import { FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {img,price,title,_id}=service;
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

        <Link to={`/cheakout/${_id}`}> <FaArrowRight className="text-[#FF3811]"></FaArrowRight></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Cheakout = () => {
    const services=useLoaderData()
    const {user}=useContext(AuthContext)
    // console.log(services);
    const {title,_id,price,img}=services;
const handleOrder=(event)=>{
    event.preventDefault()
    const form = event.target;
    const name =form.name.value;
    const email=user?.email;
   
    const date =form.date.value;
    const booking={
       customerName: name,
       email,
       Price : price,
       date,
       img,
       service: title,
       service_id: _id,
    }
console.log(booking);
fetch('https://new-car-doctor-server-theta.vercel.app/bookings',{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(booking)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.insertedId){
        alert('Successfully Added')
    }
})

}
    
    return (
    <div>
        <h1 className="text-center text-3xl mb-5">Book now: {title}</h1>
   <form onSubmit={handleOrder}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control">
      <label className="label">
            <span className="label-text">Name</span>
          </label>
                <input type="text" defaultValue={user?.displayName} placeholder=" Name" name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
              <label className="label">
            <span className="label-text">Date</span>
          </label>
                <input type="date"  name="date" className="input input-bordered" />
              </div>
      <div className="form-control">
      <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
                <input type="text" defaultValue={'$'+ price} name="due" className="input input-bordered" />
              </div>
              <div className="form-control">
              <label className="label">
            <span className="label-text">Email</span>
          </label>
                <input type="text" placeholder="Your Email" defaultValue={user?.email}  name="email" className="input input-bordered" />
              </div>
      </div>
              <div className="form-control mt-6">
               
                <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
              </div>
       </form>
            <div className="card-body">
    
            </div>
    </div>
      
    );
};

export default Cheakout;
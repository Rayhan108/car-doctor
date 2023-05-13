import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Providers/AuthProvider";
import BookingList from "./BookingList";

const Bookings = () => {
  const { user } = useContext(authContext);
  const [bookings,setBookings]=useState([])
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDelete=(id)=>{
    const proceed =confirm('Are you sure ,you want to delete');
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                alert(' Succesfully Deleted')
                const remaining = bookings.filter(booking=>booking._id !== id);
                setBookings(remaining)
            }
        })
    }
    }
  return <div className="space-y-10 mb-10">
    <h1 className="text-3xl font-bold text-center">Bookings:{bookings.length}</h1>
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th> Service</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     {
      bookings.map(booking=><BookingList key={booking._id} booking={booking} handleDelete={handleDelete}></BookingList>)
     }
     
    
  
   
    </tbody>

    
  </table>
</div>
  </div>;
};

export default Bookings;
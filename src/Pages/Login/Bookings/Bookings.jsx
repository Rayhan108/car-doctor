import { useContext, useEffect } from "react";
import { authContext } from "../../../Providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(authContext);
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Bookings;

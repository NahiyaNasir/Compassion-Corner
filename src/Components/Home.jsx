import { Link, useLoaderData } from "react-router-dom";
import VolunteerNow from "./VolunteerNow";
import { CiCircleChevRight } from "react-icons/ci";
import { useEffect, } from "react";
import Banner from "./Pages/Banner";

const Home = () => {
  const volunteerNow = useLoaderData();
  // const[newDeadline,setNewDeadline]=useState(volunteerNow)

  // console.log(volunteerNow)
 useEffect(()=>{},[])
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-11">
        {volunteerNow.slice(0, 6).map((vn) => (
          <VolunteerNow key={vn._id} vn={vn}></VolunteerNow>
        ))}
      </div>
      <div className=" flex justify-center items-center my-7 ">
        <Link to="/need">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... btn p-4">
            See All <CiCircleChevRight className="text-xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

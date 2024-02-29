import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import book_img from "../../assets/books.jpg"
const Sidebar = () => {
  const [links, setLinks] = useState([
    { id: 1, value: "Books" },
    { id: 2, value: "Authors" },
    { id: 3, value: "Genres" },
  ]);
  const [id, setId] = useState(1)
  useEffect(()=>{
    let id = localStorage.getItem("id")
    setId(id)
  },[id])
 const active_link =(id)=> {
    localStorage.setItem("id", id)
    window.location.reload()
 }
  return (
    <div className=" fixed w-[250px] h-[100vh] bg-white py-[20px] flex flex-col shadow">
      <div className="h-[200px] w-[100%] flex justify-center">
        <img
          className="p-[2px]  w-[190px] h-[190px] rounded-[50%]  hover:scale-[1.2] hover:border-[10px] border-[#21219eb7] transition-all-[0.9s]"
          src={book_img}
          alt="topimg"
        />
      </div>
      <ul className="mt-[25px] gap-[10px] flex flex-col justify-evenly w-[250px] items-center ps-0">
        {links.map((item, index) => {
          return (
            <li key={index} className=" w-[90%]">
              <Link
              onClick={()=>active_link(item.id)}
                className={`rounded no-underline text-[#000] text-[30px] px-[10px] hover:bg-purple-500 w-[100%] ps-[20px] hover:text-white block transition-all ${id == item.id ? " bg-purple-500 text-white" : ""}`}
              >
                {item.value}
              </Link>
            </li>
          );
        })}
        <li className="w-[70%]">
          <Link to="/signin" className="text-red-500 flex items-center gap-[5px] text-[20px] no-underline">Log out <MdLogout/></Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

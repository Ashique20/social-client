import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

import { useForm } from "react-hook-form";
import Add from "../Add/AddDetail";
import Update from "../Update/Update";

const About = () => {
  const [user] = useAuthState(auth)
  const { register, formState: { errors }, handleSubmit } = useForm();


  const [details, setDetail] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/about/${user?.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setDetail(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [user]);







  return (


    <div className="lg:min-h-screen">
      <div className="hero h-96" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <button className="btn mr-[90%] mb-80   bg-[#0B0C10] border-4 text-white " onClick={() => document.getElementById('my_modal_4').showModal()}>Add Detail</button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <Add></Add>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>


        



       


        <div className="avatar ">
          <div className="w-40 mt-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {
              user.photoURL?<img src={user.photoURL} />:<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
            }
          </div>
        </div>
        


      </div>

  {/* The button to open modal */}
<label htmlFor="my_modal_7" className="btn lg:ml-[90%] w-24 mt-10   bg-[#0B0C10] border-4 text-white ">Edit</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
   <Update></Update>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>

      <div className="card ml-20 mb-20 mt-20 w-96 bg-primary shadow-xl  lg:ml-[35%]">
      <div className="card-body">
    <h2 className="card-title">
      {details?.name}
    </h2>
    <p className="font-bold text-xl">{details?.emailName}</p>
    <div className="card-actions justify-end font-bold">
      <div >University: {details?.university}</div> 
      <div >Adress: {details?.address}</div>
    </div>
  </div>
      </div>

    </div>
  )
}


export default About;
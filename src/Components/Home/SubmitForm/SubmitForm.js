import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SubmitForm = () => {
    const [user] = useAuthState(auth)
    console.log(user)

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const imageStorageKey = '0d8e09500d7c49902ad24cd0aed2d9f7';
    const onSubmit = data => {
        const image = data?.img[0]
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        console.log(data)
        fetch(url, {
    method:'POST',
    body:formData
        })
        .then(res=>res.json())
        .then(result=>{
        console.log(result,'imgbb')
        if(result.success){
            const img = result.data.url;
            const media ={
                caption:data.Text,
                img:img,
                avatar:user?.photoURL,
                name:user?.displayName
            }

         if(user?.uid){
            fetch('http://localhost:5000/media',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(media)
            })
            .then(res=>res.json())
            .then(done=>{
                console.log(done)
            })
         }
         else{
            navigate('/login')
         }
        }
        })
    };




    return (
        <div>
            <div className="hero  bg-base-200 text-primary">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  
                    <div className="card  bg-[#212122] ">


                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">What to post?</span>
                                </label>
                                <input type="text" placeholder="type" className="input " required {...register("Text")} />
                            </div>
                            <div className="my-4">

                                <input
                                    type="file"
                                    id="fileInput"
                                    {...register("img")}

                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubmitForm;
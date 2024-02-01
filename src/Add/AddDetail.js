import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';



const Add = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   

    const [user] = useAuthState(auth)
    console.log(user)


    const onSubmit =  data => {
         
        const about ={
            name:data.name,
            university:data.university,
            emailName:user?.email,
            address:data.address,
            
        }
        fetch('http://localhost:5000/about',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(about)
        })
        .then(res=>res.json())
        .then(done=>{
            console.log(done)
        })
    }

   

    return (
        <div  style={{ backgroundImage: `url("https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg") ` }} className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">University</span>
                            </label>
                            <input
                                type="text"
                                placeholder="University Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("university", {
                                    required: {
                                        value: true,
                                        message: 'University is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.university?.type === 'required' && <span className="label-text-alt text-red-500">{errors.university.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="disable"
                                placeholder={user?.email}
                                disabled
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                 
                                })}
                            />
                         
                        </div>
                      

                        <input type="submit" value="Add Detail
              " className="btn btn-active  w-full max-w-xs" />                    </form>
                 
                   
                </div>
            </div>
        </div >
    );
};

export default Add;
import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

import auth from '../firebase.init';

const Update = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [user] = useAuthState(auth)

    const handleUpdate = data => {


        fetch(`http://localhost:5000/about/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleUpdate)}>

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


                <input type="submit" value="Update
" className="btn btn-active  w-full max-w-xs" />                    </form>
        </div>
    )
}


export default Update
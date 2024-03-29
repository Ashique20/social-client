import React from 'react';
import { useForm } from "react-hook-form";

import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';



const SignUp = () => {
    const [signInWithGoogle, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        createUserWithEmailAndPassword,


        error
    ] = useCreateUserWithEmailAndPassword(auth);






    let signInError;



    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const [user] = useAuthState(auth)
    console.log(user)


    const onSubmit =async data => {
        const  sign =await createUserWithEmailAndPassword(data.email, data.password);
        
        fetch(`http://localhost:5000/user`, {
            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({userEmail:sign?.user?.email})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
        

    }



    return (
        <div  className='flex h-screen justify-center items-center bg-[#0B0C10]'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input type="submit" value="signUp
              " className="btn btn-active  w-full max-w-xs" />                    </form>
                    <p><small>Already have an account? <Link className='text-primary' to="/login">Please login</Link></small></p>


                </div>
            </div>
        </div >
    );
};

export default SignUp;
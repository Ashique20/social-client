import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const MediaCard = ({ media }) => {
    const [liked, setLiked] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [comments, setComment] = useState([])
    const [count, setCount] = useState(0);


    const navigate = useNavigate()
    const Detail = () => {
        navigate(`/mediaDetail/${media?._id}`)
    }
    useEffect(() => {




        fetch(`http://localhost:5000/comment/${media?._id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [comments])


    const handleClick = () => {
        setLiked(!liked);
      
    };

    const [user] = useAuthState(auth)
    const onSubmit = data => {

        const newData = {
            comment: data.comment,
            postId: media?._id,
            avatarUrl: user?.photoURL
        }

        fetch(`http://localhost:5000/comment`, {
            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    };


    


    return (
        <div >
            <div className=" card-compact  bg-base-100 shadow-xl lg:w-[70%] lg:ml-48 mt-20 mb-20">
                <div className="lg:mb-32  lg:h-40  bg-[#212122] ">
                    <div className=" flex ">

                        <div className="w-14 mt-5 ml-10">    {media?.avatar ? <img className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                            src={media?.avatar} /> : <img className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                                src='https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png' />}
                                </div>
                         <h1 className="mt-10 ml-8 text-white">{media.name}</h1>
                         <div className="ml-4 lg:ml-[55%] mt-8 ">
                            <div className="dropdown">
                                <div 
                                 tabIndex={0} role="button" className="btn bg-primary  border-white border-[2px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-[50%]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box h-32 w-52">
                                    <li className="text-white font-bold text-xl  btn w-24 hover:bg-white hover:text-black border-white "><a onClick={Detail}>Detail</a></li>

                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className=" mt-5 ml-10 text-xl text-primary"><h1>{media.caption}</h1></div>
                    <div >

                      





                    </div>

                </div>


                <div>
                    <img className="w-[100%] " src={media?.img} alt="Shoes" />
                </div>


                <div className="card-body bg-[#212122]">
                    <button
                        onClick={handleClick}
                        className={`w-10  p-2 rounded-full transition duration-300 ${liked ? 'bg-red-500' : 'bg-gray-300'
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={liked ? 'red' : 'gray'}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                        </svg>
                    </button>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="COMMENT"
                                className="input input-bordered w-full max-w-xs"
                                {...register("comment", {
                                    required: {
                                        value: true,
                                        message: 'Comment is Required'
                                    }
                                })}
                            />
                            <input type="submit" value="Add
              " className="btn  bg-blue-500 text-white p-2 rounded-r-md    " />

                        </div>

                    </form>
                    {

                        comments?.map(comment => <div className="flex gap-4 mt-4">
                            <div>
                                <div className="avatar">
                                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                                        {
                                            comment?.avatarUrl ? <img src={comment?.avatarUrl} /> : <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        }
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-white mt-2 font-bold">{comment?.comment}</h1>

                        </div>)
                    }





                </div>
            </div>

        </div>
    )
}

export default MediaCard;
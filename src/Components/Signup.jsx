import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Signup = () => {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();
      const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo).then((res) => {
            console.log(res.data);
            if(res.data){
                toast.success('Signup Successfully');
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((err) => {
            console.log(err);
            toast.error("Error: ", err.response.data.message);
        })
    };
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Signup</h3>

                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input className='w-80 px-3 py-1 border rounded-md outline-none' type="text" placeholder='enter your fullname'
                                    {...register("fullname", { required: true })} />
                                <br />
                                {errors.fullname && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input className='w-80 px-3 py-1 border rounded-md outline-none' type="email" placeholder='enter your email'
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>

                            {/* password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input className='w-80 px-3 py-1 border rounded-md outline-none' type="password" placeholder='enter your password'
                                    {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>

                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>Signup</button>
                                <p>Have account? <button className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
                                >Login</button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup

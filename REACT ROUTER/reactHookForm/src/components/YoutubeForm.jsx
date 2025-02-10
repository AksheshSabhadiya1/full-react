import React from "react";
import {useForm} from 'react-hook-form'
import { DevTool} from '@hookform/devtools'

const YoutubeForm = () =>{

    const form = useForm()

    const {register, control, handleSubmit, formState} = form
    // const {name, ref, onChange, onBlur} = register("username")

    const onFormSubmit = (data) => {
        console.log("Form Submitted",data);
    }

    const {errors} = formState

    return (
        <div>
            <h2>Youtube Form</h2>
            <form onSubmit={handleSubmit(onFormSubmit)} noValidate >
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username",{required : 'Username is required'})} />
                <p className="error">{errors.username?.message}</p>
                {/* <input type="text"
                       id="username"
                       name={name}
                       ref={ref}
                       onChange={onChange}
                       onBlur={onBlur} /> */}

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email",{required : 'email is required'})} />
                <p className="error">{errors.email?.message}</p>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" {...register("channel",{required: 'channel is required'})} />
                <p className="error">{errors.channel?.message}</p>

                <button>Submit</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
}

export default YoutubeForm
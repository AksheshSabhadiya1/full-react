import React, { useEffect, useState } from "react";
import {useForm, useFieldArray} from 'react-hook-form'
import { DevTool} from '@hookform/devtools'

const UserDataForm = () =>{

    const form = useForm({
        // defaultValues: {
        //     username: "Akshu",
        //     email: "",
        //     channel: "",
        //     password: "",
        // }

        //~ Assign defaultvalues
        defaultValues: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await response.json()

            return {
                username: "Akshu",
                email: '',
                channel: "",
                social: {                       //Nested objects
                    instagram: "",
                    facebook: "",
                },
                mobile: ["",""],                //array
                phNumbers: [{ number: ''}],
                hobbies: [{ hobby: ''}],
                age: '',
                DOB: new Date(),
            }
        }
    })

    const onFormSubmit = (data) => {
        console.log("Form Submitted",data);
    }



    //~ Destructuring form
        //type-1
    const { register,                                           
            control, 
            handleSubmit, 
            formState, 
            watch, 
            getValues, 
            setValue,
            reset,      } = form            
        
        //type-2
    // const {name, ref, onChange, onBlur} = register("username")             



    //~ error handling
    const {errors} = formState      



    //~ custom dynamic fields
    const { fields, append, remove } = useFieldArray({
        name: 'phNumbers',
        control
    })

    const { fields : data, append : appendData, remove : removeData } = useFieldArray({
        name: 'hobbies',
        control
    })



    //~ Watch Data
    const watchusername = watch("username")               //only particular field watch
    // const watchdata = watch(['username','email'])       //array of two or more fields
    const watchdata = watch();

    // useEffect(()=>{
    //     const subscription = watch((value)=>{
    //         console.log(value);
    //     })

    //     return () =>{
    //         subscription.unsubscribe
    //     }

    // },[watch])



    //~ getValues   :- prevent against re-rendering of form
    const handleGetValues = () =>{
       console.log("Get Values: ",getValues())
       console.log("Get Username: ",getValues("username"))
       console.log("Get Username & email: ",getValues(["username",'email']))
       console.log("Get Social: ",getValues('social'))
       console.log("Get Social: ",getValues('social.instagram'))
    }



    //~ setValue    :- set value of field and also apply touched, dirty and validate
    const handleSetValue = () => {
        setValue('username','',{
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }



    //~ touchedFields, dirtyFields, isDirty, isvalid
    const {touchedFields, dirtyFields, isDirty, isValid} = formState

    console.log("touchedFields: ",touchedFields,"dirtyFields: ",dirtyFields,"isDirty: ",isDirty,"isValid: ", isValid);
    


    //~ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount
    const {isSubmitting, isSubmitted, isSubmitSuccessful, submitCount} = formState

    console.log("isSubmitting: ",isSubmitting,"isSubmitted: ",isSubmitted,"isSubmitSuccessful: ", isSubmitSuccessful, "submitCount: ", submitCount);


    //~ Handle FieldError when submiting form
    const onError = (error) => {
        console.log("Form Submiting Error ",error);
    }



    //~ Reset form data
    useEffect(()=>{

        if(isSubmitSuccessful){
            reset()
        }

    },[isSubmitSuccessful,reset])




    return (
        <div>
            <h1>Basic UserData Form</h1>
            {/* <h3>Watch All Value: {JSON.stringify(watchdata)}
               <p>Watch Value: {watchusername}</p>
            </h3> */}
            <form onSubmit={handleSubmit(onFormSubmit, onError)} noValidate >
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
                <input type="email" id="email" {...register("email",
                                                           { required : 'Email is required', 
                                                             pattern: {
                                                                value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                                message: "Invalid Email Format"
                                                            },
                                                            emailAvailable: async (fieldvalue) => {
                                                                const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldvalue}`)
                                                                const data = await response.json()

                                                                return data.length == 0 || "Email already exists"
                                                            },  
                                                                                                  
                                                        })} 
                                                             />
                <p className="error">{errors.email?.message}</p>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" {...register("channel",{required: 'Channel is required'})} />
                <p className="error">{errors.channel?.message}</p>

                <label htmlFor="instagram">Instagram</label>
                <input type="text" id="instagram" {...register("social.instagram",{required: 'Instagram Id is required'})} />
                <p className="error">{errors.social?.instagram?.message}</p>

                <label htmlFor="facebook">Facebook</label>
                <input type="text" id="facebook" {...register("social.facebook",{required: 'Facebook Id is required' })} />
                <p className="error">{errors.social?.facebook?.message}</p>

                <label htmlFor="PrimaryNumber">Primary Number</label>
                <input type="text" id="PrimaryNumber" maxLength={10} {...register("mobile.0",{required: 'Primary Number is required'})} />
                <p className="error">{errors.mobile?.[0]?.message}</p>

                <label htmlFor="SecondaryNumber">Secondary Number</label>
                <input type="text" id="SecondaryNumber" maxLength={10} {...register("mobile.1",{ required: 'Secondary Number is required',
                                                                                                //  disabled: watch('mobile.0') === ''
                })} />
                <p className="error">{errors.mobile?.[1]?.message}</p>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" {...register("age",{required: 'age is required', valueAsNumber: true})} />
                <p className="error">{errors.age?.message}</p>

                <label htmlFor="DOB">Date OF Birth</label>
                <input type="date" id="DOB" {...register("DOB",{required: 'Date Of Birth is required', valueAsDate: true})} />
                <p className="error">{errors.DOB?.message}</p>


                <div>
                    <label>List of Phone Number</label>
                    <div>
                        {
                            fields.map((field, index) => {
                                return(
                                <div className="form-control" key={field.id}>
                                    <input type="text" {...register(`phNumbers.${index}.number`)} />
                                    <button type="button" onClick={() => remove(index)}> Remove number</button>
                                </div>)
                            })
                        }
                        <button type="button" onClick={() => append({ number: ''})}>Add number</button>
                    </div>
                </div>



                <div>
                    <label>List your Hobbies</label>
                    <div>
                        {
                            data.map((field2,index)=>{
                                return(
                                    <div className="form-control" key={field2.id}>
                                        <input type="text" {...register(`hobbies.${index}.hobby`)} />
                                        <button type="button" onClick={()=>removeData(index)}>Remove Hobby</button>
                                    </div>
                                )
                            })
                        }
                        <button type="button" onClick={()=>appendData({ hobby: ''})}>Add Hobby</button>
                    </div>
                </div>
                         
                <button disabled={!isDirty || isSubmitting}>Submit</button>
                <button type="button" onClick={handleGetValues}>Get Values</button>
                <button type="button" onClick={handleSetValue}>Set Value</button>
                <button type="button" onClick={() => reset()}>Reset</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
}

export default UserDataForm
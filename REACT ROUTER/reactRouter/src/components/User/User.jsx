import React from "react";
import { useParams } from "react-router-dom";

export default function User(){

    const {userid} = useParams()

    return(
        <div className="bg-gray-700 text-white text-2xl font-medium p-2 m-2"><p>
                Hello, User
            </p>
            Your UserId is : {userid}
        </div>
    )
}
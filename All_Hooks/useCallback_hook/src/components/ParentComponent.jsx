
import React, { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent(){

    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    function incrementAge(){
        setAge( () => age + 1)
    }

    function incrementSalary(){
        setSalary( () => salary + 1000)
    }

    return(
        <div >
            <Title />
            <Count text='Age' Count={age} />
            <Button onClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' Count={salary} />
            <Button onClick={incrementSalary}>Increment Salary</Button>          
        </div>
    )
}

export default ParentComponent
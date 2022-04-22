import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";
const AddUser = (props) => {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid username and age'
            });
            return;
        }
        if (+enteredAge< 1)
        {
            setError({
                title:'Invalid age',
                message:'Please enter a valid age'
            });
            return;
        }
        props.addUser({age:+enteredAge,name:enteredUsername,id:Math.random()});
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }


    return ( 
        <>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}></ErrorModal>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age"onChange={ageChangeHandler} value={enteredAge}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
        </> 
    )
}

export default AddUser;
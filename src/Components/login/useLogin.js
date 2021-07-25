import React ,{useState} from 'react';

function useLogin() {

    const[details,setDetails]=useState({
        email:'',
        password:''
    })
    const [error,setError] =useState({})

    const changeHandler =e=>{
        setDetails({
            ...details,
            [e.target.name]:e.target.detail
        })
    }

    const submitHandler = e=>{
        e.preventDefault()

        
    }


    return { submitHandler , details, changeHandler ,error}
}

export default useLogin

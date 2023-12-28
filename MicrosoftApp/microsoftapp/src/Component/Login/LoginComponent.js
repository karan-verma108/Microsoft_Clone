import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const LoginComponent = () =>{

    let navigate = useNavigate();

    let initialValues = {
        email : 'yamini@gmail.com',
        password : '54321'
    }

    const [values, setValues] = useState(initialValues);
    const [message, setMessage] = useState('');

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const checkout = () =>{
        console.log(values);
        fetch(`http://localhost:5001/api/auth/login`, {
            method : 'POST',
            headers : {
                'accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(values)
        })
        .then((res) => res.json())
        .then((data)=>{
            if(data.auth===false){
                setMessage(data.token)
            } else{
                sessionStorage.setItem('lkn', data.token)
                navigate('/')
            }
        })
    }

    return(
        <div className='container'>
            <hr/>
            <div className='panel panel-warning'>
                <div className='panel-heading'>
                    <h2>Login</h2>
                </div>
                <div className='panel-body'>
                    <div className='row'>
                        <h2 style={{color: 'red'}}>{message}</h2>
                        <div className='col-md-6 form-group'>
                            <label htmlFor='email' className='control-label'>Email</label>
                            <input className='form-control' id='email' name='email' value={values.email} onChange={handleInputChange}/>
                        </div>
                        
                        <div className='col-md-6 form-group'>
                            <label htmlFor='password' className='control-label'>Password</label>
                            <input className='form-control' id='password' name='password' value={values.password} onChange={handleInputChange}/>
                        </div>
                    </div>
                    <button className='btn btn-warning' onClick={checkout}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;

import React, { useState } from 'react'
import Modal from './Modal'
import Login from '../Login/Login'
import Register from '../Register/Register';
import {useDispatch} from 'react-redux'
 

export default function HOC(props) {

    // const [component,setComponent] = useState(<Login />);
    const dispatch = useDispatch();

    return (
        <div>
            <button data-toggle="modal" onClick={()=>{
                dispatch({
                    type:'OPEN_LOGIN',
                    Component: <Login />,
                    handleSubmit: () => {
                        alert('Xử lý đăng nhập !');
                    }
                })
            }} data-target="#modelId" className="btn btn-danger mr-2">Login</button>
            
            <button onClick={()=>{

            }} data-toggle="modal" data-target="#modelId" className="btn btn-success">Register</button>

            <Modal />
        </div>
    )
}



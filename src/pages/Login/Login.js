import React, { useState } from 'react'
import { Prompt } from 'react-router-dom';

export default function Login(props) {

    const [state,setState] = useState({isSaveForm:true,taiKhoan:'',matKhau:''})
    console.log('state',state);

    const handleChangeInput = (event) =>{
        let {value,name} = event.target;

        setState({
            ...state,
            [name]:value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if(state.taiKhoan === 'cybersoft') {
            //Xử lý nghiệp vụ thành công mới chuyển hướng 

            props.history.push('/home');

            // props.history.replace('/home'); //Thay đổi trang hiện tại thành trang có path tương ứng
        }else {
            alert('Tài khoản hoặc mật khẩu không đúng !');
        }
        
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <p>Tài khoản</p>
                    <input className="form-control" name="taiKhoan" onChange={handleChangeInput} />
                </div>
                <div className="form-group">
                    <p>Mật khẩu</p>
                    <input className="form-control" name="matKhau" onChange={handleChangeInput}  />
                </div>
                <div className="form-group">
                  <button type="submit">Login</button>
                  <button type="button" onClick={()=>{
                      props.history.goBack()
                  }}>Go back</button>
                </div>
                <Prompt when={state.isSaveForm} message={(location) => {
                    
                    return 'Bạn có chắc muốn rời khỏi trang';
                }} />
        </form>
    )
}

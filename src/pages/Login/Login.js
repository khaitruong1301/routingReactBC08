import React, { useState } from 'react'
import { Prompt } from 'react-router-dom';
import { useFormik } from 'formik'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions';
import {useDispatch} from 'react-redux'

export default function Login(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        onSubmit: (values) => {
            //Gọi action đăng nhập
            const action = dangNhapAction(values);
            dispatch(action);
            
            console.log(values);
        }
    })

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={formik.handleChange} />
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={formik.handleChange} />
            </div>
            <div className="form-group">
                <button type="submit">Login</button>

                <button type="button" onClick={() => {
                    props.history.goBack()
                }}>Go back</button>
            </div>

        </form>
    )
}

import React from 'react'
import { useFormik } from 'formik'
import { GROUP_ID } from '../../util/settings'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { dangKyAction, dangKyAsyncAction } from '../../redux/actions/QuanLyNguoiDungActions'

export default function Register(props) {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: GROUP_ID
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!').min(6,'Tài khoản từ 6-32 ký tự').max(32,'Tài khoản từ 6 - 32 ký tự'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(6,'Mật khẩu từ 6-32 ký tự').max(32,'Mật khẩu từ 6 - 32 ký tự'),
            email:Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng !'),
            hoTen:Yup.string().required('Họ tên không được bỏ trống !').matches(/^[A-Z a-z]+$/,'Họ tên không được chứa số !')
        })
        ,
        onSubmit: (values) => {
            console.log({ values })
            console.log('values', values)
            //Sau khi gọi hàm dangKy action => function dispatch
            const action = dangKyAsyncAction(values);
            dispatch(action);
            // props.history.push()
        }
    })
    return (
        <form className="container d-flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={formik.handleSubmit}>
            <div style={{ width: '100%' }}>
                <h3>Đăng ký</h3>
                <div className="form-group">
                    <p>Tài khoản</p>
                    <input className="form-control" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                        <div className="alert alert-danger">{formik.errors.taiKhoan}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <p>Họ tên</p>
                    <input className="form-control" name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.hoTen && formik.errors.hoTen ? (
                        <div className="alert alert-danger">{formik.errors.hoTen}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <p>Mật khẩu</p>
                    <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input className="form-control" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="alert alert-danger">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <p>Số điện thoại</p>
                    <input className="form-control" name="soDt" onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-success" type="submit">Đăng ký</button>
                </div>
            </div>
        </form>
    )
}

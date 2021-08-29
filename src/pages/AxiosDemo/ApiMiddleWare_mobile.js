import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhimAction } from '../../redux/actions/PhimActions'
import { TOKEN_CYBERSOFT } from '../../util/settings'
export default function ApiMiddleWare_mobile(props) {

    console.log('props', props)

    const { mangPhim } = useSelector(state => state.PhimReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        // 2 Loại action trong redux
        //Loại 1: {type:'Type_name', data: {}}
        //Loại 2: action là function 
        const action = layDanhSachPhimAction('GP03');
        //Trong trường hợp action là function thì, thì redux sẽ đợi function thực thi xong => Gửi dữ liệu đi
        dispatch(action)
    }, [])



    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="d-flex" key={index}>
                <div style={{width:'100px'}}>
                    <img  style={{width:100}} src={phim.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/200/200" }} />
                </div>
                <div className="ml-2">
                    <div>{phim.moTa?.length > 200 ?  phim.moTa.substr(0,200) + '...' : phim.moTa}</div>
                    <button className="btn btn-outline-success">Đặt vé</button>
                </div>
            </div>
        })
    }
    return (
        <div className="container">
            <h3 className="text-center">Danh sách phim</h3>
            <div className="mt-2">
                {renderPhim()}
            </div>
        </div>
    )
}

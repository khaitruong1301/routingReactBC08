import React, { Component } from 'react'
import axios from 'axios'
import { TOKEN_CYBERSOFT } from '../../util/settings'
export default class AxiosDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mangPhim: []
        }
    }
    //Hàm xử lý sự kiện click để call api 
    getApi = async () => {
        try {
            const result = await axios({
                url: 'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET',
                headers: {
                    "TokenCybersoft": TOKEN_CYBERSOFT
                }
            })
            await this.setState({
                mangPhim: result.data.content
            })
        } catch (error) {
            console.log('abc');

        }


    }
    //Hàm render phim ra giao diện từ this.state.mangPhim
    renderPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} alt="..." height={300} />
                    <div className="card-body">
                        <h3>{phim.tenPhim}</h3>
                        <p>{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })

    }
    render() {
        return (
            <div className="container">
                <button onClick={() => {
                    this.getApi()
                }}>Lấy danh sách phim</button>
                <h3 className="text-center">Danh sách phim</h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }



    //Component tự động gọi hàm này sau khi render
    componentDidMount() {
        this.getApi();
    }
}


  // let promise = axios({
        //     url: 'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET',
        //     headers: {
        //         "TokenCybersoft": TOKEN_CYBERSOFT
        //     }
        // })
        // promise.then(result => {
        //     console.log('result', result.data)
        //     //Sau khi call api thành công lấy dữ liệu api set vào state mangPhim
        //     this.setState({
        //         mangPhim:result.data.content
        //     })
        // })
        // promise.catch(error => {
        //     console.log('error', error.response.data)
        // })

        // console.log('abc')
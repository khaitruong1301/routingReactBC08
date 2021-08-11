import React, { useEffect, useState } from 'react'

export default function UseEffectDemo(props) {

    const [number,setNumber] = useState(1);
    const [like,setLike] = useState(1);

    // useEffect(()=> {
    //     //callback function chạy sau khi giao diện render
    //     //Thay thế cả didmount và didupdate ứng với lifecycle react
    //     console.log('didmount');
    //     console.log('didupdate');
    // })

    useEffect(()=> {
        //Thay thế cho component didmount thường gọi api hoặc sử dụng thư viện trong hàm này
        console.log('didmount');
    },[]) //tham số 2 mảng [] => Chạy 1 lần sau render 

    useEffect(()=> {
       //Chạy lần đầu và khi nào state (like) thay đổi thì hàm này sẽ tự động kích hoạt
       console.log('did update like',like)
    },[like]) //Biến like thay đổi thì hàm kích hoạt


    useEffect(()=>{

        return () => {
            //Trước khi component biến mất khỏi giao diện thì hàm này sẽ kích hoạt
            console.log('will unmount');
        }
    },[])

    return (
        <div className="container">
           <h3>UseEffect Demo</h3>
           <h3>Number: {number}</h3>
           <button className="btn btn-outline-danger" onClick={()=>{
               setNumber(number + 1);
           }}>+</button>
           <hr />
           <h3>like: {like}</h3>
           <button className="btn btn-outline-danger" onClick={()=>{
               setLike(like + 1);
           }}>+</button>
        </div>
    )
}

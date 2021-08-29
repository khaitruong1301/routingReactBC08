import React from 'react'

export default function Films(props) {
    return (
        <div>
            <h3>Films</h3>
            <button className="btn btn-outline-primary" onClick={()=>{
                props.history.push('/admin/addfilms')
            }}>Thêm phim</button>
        </div>
    )
}





import React from 'react'

export default function Detail(props) {


    console.log(props)

    return (
        <div>
            Tham số :{props.match.params.id}
        </div>
    )
}

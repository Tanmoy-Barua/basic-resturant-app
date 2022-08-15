import React from 'react'
import dateFormat from 'dateformat'

const LoadComments = (props) => {
    // console.log(props.comments);
        return (
            props.comments.map(item => {
                // console.log(item)
                return (
                    <div key={item.id}>
                        <h5>{item.author}</h5>
                        <span>{dateFormat(item.date, "isoDateTime")}</span>
                        <p>{item.comment}</p>
                    </div>
                )
            })
        )

}

export default LoadComments
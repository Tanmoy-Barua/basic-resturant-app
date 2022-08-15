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
                        <p>{dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                        <p>{item.comment}</p>
                    </div>
                )
            })
        )

}

export default LoadComments
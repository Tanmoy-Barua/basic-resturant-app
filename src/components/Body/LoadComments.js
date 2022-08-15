import React from 'react'

const LoadComments = (props) => {
    console.log(props.comments);
        return (
            props.comments.map(item => {
                console.log(item)
                return (
                    <div key={item.id}>
                        <h5>{item.author}</h5>
                        <p>{item.date}</p>
                    </div>
                )
            })
        )

}

export default LoadComments
import React, {useState} from 'react'
import { connect } from 'react-redux'

const CommentForm = (props) => {

  const [author, setAuthor] = useState([]);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState([]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(author, rating, comment);

    props.dispatch({
        type: "ADDCOMMENT",
        payload: {
            dishid: props.dishID, 
            author: author, 
            rating: rating, 
            comment: comment
        }
    })

    setAuthor('')
    setRating('')
    setComment('')
  }
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto">
            <h3 className="h1 text-center"> Send us a message</h3>
            {/* {
              isFeedbackSubmit &&
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <i className="fa-solid fa-circle-check"></i><strong> Success!</strong> Sended your Feedback.
                <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=> setIsFeedbackSubmit(false)} aria-label="Close" />
              </div>
            } */}
            <form className="row g-3 my-3" onSubmit={handleOnSubmit}>
              <div className="col-md-12">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="inputName" onChange={(event)=> setAuthor(event.target.value)} value={author}/>
              </div>
              <div className="col-md-12">
              <select className="form-select" aria-label="Default select example"  value={rating} onChange={(event) => setRating(event.target.value)}>
                  <option defaultValue="">Open this select menu</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                  <option value={4}>Four</option>
                  <option value={5}>Five</option>
              </select>
                {/* <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail" value={rating} onChange={(event)=> setRating(event.target.value)} /> */}
              </div>

              <div className="col-12">
                <label htmlFor="inputMessage" className="form-label">
                  Message
                </label>
                <textarea name="inputMessage" id="inputMessage" cols="30" rows="10" className="form-control" value={comment} onChange={(event) => setComment(event.target.value)}></textarea>
              </div>
              <div className="col-12">
                <input type="submit" className="btn btn-secondary" value="Comment" />
              </div>
            </form>

            </div>
          </div>
        </div>
    </>
  )
}

export default connect()(CommentForm)
import React, {useState} from 'react'
import Header from '../Header/Header'

const Contact = () => {
  document.title = "Contact | Resturant";
  // const [details, setDetails] = useState({name: "", email: "", subject:"", message: "", checkbox: false});
 const [name, setName] = useState([]);
 const [email, setEmail] = useState([]);
 const [subject, setSubject] = useState([]);
 const [message, setMessage] = useState([]);
 const [checkbox, setCheckbox] = useState(false);
 const [isFeedbackSubmit, setIsFeedbackSubmit] = useState(false);

 

 const handleOnSubmit = (event) => {
   event.preventDefault();

   console.log(name, email, subject, message,checkbox);
  
   setIsFeedbackSubmit(true)
  
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setCheckbox(false);
  }



  return (
    <>
        <Header/>

        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto">
            <h3 className="h1 text-center"> Send us a message</h3>
            {
              isFeedbackSubmit &&
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <i className="fa-solid fa-circle-check"></i><strong> Success!</strong> Sended your Feedback.
                <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=> setIsFeedbackSubmit(false)} aria-label="Close" />
              </div>
            }
            <form className="row g-3 my-3" onSubmit={handleOnSubmit}>
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="inputName" onChange={(event)=> setName(event.target.value)} value={name}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail" value={email} onChange={(event)=> setEmail(event.target.value)} />
              </div>
              <div className="col-12">
                <label htmlFor="inputSubject" className="form-label">
                  Subject
                </label>
                <input type="text" className="form-control" id="inputSubject"  value={subject} onChange={(event) => setSubject(event.target.value)} />
              </div>

              <div className="col-12">
                <label htmlFor="inputMessage" className="form-label">
                  Message
                </label>
                <textarea name="inputMessage" id="inputMessage" cols="30" rows="10" className="form-control" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" checked={checkbox} onChange={(event) => setCheckbox(event.target.checked)}/>
                  <label className="form-check-label" htmlFor="gridCheck">  
                    Agree with our privacy & policy
                  </label>
                </div>
              </div>
              <div className="col-12">
                <input type="submit" className="btn btn-secondary" value="Send Me" />
              </div>
            </form>

            </div>
          </div>
        </div>
    </>
  )
}

export default Contact
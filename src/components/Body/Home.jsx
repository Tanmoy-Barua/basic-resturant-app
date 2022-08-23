import React from 'react'
import Header from '../Header/Header'

const Home = (props) => {
  document.title = "Home | Resturant";
  
  // console.log(props);
  return (
    <>
    <Header />
    <div>Home</div>
    </>
  )
}

export default Home
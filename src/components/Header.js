import React from 'react'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// const Space = styled.p`
//   margin-top:40px;
//   margin-bottom:20px
// `;

function Header() {
  return (
    <div class="center">
      <img src="https://res.cloudinary.com/april-skrine/image/upload/v1645034174/newlogo_1_wjqh1k.jpg"/>
      <div>
        <Link to={`/add-review`}><img src="https://res.cloudinary.com/april-skrine/image/upload/v1645035924/buttonback__1_-removebg-preview_ad3zbu.png" alt="add-review"/></Link> 
      </div> 
    </div>
  )
}

export default Header
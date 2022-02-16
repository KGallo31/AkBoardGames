import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Space = styled.p`
  margin-top:40px;
  margin-bottom:20px
`;

function Header() {
  return (
    <div class="ui center aligned container">
        <Space></Space>
        <Space></Space>
        <h1>
          <img src="https://res.cloudinary.com/april-skrine/image/upload/v1645030245/logohat_kogjen.jpg" alt="logo"/>
          <Link to={`/add-review`}><img src="https://res.cloudinary.com/april-skrine/image/upload/v1645025179/buttonwombat_btzbre.png" alt="add-review"/></Link>
        </h1>
    </div>
  )
}

export default Header
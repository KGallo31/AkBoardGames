import React from 'react'
import Filter from './Filter'
import styled from 'styled-components'

const Space = styled.p`
  margin-top:40px;
  margin-bottom:20px
`;

function Header({changeSearchBy,changeSearchByNumPlayer}) {
  return (
    <div class="ui center aligned container">
        <h1>
          <img src='https://res.cloudinary.com/april-skrine/image/upload/v1644941070/aklogo.jpg'/>
        </h1>
        <Filter changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer}/>
        <Space></Space>
        <hr/>
        <Space></Space>
        <Space></Space>

    </div>
  )
}

export default Header
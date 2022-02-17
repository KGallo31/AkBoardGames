import { React, useState } from 'react'
import styled from 'styled-components'

const Space = styled.p`
  margin-top:40px;
  margin-bottom:20px
`;

function AddReview({addReview}) {
    
    const [reviewName,setReviewName] = useState('')
    const [reviewGame,setReviewGame] = useState('')
    const [reviewRating,setReviewRating] = useState('')
    const [userReview,setUserReview] = useState('')
  
  
    const onSubmit = (e) => {
      e.preventDefault()
      const newReview = {
        name:reviewName,
        game:reviewGame,
        rating:reviewRating,
        review:userReview
      }
      addReview(newReview)
      e.target.reset()
    }

    return(
      <div className="ui center aligned container">
        <div className="center-div">
          <form onSubmit={onSubmit} className="ui form">
              <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>NAME</label>
                <input onChange={(e) => setReviewName(e.target.value)} type="text" name="name" placeholder="Name"/>
              </div>
              <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>GAME</label>
                <input onChange={(e) => setReviewGame(e.target.value)}  type="text" name="game-name" placeholder="Game"/>
              </div>
              <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>RATING OUT OF 5</label>
                <input onChange={(e) => setReviewRating(e.target.value)} type="number" name="rating" placeholder="Rating"/>
              </div>
              <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>REVIEW</label>
                <input onChange={(e) => setUserReview(e.target.value)} type="text" name="review" placeholder="Review"/>
              </div>
            <button style={{border: '5px solid #C1BBDA', background:'white', color:'black'}} className="ui button" type="submit">Submit</button>
          </form>
        <Space></Space>
        <Space></Space>
        </div>
      </div>
    )
}

export default AddReview
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
          <form onSubmit={onSubmit} className="ui form">
              <div className="field">
                <label>Name</label>
                <input onChange={(e) => setReviewName(e.target.value)} type="text" name="name" placeholder="Name"/>
              </div>
              <div className="field">
                <label>Game</label>
                <input onChange={(e) => setReviewGame(e.target.value)}  type="text" name="game-name" placeholder="Game"/>
              </div>
              <div className="field">
                <label>Rating</label>
                <input onChange={(e) => setReviewRating(e.target.value)} type="text" name="rating" placeholder="Rating"/>
              </div>
              <div className="field">
                <label>Review</label>
                <input onChange={(e) => setUserReview(e.target.value)} type="text" name="review" placeholder="Review"/>
              </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        <Space></Space>
        <Space></Space>
      </div>
    )
}

export default AddReview
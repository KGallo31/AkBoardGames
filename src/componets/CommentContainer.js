import React,{ useState } from 'react'
import Comment from './Comment'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

const Space = styled.p`
  margin-top:40px;
  margin-bottom:20px
`;

function CommentContainer({comments,addReview}) {

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
}


  return (
    <div>
      <div>
      <form onSubmit={onSubmit} class="ui form">
        <div class="field">
          <label>Name</label>
          <input onChange={(e) => setReviewName(e.target.value)} type="text" name="name" placeholder="Name"/>
        </div>
        <div class="field">
          <label>Game</label>
          <input onChange={(e) => setReviewGame(e.target.value)}  type="text" name="game-name" placeholder="Game"/>
        </div>
        <div class="field">
          <label>Rating</label>
          <input onChange={(e) => setReviewRating(e.target.value)} type="text" name="rating" placeholder="Rating"/>
        </div>
        <div class="field">
          <label>Review</label>
          <input onChange={(e) => setUserReview(e.target.value)} type="text" name="review" placeholder="Review"/>
        </div>
      <button class="ui button" type="submit">Submit</button>
      </form>
      </div>
      <Space></Space>
      <Space></Space>
        <Card.Group itemsPerRow={4}>
          {comments.map((comment) => <Comment comment={comment} key={comment.id}/>)}
        </Card.Group>
    </div>
  )
}

export default CommentContainer
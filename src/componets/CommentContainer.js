import React from 'react'
import Comment from './Comment'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

const Space = styled.p`
  margin-top:40px;
  margin-bottom:20px
`;

function CommentContainer({comments}) {
  return (
    <div>
      <div>
      <form class="ui form">
        <div class="field">
          <label>Name</label>
          <input type="text" name="first-name" placeholder="Name"/>
        </div>
        <div class="field">
          <label>Game</label>
          <input type="text" name="game-name" placeholder="Game"/>
        </div>
        <div class="field">
          <label>Rating</label>
          <input type="text" name="last-name" placeholder="Rating"/>
        </div>
        <div class="field">
          <label>Review</label>
          <input type="text" name="review" placeholder="Review"/>
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
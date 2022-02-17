import React from 'react'
import Review from './Review'
import { Card } from 'semantic-ui-react'


function ReviewContainer({filteredReviews, deleteReview, allReviews, reviewState}) {

  return (
    <div className="ui center aligned container">
      <h1 style={{color: '#C1BBDA'}}>{reviewState ? "- ALL REVIEWS -" : "- SELECTED GAME REVIEWS -"}</h1> 
        <div className="center-div">
          <Card.Group itemsPerRow={3}>
            {reviewState ?
              allReviews.map((review) => <Review deleteReview={deleteReview} review={review} key={review.id}/>) :
              filteredReviews.map((review) => <Review deleteReview={deleteReview} review={review} key={review.id}/>)}
          </Card.Group>
        </div>
    </div>
  )
}

export default ReviewContainer
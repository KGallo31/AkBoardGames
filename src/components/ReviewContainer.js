import React from 'react'
import Review from './Review'
import { Card } from 'semantic-ui-react'


function ReviewContainer({reviews,deleteReview}) {


  return (
    <div className="ui center aligned container">
        <div className="center-div">
          <Card.Group itemsPerRow={3}>
            {reviews.map((review) => <Review deleteReview={deleteReview} review={review} key={review.id}/>)}
          </Card.Group>
        </div>
    </div>
  )
}

export default ReviewContainer
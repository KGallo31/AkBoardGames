import React from 'react'
import Review from './Review'
import { Card } from 'semantic-ui-react'


function ReviewContainer({reviews,deleteReview}) {


  return (
        <div>
          <Card.Group itemsPerRow={4}>
            {reviews.map((review) => <Review deleteReview={deleteReview} review={review} key={review.id}/>)}
          </Card.Group>
        </div>
  )
}

export default ReviewContainer
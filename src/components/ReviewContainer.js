import React from 'react'
import Review from './Review'
import { Card } from 'semantic-ui-react'


function ReviewContainer({reviews}) {


  return (
        <div>
          <Card.Group itemsPerRow={4}>
            {reviews.map((review) => <Review review={review} key={review.id}/>)}
          </Card.Group>
        </div>
  )
}

export default ReviewContainer
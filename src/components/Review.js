import React from 'react'
import { Card } from "semantic-ui-react";


function Review({review}) {

  const meta = `Reviewed ${review.game}`
  const extra = `${review.rating} out of 5`

  return (
    <div>
      <Card 
      // onClick={}
      header={review.name}
      meta={extra}
      extra={meta}
      description={review.review}
      />
    </div>
  )
}

export default Review
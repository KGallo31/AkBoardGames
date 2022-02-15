import React from 'react'
import { Card } from "semantic-ui-react";


function Comment({comment}) {

  const meta = `Reviewed ${comment.game}`
  const extra = `${comment.rating} out of 5`

  return (
    <div>
      <Card 
      // onClick={}
      header={comment.name}
      meta={extra}
      extra={meta}
      description={comment.review}
      />
    </div>
  )
}

export default Comment
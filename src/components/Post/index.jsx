import React from 'react'
import { ActionButton, Likes, PostActions, PostHeader, PostImage, PostWrapper, CaptionWrapper, Comments, Shares, Caption } from './style'

const Post = ({ user, name, imageUrl, likes, comments, shares, caption }) => {
  return (
   <PostWrapper>
     <PostHeader>
      <h3>{name}</h3>
      <ActionButton>⋮</ActionButton>
     </PostHeader>
     <PostImage src={imageUrl} alt='post'/>
     <CaptionWrapper>  
         <Caption>
          <span style={{ fontWeight: 'bold' }}>{user}:</span> {caption}
         </Caption>
     </CaptionWrapper>
     <PostActions>
       <ActionButton>❤️<Likes>{likes} likes</Likes> </ActionButton>
       <ActionButton>💬<Comments>{comments} comments</Comments></ActionButton>
       <ActionButton>🔁<Shares>{shares} shares</Shares></ActionButton>
     </PostActions>
   </PostWrapper>
   )
}

export { Post }
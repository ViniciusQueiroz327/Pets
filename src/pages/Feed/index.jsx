//import { Link } from "react-router-dom"

import React from 'react';

import { Stories } from '../../components/Stories';
//import { CreatePost } from '../../components/CreatePost'
import { Post } from '../../components/Post';

import { FeedWrapper } from './style';

import { posts } from '../../data/data';

const Feed = () => {
    return (<>
        <FeedWrapper>
            <Stories />
            {/*<CreatePost /> COMENTADO POR HORA -> IRÁ PARA OUTRA PÁGINA!*/}
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    name={post.name}
                    imageUrl={post.imageUrl}
                    user={post.user}
                    caption={post.caption}
                    likes={post.likes}
                    comments={post.comments}
                    shares={post.shares}
                />
            ))}
        </FeedWrapper>
    </>)
}

export { Feed }
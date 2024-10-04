//import { Link } from "react-router-dom"

import React, { useState, useEffect, useCallback} from 'react';

import { Stories } from '../../components/Stories';
//import { CreatePost } from '../../components/CreatePost'
import { Post } from '../../components/Post';

import { FeedWrapper } from './style';

import { posts } from '../../data/data';
import { FixedMenu } from '../../components/FixedMenu';

const Feed = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const handleScroll = useCallback(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }, [lastScrollY]);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);
    
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
        <FixedMenu isVisible={isVisible}></FixedMenu>
    </>)
}

export { Feed }
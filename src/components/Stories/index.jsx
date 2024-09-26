import React from "react";

import { StoryWrapper, StoryItem, StoryImage, StoryUsername } from './style'

import { stories } from '../../data/data'

const Stories = () => {
    return (
        <StoryWrapper>
            {stories.map((story) => ( 
                <StoryItem key={story.id}>
                    <StoryImage src={story.imageUrl} alt={story.user}/>
                    <StoryUsername>{story.user}</StoryUsername>
                </StoryItem>
            ))}
        </StoryWrapper>
    )
}

export  { Stories }
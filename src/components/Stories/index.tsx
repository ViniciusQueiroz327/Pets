import React from "react";

import { StoryWrapper, StoryItem, StoryImage, StoryUsername } from './style'

import { stories } from '../../data/data'

const Stories = () => {
    return (
        <StoryWrapper>
            {stories.map((story, index) => ( 
                <StoryItem key={story.id} style={{ marginRight: index === stories.length - 1 ? '0' : '15px' }}>
                    <StoryImage src={story.imageUrl} alt={story.user} draggable="false"/>
                    <StoryUsername>{story.user}</StoryUsername>
                </StoryItem>
            ))}
        </StoryWrapper>
    )
}

export  { Stories }
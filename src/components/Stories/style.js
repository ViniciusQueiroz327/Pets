import styled from 'styled-components';

export const StoryWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #AEA6A6;
  scroll-behavior: smooth;

  /* For Chrome, Safari and Webkit based browsers */
  ::-webkit-scrollbar {
    display: none;
  }
  
  /* For Firefox */
  scrollbar-width: none;

  /* For Edge and IE */
  -ms-overflow-style: none;
`;

export const StoryItem = styled.div`
  text-align: center;
`;

export const StoryImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 2px solid #F5A405;
`;

export const StoryUsername = styled.span`
  display: block;
  margin-top: 3px;
  font-size: .7rem;
  color: #AEA6A6;
`;

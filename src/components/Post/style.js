import styled from 'styled-components';

export const PostWrapper = styled.div`
  border: 1px solid #AEA6A6;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    font-size: 1rem;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
`;

export const PostActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: .9rem;
  padding: 0 7px;
`;

export const CaptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: row;
  padding: 0;
  margin-bottom: 5px;
`;

export const User = styled.p`
  font-weight: 700;
  font-size: .7rem;  
`;

export const Caption = styled.p`
  margin-left: 5px;
  font-size: .7rem;  
`;

export const Likes = styled.p`
  font-weight: bold;
`;

export const Comments = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Shares = styled.p`
  font-weight: bold;
  margin: 0;
`;
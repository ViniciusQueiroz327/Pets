import styled from 'styled-components';

export const PostWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const Likes = styled.p`
  font-weight: bold;
`;

export const Comments = styled.p`
  color: gray;
`;

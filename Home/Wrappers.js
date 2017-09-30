import styled from 'styled-components';

export const PostBox = styled.div`
  border: 2px solid #000;
  min-width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #bdbdbd;
    > a {
    color:white;
    }
  }
`

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`

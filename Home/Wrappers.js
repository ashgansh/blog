import styled from 'styled-components';

const computeDirection = (direction) => {
  switch(direction) {
    case 'right': return 'left';
    case 'left': return 'right';
    default: return 'left';
  }
}

export const PostBox = styled.div`
  border: 2px solid #000;
  min-width: 500px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em;
`


export const Arrow = styled.div`
  width: 0; 
  height: 0; 
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-${props => computeDirection(props.direction)}: 30px solid #D94948;
`

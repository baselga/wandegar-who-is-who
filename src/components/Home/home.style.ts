import styled from "styled-components";


export const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 20px;
  max-width: 600px;  
  margin: 0 auto;    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const Logo = styled.div`
  overflow: hidden;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.default};
  border: 1px solid #333;
  width: 280px;  
  aspect-ratio: 1 / 1;
  & > img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadows.default};
`

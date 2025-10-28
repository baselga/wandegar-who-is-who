import styled, { css } from "styled-components";

export const Root = styled.div<{ $isDiscarded: boolean }>`
  --front-rotate: 0deg;
  --back-rotate: 180deg;

  ${({ $isDiscarded }) =>
    $isDiscarded &&
    css`
      --front-rotate: -180deg;
      --back-rotate: 0deg;
    `}

  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  perspective: 150em;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  cursor: pointer;
  backface-visibility: hidden;
  transition: all 0.6s ease;
`;

export const Front = styled(Card)`
  display: grid;
  grid-template-rows: auto 20%;
  padding: 8px 8px 0 8px;
  transform: rotateY(var(--front-rotate));  
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FrontImg = styled.img`
  display: block;  
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 1;
  transition: all 300ms;
  border-radius: 4px;
  overflow: hidden;
`;

export const FrontName = styled.div`  
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: bold;
  text-align: center;        
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  transform: rotateY(var(--back-rotate));
`;

export const BackImg = styled.img`
  display: block;
  width: 50%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
`;

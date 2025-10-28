import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0;
  margin: 0 auto;
  height: 100dvh;
  
  display: grid;  
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;  
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 16px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;    
  text-shadow: ${({ theme }) => theme.shadows.default};
`

export const Logo = styled.div`
  overflow: hidden;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.default};
  border: 1px solid #333;
  width: 48px;  
  aspect-ratio: 1 / 1;
  & > img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: 1fr;
  gap: 16px;
  padding: 16px;
  overflow: auto;
`

export const Footer = styled.div`
  padding: 12px 0px 8px 0px;
  display: flex;
  justify-content: center;
`

export const Modal = styled.dialog`
  border: none;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: 12px 16px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0; 

  &::backdrop {
    background: hsl(0deg 0% 0% / 0.5);
  }
`

export const ModalInfo = styled.h2`
  display: flex;
  min-height: 120px;
  justify-content: center;
  align-items: center;  
`

export const ModalToolbar = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;
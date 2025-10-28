import styled from "styled-components";

export const Button = styled.button`
  /* padding: 12px 20px;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 8px;
  text-align: center;
  min-width: 120px;
  box-shadow: ${(props) => props.theme.shadows.default}; */


  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
    color: purple;
  }
  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  &:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`

export const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

`;

export const Edge = styled.span`
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      ${({theme}) => theme.colors.primaryDark} 0%,
      ${({theme}) => theme.colors.primaryDark} 8%,
      ${({theme}) => theme.colors.primaryDark} 92%,
      ${({theme}) => theme.colors.primaryDark} 100%
    );
`;

export const Front = styled.span`
   display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white;
    background: ${({theme}) => theme.colors.primary};
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;
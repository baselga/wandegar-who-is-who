import type React from "react"
import * as S from "./Button.styles"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props

  return (
    <S.Button {...rest}>
      <S.Shadow className="shadow" />
      <S.Edge className="edge" />
      <S.Front className="front">
        {children}
      </S.Front>
    </S.Button>
  )
}
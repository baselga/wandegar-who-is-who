import { useAppStore } from "../../store/app.store";
import { Button } from "../Button/Button";
import * as S from "./home.style";

export const Home = () => {
  const starGame = useAppStore((state) => state.startGame)
  return (
    <S.Root>
      <S.Logo>
        <img src="/logo.jpeg" alt="Logo Wandegar" />
      </S.Logo>
      <S.Title>¿Quién es quién?</S.Title>
      <Button onClick={starGame}>Jugar</Button>
    </S.Root>
  );
}
import { useAppStore } from "../../store/app.store";
import { persons } from "../../constants/persons";
import { Button } from "../Button/Button";
import { PersonCard } from "../PersonCard/PersonCard";
import * as S from "./GameView.styled";
import { useRef } from "react";

export const GameView = () => {
  const resetGame = useAppStore((state) => state.resetGame);
  const ref = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (ref.current) {
      ref.current.showModal();
    }
  }

  return (
    <>
      <S.Root>
        <S.TopBar>
          <S.Logo>
            <img src="/logo.jpeg" alt="Logo Wandegar" />
          </S.Logo>
          <S.Title>¿Quién es quién?</S.Title>
        </S.TopBar>      
          <S.Content>
            {persons.map((person) => (
              <div key={person.id}>
                <PersonCard person={person} />
              </div>
            ))}
          </S.Content>      
        <S.Footer>
          <Button onClick={openModal}>Reiniciar juego</Button>
        </S.Footer>
      </S.Root>
      <S.Modal ref={ref}>
        <form method="dialog">
          <S.ModalInfo>
            ¿Estas seguro que quieres reiniciar el juego?
          </S.ModalInfo>
          <S.ModalToolbar>
            <Button type="submit">Cancelar</Button>
            <Button type="submit" onClick={resetGame}>Reiniciar</Button>          
          </S.ModalToolbar>
        </form>
      </S.Modal>    
    </>
  );
};

import type { Person } from "../../constants/persons";
import { useAppStore } from "../../store/app.store";
import * as S from "./PersonCard.styled";

export const PersonCard = ({ person }: { person: Person }) => {
  const personsDiscarded = useAppStore((state) => state.personsDiscarded)
  const togglePerson = useAppStore((state) => state.togglePerson)

  const isDiscarded = personsDiscarded.includes(person.id);

  return (
    <S.Root $isDiscarded={isDiscarded} onClick={() => togglePerson(person.id)}>
      <S.Front>
        <S.FrontImg src={person.imageSrc} alt={person.name} />
        <S.FrontName>{person.name}</S.FrontName>
      </S.Front>
      <S.Back>
        <S.BackImg src="/logo.jpeg" alt="Card Back" />
      </S.Back>
    </S.Root>
  );
};

import * as S from "./style";

export const Header: React.FC = () => {
  return (
    <S.Headers id="header">
      <S.LinksWrapper>
        <S.Links>Home</S.Links>
        <S.Links>Matrículas</S.Links>
        <S.Links>Calendário</S.Links>
        <S.Links>Preços</S.Links>
        <S.Links>Sobre</S.Links>
      </S.LinksWrapper>
    </S.Headers>
  );
};

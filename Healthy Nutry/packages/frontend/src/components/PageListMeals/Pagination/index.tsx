import * as S from "./styles";

type paginateProps = {
  limit: number;
  total: number;
  offset: number;
  setOffset: (num: number) => void;
  setCurrentPage: (num: number) => void;
};

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({
  limit,
  total,
  offset,
  setOffset,
  setCurrentPage,
}: paginateProps) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page: number) {
    setCurrentPage(page);
  }
  function onPaginationChange(page: number) {
    setOffset((page - 1) * limit);
  }

  return (
    <S.Container>
      <S.ButtonPrev
        onClick={() => onPaginationChange(current - 1)}
        disabled={current === 1}
      >
        Anterior
      </S.ButtonPrev>

      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page, newIndex) => (
          <S.ButtonsPages key={page} onClick={() => onPageChange(newIndex)}>
            {page}
          </S.ButtonsPages>
        ))}

      <S.ButtonNext
        onClick={() => onPaginationChange(current + 1)}
        disabled={current === pages}
      >
        Próxima
      </S.ButtonNext>
    </S.Container>
  );
};

export default Pagination;

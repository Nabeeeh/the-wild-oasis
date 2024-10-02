import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active === "active" &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const Filter = ({ filterField, options, searchParamsToReset }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    searchParamsToReset?.map((param) =>
      searchParams.set(param.name, param.value)
    );
    setSearchParams(searchParams);

    // searchParams.set(filterField, value);
    // setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          active={activeFilter === option.value ? "active" : "default"}
          disabled={activeFilter === option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};

export default Filter;
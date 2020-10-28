import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: scroll;
  background: white;
  border-radius: 4px;
  border: 1px solid rgb(236, 240, 247);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 11px 11px 13px;
  max-width: 232px;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #1494f4;
  }
`;

const SearchContainer = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  color: rgb(155, 170, 200);
`;

const Search = styled.input`
  background: rgb(250, 251, 252);
  border-radius: 4px;
  font-weight: 500;
  color: rgb(155, 170, 200);
  padding: 8px 30px;
  border: none;
  font-size: 16px;
  margin-bottom: 15px;
  max-width: 100%;

  ::placeholder {
    font-weight: 500;
    color: rgb(155, 170, 200);
    font-size: 16px;
  }
`;

const SelectButton = styled.button`
  color: rgb(155, 170, 200);
  font-size: 14px;
  font-weight: 500;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  padding: 0;
  margin: 0 0 15px;
`;

const ButtonLabel = styled.span`
  margin-left: 4px;
`;

const FilterButton = styled.button`
  color: white;
  background: rgb(20, 148, 244);
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 15px;
`;

export {
  Container,
  SearchContainer,
  IconContainer,
  Search,
  SelectButton,
  ButtonLabel,
  FilterButton,
};

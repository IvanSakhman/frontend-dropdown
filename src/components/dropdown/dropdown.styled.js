import styled from "styled-components";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const Button = styled.button`
  background: rgb(255, 255, 255);
  border-radius: 5px;
  border: 2px solid rgb(20, 148, 244);
  box-shadow: 0 1px 1px 0 rgb(237, 241, 250);
  height: 56px;
  width: 232px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 9px 17px 9px 15px;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  color: rgba(6, 43, 117, 0.2);
  font-size: 16px;
`;

const ButtonInfo = styled.div`
  margin-left: 15px;
  text-align: left;
`;

const ButtonLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const ButtonTitle = styled.h2`
  color: rgb(6, 43, 117);
  font-size: 18px;
  margin: 0;
`;

const Arrow = styled.div``;

export {
  DropdownContainer,
  Button,
  ButtonContent,
  ButtonInfo,
  ButtonLabel,
  ButtonTitle,
  Arrow,
};

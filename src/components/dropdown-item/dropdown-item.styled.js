import styled from "styled-components";

const Item = styled.label`
  display: flex;
  margin-bottom: 10px;
  color: ${({ isSelected }) =>
  isSelected ? "rgb(22, 149, 244)" : "rgb(6, 43, 117)"};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding-left: 34px;
  line-height: 24px;
  word-break: break-all;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    border-radius: 4px;
    border: 2px solid rgb(238, 242, 246);
    background: rgb(250, 251, 252);
  }

  input:checked ~ .checkmark {
    background: rgb(20, 148, 244);
    border: 2px solid rgb(20, 148, 244);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 50%;
    top: 50%;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export { Item };

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin: 0;
  padding: 20px;
`;

export const Info = styled.span`
  font-size: 22px;
  margin: 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: black;
    bottom: 0;
    opacity: 0.5;
    transition: all .2s;
  }

  &:focus, &:hover {
    &:after {
      height: 2px;
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  padding: 6px 0 7px;
  outline: none;
  width: 200px;
  transition: border .2s;
`;

export const ErrorLabel = styled.span`
  width: 200px;
  font-size: 14px;
  color: red;
`;
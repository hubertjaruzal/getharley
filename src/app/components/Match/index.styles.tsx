import styled from "styled-components";
import { Color } from "../../../theme";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

interface HeaderProps {
  progress: number;
}

export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 10px 0;
  position: relative;
  background: ${Color.POT_POURRI};

  &:after {
    content: '';
    position: absolute;
    width: ${props => props.progress}%;
    height: 5px;
    background: ${Color.BRANDY_ROSE};
    bottom: 0;
    transition: width 1s;
  }
`;

export const Logo = styled.img`
  height: 30px;
  width: auto;
  margin: 5px 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: calc(100vh - 60px);
  overflow: auto;
`;

export const Button = styled.button`
  min-width: 250px;
  padding: 15px 20px;
  background: ${Color.ROMANTIC};
  color: ${Color.ETERNITY};
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background .2s;
  margin: 15px 0;

  &:hover {
    background: ${Color.POT_POURRI};
  }

  &:disabled {
    background: grey;
    opacity: 0.2;
  }
`;
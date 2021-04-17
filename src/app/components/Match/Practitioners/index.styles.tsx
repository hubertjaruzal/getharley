import styled from "styled-components";
import { Color } from "../../../../theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  margin: 0;
  padding: 20px;
`;

export const Info = styled.span`
  font-size: 22px;
  margin: 0;
`;

export const Slots = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 710px;
  width: 100%;
`;

export const PractitionerInfo = styled.div`
  margin: 5px 10px;
`;

export const PractitionerLabel = styled.span`
  margin: 0 5px 0 0;
`;

export const PractitionerName = styled.span`
  font-weight: 900;
`;

export const DateList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const DateListItem = styled.li`
  padding: 10px;
`;

export const DateText = styled.span`
  margin: 5px 0;
  display: flex;
  font-weight: 900;
`;

export const HoursList = styled.ul``;

export const HoursListItem = styled.li`
  padding: 0;
  margin: 0;
`;

interface HoursListItemButtonProps {
  isSelected: boolean;
}

export const HoursListItemButton = styled.button<HoursListItemButtonProps>`
  background: ${props => props.isSelected ? Color.ROMANTIC : "white"};
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0;
  border: 2px solid ${Color.ROMANTIC};
  cursor: pointer;
  outline: none;
`;

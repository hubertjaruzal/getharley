import React, { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../../models/redux";
import { getSpecialities } from "../../../redux/actions/specialities";
import { FormModel } from "../index.utils";
import {
  Container,
  Info,
  List,
  ListItem,
  Label,
  Input,
  CheckboxText,
} from "./index.styles";

interface Props {
  values: FormModel;
  setValue: UseFormSetValue<FormModel>;
}

const Specialities = ({ values, setValue }: Props) => {
  const specialities = useSelector((state: State) => state.specialities);
  const dispatch = useDispatch();
  const { speciality } = values;

  useEffect(() => {
    dispatch(getSpecialities());
  }, []);

  return (
    <Container>
      <Info>Select one category</Info>
      <List>
        {specialities?.list?.map(item => (
          <ListItem key={item.speciality_id}>
            <Label>
              <Input
                type="radio"
                name="speciality"
                value={item.speciality_id}
                checked={item.speciality_id === speciality.id}
                onChange={() => {
                  setValue(
                    "speciality",
                    {
                      id: item.speciality_id,
                      name: item.name,
                    },
                  );
                }}
              ></Input>
              <CheckboxText>{item.name}</CheckboxText>
            </Label>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Specialities;

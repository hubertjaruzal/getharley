import React from "react";
import { DeepMap, FieldError, LiteralUnion, UseFormRegister } from "react-hook-form";
import { FormModel } from "../index.utils";
import {
  Container,
  Info,
  InputWrapper,
  Label,
  Input,
  ErrorLabel,
} from "./index.styles";

interface Props {
  values: FormModel;
  register: UseFormRegister<FormModel>;
  errors: DeepMap<FormModel, FieldError>;
}

const PatientInfo = ({ register, values, errors }: Props) => {
  const { patient } = values;
  const patientErrors = errors.patient;

  const getErrorMessage = (type: LiteralUnion<"required" | "maxLength" | "minLength" | "pattern", string>) => {
    if (type === "required") return "Value cannot be empty";
    if (type === "minLength") return "Value is too short";
    if (type === "maxLength") return "Value is too long";
    return "Value has wrong format";
  };

  return (
    <Container>
      <Info>Enter personal information</Info>
      <InputWrapper>
        <Label htmlFor="firstName">First name</Label>
        <Input
          {...register("patient.firstName", { required: true })}
          type="text"
          id="firstName"
          value={patient.firstName}
        ></Input>
      </InputWrapper>
      {patientErrors?.firstName && <ErrorLabel>{getErrorMessage(patientErrors?.firstName.type)}</ErrorLabel>}
      <InputWrapper>
        <Label htmlFor="lastName">Last name</Label>
        <Input
          {...register("patient.lastName", { required: true })}
          type="text"
          id="lastName"
          value={patient.lastName}
        ></Input>
      </InputWrapper>
      {patientErrors?.lastName && <ErrorLabel>{getErrorMessage(patientErrors?.lastName.type)}</ErrorLabel>}
      <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("patient.email", { required: true, pattern: /^\S+@\S+$/i })}
          type="text"
          id="email"
          value={patient.email}
        ></Input>
      </InputWrapper>
      {patientErrors?.email && <ErrorLabel>{getErrorMessage(patientErrors?.email.type)}</ErrorLabel>}
      <InputWrapper>
        <Label htmlFor="contactNumber">Contact number</Label>
        <Input
          {...register("patient.contactNumber", { required: true, minLength: 6, maxLength: 12 })}
          type="tel"
          id="contactNumber"
          value={patient.contactNumber}
        ></Input>
      </InputWrapper>
      {patientErrors?.contactNumber && <ErrorLabel>{getErrorMessage(patientErrors?.contactNumber.type)}</ErrorLabel>}
    </Container>
  );
};

export default PatientInfo;

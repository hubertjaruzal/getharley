import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Specialities from "./Specialities";
import DateTimePicker from "./DateTimePicker";
import Practitioners from "./Practitioners";
import PatientInfo from "./PatientInfo";
import Summary from "./Summary";
import logo from "../../../assets/images/logo.png";
import { DEFAULT_VALUES } from "./index.utils";
import {
  Container,
  Header,
  Logo,
  Form,
  Button,
} from "./index.styles";

const Match = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, control, getValues, watch, setValue, formState } = useForm({ defaultValues: DEFAULT_VALUES });
  watch();
  const values = getValues();

  const stepEquals = (value: number) => step === value;

  const isSubmitDisabled = () => {
    const { speciality, dateTime, selectedPractitioner, selectedSlot, patient } = values;
    if (stepEquals(1) && !speciality?.id) return true;
    if (stepEquals(2) && !dateTime) return true;
    if (
      stepEquals(3) &&
      !selectedPractitioner?.id &&
      (
        !selectedSlot?.startTime ||
        !selectedSlot?.endTime
      )
    ) return true;
    if (
      stepEquals(4) &&
      (
        !patient?.firstName ||
        !patient?.lastName ||
        !patient?.contactNumber ||
        !patient?.email
      )
    ) return true;
    return false;
  };

  const onSubmit = () => {
    if (stepEquals(4)) {
      setStep(0);
      return;
    }
    setStep(() => step + 1);
  };

  const goBack = () => setStep(() => step - 1);

  return (
    <Container>
      <Header progress={step === 1 ? 5 : (step / 4 * 100)}>
        <Logo src={logo} />
      </Header>
      {stepEquals(0) ?
        <Summary values={values} /> :
        <Form onSubmit={handleSubmit(onSubmit)}>
          {stepEquals(1) && <Specialities values={values} setValue={setValue} />}
          {stepEquals(2) && <DateTimePicker control={control} />}
          {stepEquals(3) && <Practitioners values={values} setValue={setValue} />}
          {stepEquals(4) && <PatientInfo values={values} register={register} errors={formState.errors} />}
          <Button type="submit" disabled={isSubmitDisabled()}>Continue</Button>
          {step > 1 && <Button type="button" onClick={goBack}>Back</Button>}
        </Form>
      }
    </Container>
  );
};

export default Match;

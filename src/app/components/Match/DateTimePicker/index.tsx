import React from "react";
import { Control, Controller } from "react-hook-form";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme } from "@material-ui/core";
import { Color } from "../../../../theme";
import { FormModel } from "../index.utils";
import {
  Container,
  Info,
  PickerWrapper,
} from "./index.styles";

interface Props {
  control: Control<FormModel>;
}

const DateTimePicker = ({ control }: Props) => {
  return (
    <Container>
      <Info>Select date and time that fits you best</Info>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider
          theme={createMuiTheme({
            palette: {
              primary: {
                main: Color.ROMANTIC,
              },
            },
          })}
        >
          <Controller
            control={control}
            name="dateTime"
            render={({ field: { onChange, value } }) => (
              <>
                <PickerWrapper>
                  <DatePicker value={value} onChange={onChange} minDate={new Date()} />
                </PickerWrapper>
                <PickerWrapper>
                  <TimePicker value={value} onChange={onChange} />
                </PickerWrapper>
              </>
            )}
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default DateTimePicker;

import React, { useState } from "react";
import {
  EMAIL_VALIDATION_REGEX,
  PASSWORD_VALIDATION_REGEX,
  PATH_VALIDATION_REGEX,
  PORT_VALIDATION_REGEX,
  SERVER_ADDRESS_VALIDATION_REGEX,
} from "../../utils/validationsRegex";
import { Field } from "../formField/Field";
import { AccountTypeDropdown } from "./components/AcountTypeDropdown";
import { FORM_TYPES } from "./types";
import { FieldRow, FieldsWrapper } from "./styles";
import { CheckboxField } from "../formField/components/CheckboxField";
import { FieldName } from "../formField/styles";
import { Button } from "@mui/material";
import { validateField } from "../../utils/validators";
import { logPayload } from "../../utils/funcs";
import { FormField } from "../formField/types";
import { log } from "console";

export const Form = () => {
  const [userName, setUserName] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [serverAddress, setServerAddress] = useState<string | undefined>();
  const [serverPath, setServerPath] = useState<string | undefined>();
  const [port, setPort] = useState<string | undefined>();
  const [isSSLChecked, setIsSSLChecked] = useState<boolean>(false);

  const [accountType, setAccountType] = useState<FORM_TYPES>(FORM_TYPES.MANUAL);

  const commonFormFields: FormField[] = [
    {
      name: "User Name",
      placeholder: "name@example.com",
      validationRegex: EMAIL_VALIDATION_REGEX,
      fieldType: "string",
      errorMessage: "Error in username",
      value: userName,
      setValue: setUserName,
      isRequired: true,
    },
    {
      name: "Password",
      placeholder: "Required",
      fieldType: "password",
      errorMessage: "Error in password",
      value: password,
      setValue: setPassword,
      validationRegex: PASSWORD_VALIDATION_REGEX,
      isRequired: true,
    },
    {
      name: "Server Address",
      placeholder: "example.com",
      validationRegex: SERVER_ADDRESS_VALIDATION_REGEX,
      fieldType: "string",
      errorMessage: "Error in server address",
      value: serverAddress,
      setValue: setServerAddress,
      isRequired: true,
    },
  ];

  const advancedAdditionalFormFields: FormField[] = [
    {
      name: "Server Path",
      placeholder: "/calenders/user/",
      validationRegex: PATH_VALIDATION_REGEX,
      fieldType: "string",
      errorMessage: "Error in server path",
      value: serverPath,
      setValue: setServerPath,
      isRequired: true,
    },
    {
      name: "Port",
      validationRegex: PORT_VALIDATION_REGEX,
      fieldType: "number",
      errorMessage: "Error in port",
      value: port,
      setValue: setPort,
      isRequired: true,
      customComponent: (
        <CheckboxField label="SSL" setIsChecked={setIsSSLChecked} />
      ),
    },
  ];

  const advancedFormFields: FormField[] = [
    ...commonFormFields,
    ...advancedAdditionalFormFields,
  ];

  const submitForm = (): void => {
    let errorMessage: string = "";

    const fieldsToValidate: FormField[] =
      accountType === FORM_TYPES.MANUAL ? commonFormFields : advancedFormFields;

    fieldsToValidate.forEach((field: FormField) => {
      errorMessage += validateField(field);
    });

    if (errorMessage != "") {
      alert(errorMessage);
    } else {
      console.info("Submitted successfully");
      logPayload(fieldsToValidate);
      alert("Submitted form!");
    }
  };

  return (
    <FieldsWrapper>
      <h1>Form</h1>
      <AccountTypeDropdown
        value={accountType}
        setValue={setAccountType}
      ></AccountTypeDropdown>

      {(accountType === FORM_TYPES.ADVANCED
        ? advancedFormFields
        : commonFormFields
      ).map((field) => (
        <FieldRow>
          <FieldName>{field.name}: </FieldName>
          <Field field={field} />
        </FieldRow>
      ))}
      <Button variant="outlined" onClick={submitForm}>
        Submit
      </Button>
    </FieldsWrapper>
  );
};

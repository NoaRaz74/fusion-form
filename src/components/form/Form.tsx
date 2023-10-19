import React, { useState } from "react";
import { FieldType, FieldValueType, FormField } from "../formField/types";
import {
  EMAIL_VALIDATION_REGEX,
  PATH_VALIDATION_REGEX,
  PORT_VALIDATION_REGEX,
  SERVER_ADDRESS_VALIDATION_REGEX,
} from "../../utils/validationsRegex";
import Field from "../formField/Field";

export const Form = () => {
  const [userName, setUserName] = useState<FieldValueType>();
  const [password, setPassword] = useState<FieldValueType>();
  const [serverAddress, setServerAddress] = useState<FieldValueType>();
  const [serverPath, setServerPath] = useState<FieldValueType>();
  const [port, setPort] = useState<FieldValueType>();

  const commonFormFields: FormField[] = [
    {
      name: "User Name",
      placeholder: "name@example.com",
      validationRegex: EMAIL_VALIDATION_REGEX,
      fieldType: "string",
      errorMessage: "error in name",
      value: userName,
      setValue: setUserName,
      isRequired: true,
    },
    {
      name: "Password",
      placeholder: "Required",
      fieldType: "password",
      errorMessage: "error in name",
      value: password,
      setValue: setPassword,
      isRequired: true,
    },
    {
      name: "Server Address",
      placeholder: "example.com",
      validationRegex: SERVER_ADDRESS_VALIDATION_REGEX,
      fieldType: "string",
      errorMessage: "error in name",
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
      errorMessage: "error in name",
      value: serverPath,
      setValue: setServerPath,
      isRequired: true,
    },
    {
      name: "Port",
      placeholder: "/calenders/user/",
      validationRegex: PORT_VALIDATION_REGEX,
      fieldType: "number",
      errorMessage: "error in name",
      value: port,
      setValue: setPort,
      isRequired: true,
    },
  ];

  const advancedFormFields: FormField[] = [
    ...commonFormFields,
    ...advancedAdditionalFormFields,
  ];

  return (
    <div>
      {commonFormFields.map((field) => (
        <Field field={field} />
      ))}
    </div>
  );
};

import React from "react";
import { FormField } from "./types";
import { FieldInput, FieldName } from "./styles";

interface FormFieldProps {
  field: FormField;
}

const Field = ({ field }: FormFieldProps) => {
  return (
    <div>
      <FieldName>{field.name}: </FieldName>
      <FieldInput placeholder={field.placeholder} />
    </div>
  );
};

export default Field;

import { FormField } from "../components/formField/types";

export const logPayload = (fieldsToValidate: FormField[]) => {
  console.log(
    fieldsToValidate.map((field: FormField) => {
      return {
        fieldName: field.name,
        fieldValue: field.value,
      };
    })
  );
};

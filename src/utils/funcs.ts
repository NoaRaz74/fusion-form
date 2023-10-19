import { FormField } from "../components/formField/types";

export const logPayload = (fieldsToValidate: FormField[]) => {
  console.log(
    fieldsToValidate.reduce((acc, currentValue: FormField) => {
      return {
        ...acc,
        fieldName: currentValue.name,
        fieldValue: currentValue.value,
      };
    }, {})
  );
};

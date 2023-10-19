import { FormField } from "../components/formField/types";

export const validateField = (field: FormField): string | void => {
  if (
    field.isRequired &&
    field.value &&
    field.validationRegex?.test(field.value)
  ) {
    console.info(field.name + " validated for submit");
    return "";
  } else {
    return field.errorMessage + "\n";
  }
};

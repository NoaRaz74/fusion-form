import { FormField } from "../components/formField/types";

export const validateField = (field: FormField): string | void => {
  if (field.isRequired || field.validationRegex) {
    if (field.value && field.validationRegex?.test(field.value)) {
      console.info(field.name + " validated for submit");
    } else {
      return field.errorMessage + "\n";
    }
  }
  return "";
};

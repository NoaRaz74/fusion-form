export type FieldType = "number" | "string" | "password";

export interface FormField {
  name: string;
  fieldType: FieldType;
  errorMessage: string;
  isRequired: boolean;
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  placeholder?: string;
  validationRegex?: RegExp;
  customComponent?: JSX.Element;
}

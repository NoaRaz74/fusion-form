export type FieldType = "number" | "string" | "password";
export type FieldValueType = number | string | undefined;

export interface FormField {
  name: string;
  fieldType: FieldType;
  errorMessage: string;
  isRequired: boolean;
  value: FieldValueType;
  setValue: React.Dispatch<React.SetStateAction<FieldValueType>>;
  placeholder?: string;
  validationRegex?: RegExp;
}

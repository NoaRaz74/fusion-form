import React, { useEffect, useState } from "react";
import { FormField } from "./types";
import {
  FieldInput,
  FieldInputWithCustom,
  FieldsWrapper,
  FlexBox,
} from "./styles";

interface FormFieldProps {
  field: FormField;
}

export const Field = ({ field }: FormFieldProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (field.isRequired) {
      if (
        field.value &&
        field.validationRegex &&
        !field.validationRegex.test(field.value)
      ) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  }, [field.value]);

  return (
    <FieldsWrapper>
      <span>
        {field.customComponent ? (
          <FlexBox>
            {
              <FieldInputWithCustom
                error={isError}
                helperText={isError && field.errorMessage}
                placeholder={field.placeholder}
                onChange={(event) => field.setValue(event.target.value)}
                type={field.fieldType}
              />
            }
            {field.customComponent}
          </FlexBox>
        ) : (
          <FieldInput
            error={isError}
            helperText={isError && field.errorMessage}
            placeholder={field.placeholder}
            onChange={(event) => field.setValue(event.target.value)}
            type={field.fieldType}
          />
        )}
      </span>
    </FieldsWrapper>
  );
};

import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

interface CheckboxFieldProps {
  label: string;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CheckboxField = ({ label, setIsChecked }: CheckboxFieldProps) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setIsChecked(event.target.checked)
            }
          />
        }
        label={label}
      />
    </div>
  );
};

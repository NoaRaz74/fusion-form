import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { FORM_TYPES } from "../types";
import { DropDownWrapper } from "../styles";

interface AccountTypeDropdownProps {
  value: FORM_TYPES;
  setValue: React.Dispatch<React.SetStateAction<FORM_TYPES>>;
}

interface DropdownMenuItem {
  value: string;
  label: string;
}

export const AccountTypeDropdown = ({
  value,
  setValue,
}: AccountTypeDropdownProps) => {
  const menuItems: DropdownMenuItem[] = [
    {
      label: "Advanced",
      value: FORM_TYPES.ADVANCED,
    },
    {
      label: "Manual",
      value: FORM_TYPES.MANUAL,
    },
  ];

  const handleChange = (value: FORM_TYPES): void => setValue(value);

  return (
    <DropDownWrapper>
      <InputLabel>Account Type</InputLabel>
      <Select
        value={value}
        label="account type"
        onChange={(event: SelectChangeEvent<FORM_TYPES>) =>
          handleChange(event.target.value as FORM_TYPES)
        }
      >
        {menuItems.map((menuItem: DropdownMenuItem) => {
          return <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>;
        })}
      </Select>
    </DropDownWrapper>
  );
};

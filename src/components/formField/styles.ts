import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FieldInput = styled(TextField)({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  borderRadius: 4,
  width: "20vw",
});
export const FieldName = styled(Typography)({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  borderRadius: 4,
  textAlign: "start",
  width: "10vw",
});
export const FieldsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const FlexBox = styled("div")({
  display: "flex",
});
export const FieldInputWithCustom = styled(FieldInput)({
  width: "10vw",
  marginRight: "2vw",
  display: "flex",
  justifyContent: "space-between",
});

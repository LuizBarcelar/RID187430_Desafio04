import { styled, Button, type ButtonProps } from "@mui/material";

const StyledButton = styled((props: ButtonProps) => <Button {...props} />)(({ theme }) => ({
  background: "linear-gradient(0.25turn, #945DD6, #6978D1, #13ADC7)",
  width: "8rem",
  borderRadius: "5rem",
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  textTransform: "none",
}));

export default StyledButton;

import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: "Poppins",
        h1: {
            fontSize: "4 rem",
            fontWeight: "600",
            fontStyle: "SemiBold"
        },

        h2: {
            fontSize: "2.5 rem",
            fontWeight: "600",
            fontStyle: "SemiBold"
        },

        h3: {
            fontSize: "2 rem",
            fontWeight: "600",
            fontStyle: "SemiBold"
        },

        h4: {
            fontSize: "1.5 rem",
            fontWeight: "600",
            fontStyle: "SemiBold"
        }
    },
})

theme = responsiveFontSizes(theme);

export default theme;
import { styled } from "@mui/material"



const StyledButton = () => {

    const StyledButton = styled ("button")(({ theme }) => ({
        background: "linear-gradient(0.25turn, #945DD6, #6978D1, #13ADC7)",
        width: "8rem",
        borderRadius:"5rem",
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
        
    }))

    return (
        <>
            <StyledButton>saber mais</StyledButton>
        </>
    )
}

export default StyledButton
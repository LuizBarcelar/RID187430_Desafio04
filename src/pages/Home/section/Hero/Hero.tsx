import { Box, Container, styled, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import StyledButton from "../../../../components/StyledButton"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "#0F1624",
        height: "100vh",
        display: "flex",
        alignItems: "center"

        
    }))

    return (
        <>
            <StyledHero sx={{ backgroundColor: 'background.default', color: 'text.primary'}}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{xs:12, md:9}}>
                            <Typography color="primary" variant="h1" textAlign="center" pb={2}>
                                Luiz Barcelar
                            </Typography>
                            <Typography color="primary" variant="h3" textAlign="center" pb={3}>
                                I' m a systems analyst
                            </Typography>
                        </Grid>

                        {/* Espaço reservado, se necessário */}
                        <Grid size={{md:3}}> </Grid>

                        {/* Botão */}
                        <Grid size={{xs:12}}>
                            <Box sx={{ display: 'flex', paddingLeft:5 , justifyContent: { xs: 'center', md: 'flex-start' }, mt: 2}}>
                                <StyledButton sx={{ width: '10rem',mr: { md: 4 } }}>
                                    saber mais
                                </StyledButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
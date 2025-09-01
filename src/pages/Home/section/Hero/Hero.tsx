import { Container, styled, Typography } from "@mui/material"
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
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{xs:12, md:9}}>
                            <Typography color="primary" variant="h1" textAlign="center" pb={2}>Luiz Barcelar</Typography>
                            <Typography color="primary" variant="h3" textAlign="center" pb={3}>I' m a systems analyst</Typography>
                        </Grid>
                        <Grid size={{md:3}} >
                            
                        </Grid>
                        <Grid container>
                            <Grid> 
                                <StyledButton></StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
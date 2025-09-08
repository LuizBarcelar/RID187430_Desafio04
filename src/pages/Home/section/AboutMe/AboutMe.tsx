import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';

const timelineData = [
  {
    year: 'Sep 2024',
    description:
      'Comecei a estudar programação com foco em lógica, HTML e CSS.',
  },
  {
    year: 'Mar 2024',
    description:
      'Aprofundei meus estudos com JavaScript, comecei projetos pessoais.',
  },
  {
    year: 'Jan 2025',
    description:
      'Aprendi React e TypeScript, desenvolvendo aplicações full stack.',
  },
  {
    year: 'Sep 2025',
    description:
      'Trabalhei em projetos reais, freelancers e colaborei com equipes.',
  },
];

const AboutMe = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="aboutme"
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" color="primary" mb={15}>
          Sobre Mim
        </Typography>

        {/* Timeline responsiva */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            justifyContent: isSmallScreen ? 'flex-start' : 'space-between',
            alignItems: 'center',
            position: 'relative',
            mb: 15,
            px: 2,
            gap: isSmallScreen ? 6 : 0,
          }}
        >
          {/* Linha do tempo */}
          <Box
            sx={{
              position: 'absolute',
              top: isSmallScreen ? 0 : 40,
              left: isSmallScreen ? '50%' : 0,
              right: isSmallScreen ? 'auto' : 0,
              bottom: isSmallScreen ? 0 : 'auto',
              width: isSmallScreen ? '2px' : '100%',
              height: isSmallScreen ? '100%' : '2px',
              backgroundColor: theme.palette.text.primary,
              zIndex: 0,
              transform: isSmallScreen ? 'translateX(-50%)' : 'none',
            }}
          />

          {/* Blocos da timeline */}
          {timelineData.map((item, index) => (
            <Box
              key={index}
              sx={{
                zIndex: 1,
                minWidth: '200px',
                maxWidth: '250px',
                textAlign: 'center',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={0.4}>
                {item.year}
              </Typography>
              {/* Pontinho */}
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.text.primary,
                  mb: 3,
                }}
              />
              <Typography variant="body2">{item.description}</Typography>
            </Box>
          ))}
        </Box>

        {/* Contato */}
        <Grid container spacing={4} pt={10}>
          {/* Esquerda - Email e Telefone */}
          <Grid size={{ xs:12, md:8 }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="normal"
              flexWrap="wrap"
              gap={5}
            >
              <Stack direction="column" spacing={1}>
                <Typography>Meu contato:</Typography>
                <Typography>(61) 9.9510-6609</Typography>
              </Stack>
              <Stack direction="column" spacing={1}>
                <Typography>Email:</Typography>
                <Typography>luizbarcelar2014@gmail.com</Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Direita - Ícones sociais */}
          <Grid size={{ xs:12, md:4 }}>
            <Stack
              direction="row"
              spacing={4}
              justifyContent={{ xs: 'flex-start', md: 'center' }}
            >
              <Link
                href="https://github.com/LuizBarcelar"
                target="_blank"
                color="inherit"
              >
                <GitHub fontSize="large" />
              </Link>
              <Link
                href="https://linkedin.com/in/luiz-barcelar-a73a91331"
                target="_blank"
                color="inherit"
              >
                <LinkedIn fontSize="large" />
              </Link>
              <Link
                href="https://wa.me/5561995106609"
                target="_blank"
                color="inherit"
              >
                <WhatsApp fontSize="large" />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;

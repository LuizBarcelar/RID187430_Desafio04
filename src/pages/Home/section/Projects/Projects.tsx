import { Box, Container, Grid, Typography, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StyledButton from '../../../../components/StyledButton';


const projects = [
  {
    title: 'Projeto 1',
    description: 'Este é um projeto incrível que faz XYZ.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/seuusuario/projeto1',
    demo: 'https://projeto1.demo.com',
  },
  {
    title: 'Projeto 2',
    description: 'Outro projeto interessante com React e Node.js.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/seuusuario/projeto2',
    demo: '',
  },
  {
    title: 'Projeto 3',
    description: 'Aplicativo mobile feito com React Native.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/seuusuario/projeto3',
    demo: 'https://projeto3.demo.com',
  },
  {
    title: 'Projeto 4',
    description: 'Aplicativo mobile feito com React Native.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/seuusuario/projeto3',
    demo: 'https://projeto3.demo.com',
  },
];

const Projects = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box id="projects" sx={{ backgroundColor: 'background.default', color: 'text.primary', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" color="primary" mb={15} gutterBottom>
          Projetos
        </Typography>

        <Grid container spacing={6} mt={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs:12, md:6 }}  key={index}>
              <Card
              sx={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'background.default',
                color: 'text.primary',
                border: '2px solid #fff',
                borderTopLeftRadius: '50px',
                borderBottomRightRadius: '50px',
                overflow: 'hidden',
                mx: 'auto',
                width: {
                  xs: '90%',
                  sm: '80%',
                  md: '100%'
                },
                boxShadow: isDarkMode
                    ? '0 8px 32px 12px rgba(255, 255, 255, 0.15)'
                    : '0 8px 32px 12px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isDarkMode
                      ? '0 12px 48px 12px rgba(255, 255, 255, 0.25)'
                      : '0 12px 48px 12px rgba(0, 0, 0, 0.45)',
                  },
                }}>
                <CardMedia
                  component="img"
                  height="350"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" textAlign="center" gutterBottom >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" mt={6} >{project.description}</Typography>
                </CardContent>
                <CardActions sx={{ paddingBottom: 4, paddingLeft: 2}}>
                  <StyledButton >
                    clique aqui
                  </StyledButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

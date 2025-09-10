import { Box, Container, Grid, Typography, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StyledButton from '../../../../components/StyledButton';


const projects = [
  {
    title: 'Landing Page',
    description: 'Landing page moderna e responsiva feita com HTML e CSS, criada para promover um produto digital. Possui layout limpo, seção de recursos, formulário de contato e é otimizada para dispositivos móveis e SEO.',
    image: '/image/projeto01.png',
    github: 'https://github.com/LuizBarcelar/RID187430_Desafio02',
    demo: 'https://noticias-desenvolvedores.netlify.app/',
  },
  {
    title: 'Menu Board',
    description: 'Projeto de lista de tarefas criado para organizar atividades do dia a dia. Permite adicionar, editar, concluir e deletar tarefas. Desenvolvido com foco em manipulação de DOM (JavaScript) ou uso de estados (React). Totalmente responsivo e com salvamento local no navegador..',
    image: '/image/projeto02.png',
    github: 'https://github.com/LuizBarcelar/Lista-de-tarefas---DNC',
    demo: 'https://menu-board.netlify.app/',
  },
  {
    title: 'Sales Dashboard',
    description: 'O Sales Dashboard é um painel analítico responsivo que permite a visualização de dados de vendas de maneira clara e objetiva. Com uma interface moderna, o projeto oferece gráficos dinâmicos, indicadores chave (KPIs) e uma funcionalidade de alteração de tema (claro/escuro) para melhor adaptação às preferências do usuário..',
    image: '/image/projeto03.png',
    github: 'https://github.com/LuizBarcelar/dnc-sales-dashboard-luiz',
    demo: 'https://sweet-rolypoly-1cb4e3.netlify.app/',
  },
  {
    title: 'Pagina Web',
    description: 'Este projeto é uma página web responsiva desenvolvida com React e Vite, com foco em usabilidade e personalização da experiência do usuário. Entre as funcionalidades principais estão a troca dinâmica de idiomas (ex: português e inglês) e um sistema de marcação de itens como favoritos — que ficam salvos no navegador, mesmo após atualizar ou fechar a página.',
    image: '/image/projeto04.png',
    github: 'https://github.com/LuizBarcelar/dnc-luiz',
    demo: 'https://comforting-gecko-5d9960.netlify.app/',
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
                minHeight: 500,
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

                {project.demo ? (
                  <Box
                    component="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex',justifyContent: 'center', textDecoration: 'none' }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        height: 200,
                        width: '90%',
                        objectFit: 'cover',
                        borderRadius: 2,
                        border: '2px solid',
                        borderColor: theme.palette.divider,
                        mx: 'auto',
                        mt: 3,
                        transition: '0.3s',
                        '&:hover': {
                          opacity: 0.9,
                          transform: 'scale(1.01)',
                        },
                      }}
                    />
                  </Box>
                ) : (
                <CardMedia
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    height: 200,
                    width: '90%',
                    objectFit: 'cover',
                    borderRadius: 2,
                    border: '2px solid',
                    borderColor: theme.palette.divider,
                    mx: 'auto',
                    mt: 3,
                  }}
                />
                )}
                <CardContent>
                  <Typography variant="h6" textAlign="center" gutterBottom >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" mt={4} >{project.description}</Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 2,  paddingLeft: 2}}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                    <StyledButton >
                      Ver código
                    </StyledButton>
                    </a>
                  )}
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

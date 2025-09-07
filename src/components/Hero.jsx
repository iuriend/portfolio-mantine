// src/components/Hero.jsx
import { Title, Text, Button, Container, Overlay, Box } from '@mantine/core';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <Box className={classes.hero}>
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Construindo o Futuro com Código e Criatividade</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Especialista em criar soluções de software eficientes, escaláveis e inovadoras que resolvem problemas reais.
        </Text>
        <Button variant="filled" size="xl" radius="xl" color="violet" className={classes.control}>
          Veja Meus Projetos
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
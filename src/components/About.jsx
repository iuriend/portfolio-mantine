// src/components/About.jsx
import { Container, Title, Text, Grid, Image, Anchor } from '@mantine/core';
import { portfolioData } from '../data';

const About = () => {
  return (
    // ADICIONADO O ID AQUI
    <Container py="xl" id="about">
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Image
            radius="md"
            src="https://placehold.co/600x600/25262b/9c72c4?text=Sua+Foto"
            alt={`Foto de ${portfolioData.name}`}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Title order={2}>Sobre Mim</Title>
          <Text mt="lg">
            Olá! Sou {portfolioData.name}, um apaixonado por tecnologia e resolução de problemas. Com experiência em desenvolvimento full-stack, meu objetivo é transformar ideias complexas em aplicações intuitivas e de alta performance.
          </Text>
          <Text mt="md">
            Tenho um forte interesse em arquiteturas de software, práticas de código limpo e metodologias ágeis. Estou sempre aprendendo novas tecnologias para me manter atualizado e entregar os melhores resultados possíveis.
          </Text>
          <Anchor href="#contact" mt="lg" fw={700}>
            Vamos conversar sobre seu projeto
          </Anchor>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default About;
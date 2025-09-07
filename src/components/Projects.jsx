// src/components/Projects.jsx
import { Card, Text, Group, Title, Container, SimpleGrid, ThemeIcon, rem, Anchor } from '@mantine/core';
import { IconCode, IconDeviceMobile, IconDatabase, IconArrowRight } from '@tabler/icons-react';
import { portfolioData } from '../data';

const icons = {
  Code: IconCode,
  Smartphone: IconDeviceMobile,
  Database: IconDatabase,
};

const Projects = () => {
  const cards = portfolioData.projects.map((project, index) => {
    const Icon = icons[project.icon] || IconCode;
    return (
      <Card shadow="sm" padding="xl" radius="lg" withBorder key={index} bg="dark.8">
        <ThemeIcon 
            variant="gradient" 
            gradient={{ from: 'violet.9', to: 'violet.6', deg: 135 }}
            size={rem(64)} 
            radius="xl"
        >
            <Icon style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
        </ThemeIcon> {/* <-- A CORREÇÃO ESTÁ AQUI */}

        <Text fw={700} size="xl" mt="lg">{project.title}</Text>
        <Text mt="sm" c="dimmed" size="sm">{project.description}</Text>
        
        <Anchor href={project.link} target="_blank" c="violet.4" fz="sm" fw={600} mt="lg">
            <Group gap="xs">
                <span>Ver no GitHub</span>
                <IconArrowRight size={16} />
            </Group>
        </Anchor>
      </Card>
    );
  });

  return (
    <Container size="lg" py={80} id="projects">
      <Title order={2} ta="center" mt="sm">Meus Projetos</Title>
      <Text c="dimmed" ta="center" mt="md" mb={50}>
        Uma seleção de projetos que demonstram minhas habilidades em desenvolvimento de software.
      </Text>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
        {cards}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
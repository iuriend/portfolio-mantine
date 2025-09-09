// src/components/Videos.jsx
import { Card, Image, Text, Title, Container, SimpleGrid } from '@mantine/core';
import { portfolioData } from '../data';

const Videos = () => {
  const cards = portfolioData.videos.map((video, index) => (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      component="a"
      href={video.videoUrl}
      target="_blank"
      key={index}
    >
      <Card.Section>
        <Image
          src={video.thumbnail}
          height={180}
          alt={`Thumbnail for ${video.title}`}
        />

      </Card.Section>

      <Text fw={700} size="lg" mt="md">{video.title}</Text>
      <Text mt="xs" c="dimmed" size="sm">{video.description}</Text>
    </Card>
  ));

  return (
    // ADICIONADO O ID AQUI
    <Container size="lg" py="xl" id="videos">
      <Title order={2} ta="center" mt="sm">Vídeos e Demonstrações</Title>
      <Text c="dimmed" ta="center" mt="md" mb="xl">
        Apresentações em vídeo e demos de alguns dos meus trabalhos para ilustrar a funcionalidade.
      </Text>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
        {cards}
      </SimpleGrid>
    </Container>
  );
};

export default Videos;
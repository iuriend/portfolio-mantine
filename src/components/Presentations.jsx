// src/components/Presentations.jsx
import { Text, Title, Container, Paper, Group, Button, ThemeIcon, rem } from '@mantine/core';
import { IconFileText, IconChartBar, IconShield, IconDownload } from '@tabler/icons-react';
import { portfolioData } from '../data';

const icons = {
  FileText: IconFileText,
  BarChart2: IconChartBar,
  Shield: IconShield,
};

const Presentations = () => {
  const items = portfolioData.presentations.map((ppt, index) => {
    const Icon = icons[ppt.icon] || IconFileText;
    return (
      <Paper withBorder radius="md" p="md" key={index}>
        <Group>
          <ThemeIcon variant="light" color="violet" size={rem(50)}>
            <Icon style={{ width: rem(28), height: rem(28) }} />
          </ThemeIcon>

          <div style={{ flex: 1 }}>
            <Text size="lg" fw={700}>{ppt.title}</Text>
            <Text c="dimmed" size="sm">{ppt.description}</Text>
          </div>
          
          <Button
            component="a"
            href={ppt.fileUrl}
            download
            variant="light"
            color="violet"
            leftSection={<IconDownload size={16} />}
          >
            Baixar
          </Button>
        </Group>
      </Paper>
    );
  });

  return (
    // ADICIONADO O ID AQUI
    <Container size="md" py="xl" id="presentations">
      <Title order={2} ta="center" mt="sm">Apresentações e Palestras</Title>
      <Text c="dimmed" ta="center" mt="md" mb="xl">
        Materiais e slides de palestras técnicas e apresentações de projetos.
      </Text>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items}
      </div>
    </Container>
  );
};

export default Presentations;
// src/components/Footer.jsx
import { Container, Text, Group, ActionIcon, Box } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { portfolioData } from '../data';

const Footer = () => {
  return (
    <Box mt="xl" py="lg" style={{ borderTop: '1px solid var(--mantine-color-dark-4)' }}>
      <Container>
        <Text c="dimmed" size="sm" ta="center">
          &copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.
        </Text>
        <Group justify="center" mt="md">
          <ActionIcon
            component="a"
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            size="lg"
            color="violet"
            variant="subtle"
          >
            <IconBrandLinkedin size={20} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={portfolioData.socialLinks.github}
            target="_blank"
            size="lg"
            color="violet"
            variant="subtle"
          >
            <IconBrandGithub size={20} />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer;
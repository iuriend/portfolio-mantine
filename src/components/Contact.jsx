// src/components/Contact.jsx
import { Title, Text, Button, Container } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
import { portfolioData } from '../data';

const Contact = () => {
  return (
    <Container size="md" py="xl" style={{ textAlign: 'center' }} id="contact">
      <Title order={2} ta="center" mt="sm">Pronto para Começar?</Title>
      <Text c="dimmed" ta="center" mt="md" mb="xl">
        Se você tem uma ideia, um projeto ou uma oportunidade, adoraria ouvir sobre isso. Vamos criar algo incrível juntos!
      </Text>
      <Button
        component="a"
        href={`mailto:${portfolioData.contactEmail}`}
        size="lg"
        color="violet"
        leftSection={<IconMail size={20} />}
      >
        {portfolioData.contactEmail}
      </Button>
    </Container>
  );
};

export default Contact;
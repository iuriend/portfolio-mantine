// src/components/Header.jsx
import { Group, Button, Text, Container, Anchor, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { portfolioData } from '../data';
import classes from './Header.module.css';

const links = [
    { link: '#projects', label: 'Projetos' },
    { link: '#videos', label: 'Vídeos' },
    { link: '#presentations', label: 'Apresentações' },
    { link: '#about', label: 'Sobre Mim' },
];

const Header = () => {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Anchor
            c="dimmed"
            key={link.label}
            href={link.link}
            fz="sm"
            fw={500}
            className={classes.link}
        >
            {link.label}
        </Anchor>
    ));

    return (
        <Container size="lg" className={classes.inner}>
            <div>
                <Text size="xl" fw={900} c="violet.4" tt="uppercase" letterSpacing="wider">Iuri Santana</Text>
                <Text size="xs" tt="uppercase" c="dimmed" letterSpacing="widest">{portfolioData.title}</Text>
            </div>
            <Group gap={30} visibleFrom="sm">
                {items}
            </Group>
            <Button component="a" href="#contact" color="violet" radius="md" visibleFrom="sm">Contato</Button>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Container>
    );
};

export default Header;
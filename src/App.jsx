// src/App.jsx
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Videos from './components/Videos';
import Presentations from './components/Presentations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AppShell header={{ height: 90 }} padding={0}>
      <AppShell.Header withBorder={false} style={{ background: 'rgba(26, 27, 30, 0.8)', backdropFilter: 'blur(10px)' }}>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Hero />
        <Projects />
        <Videos />
        <Presentations />
        <About />
        <Contact />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
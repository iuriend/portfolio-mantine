// src/data.js

import profilePic from './assets/images/profile.jpg';
import projectThumb1 from './assets/images/placeholder-600x400.png';
import thumbFinanceiro from './assets/images/thumb-financeiro.jpg';
import thumbApiNodejs from './assets/images/thumb-api-nodejs.jpg';
import thumbAppMobile from './assets/images/thumb-app-mobile.jpg';

// Variável com o caminho base
const BASE_PATH = import.meta.env.BASE_URL;

export const portfolioData = {
  name: "Iuri Santana",
  title: "Analista e Desenvolvedor de Sistemas",
  profilePic: profilePic,
  contactEmail: "iurienderson@souunit.com.br",
  socialLinks: {
    linkedin: "https://linkedin.com/school/unit-br/",
    github: "https://github.com/iuriend",
  },
  projects: [
    {
      icon: "Code",
      title: "Sistema de Gestão Financeira",
      description: "Aplicação web completa para controle de despesas e receitas, com dashboards interativos.",
      link: "https://github.com/iuriend/portfolio-mantine",
      thumbnail: projectThumb1,
    },
    {
      icon: "Smartphone",
      title: "App Mobile de E-commerce",
      description: "Aplicativo multiplataforma (iOS/Android) para uma loja virtual, com sistema de pagamento integrado.",
      link: "https://github.com/iuriend/portfolio-mantine",
      thumbnail: projectThumb1,
    },
    {
      icon: "Database",
      title: "API REST para Microsserviços",
      description: "Backend robusto para suportar uma arquitetura de microsserviços, com autenticação e documentação.",
      link: "https://github.com/iuriend/portfolio-mantine",
      thumbnail: projectThumb1,
    },
  ],
  videos: [
    {
      title: "Demo: Sistema Financeiro",
      description: "Demonstração completa das funcionalidades do sistema de gestão financeira.",
      videoUrl: `${BASE_PATH}videos/video-sistema.mp4`,
      thumbnail: thumbFinanceiro, 
    },
    {
      title: "Tutorial: API com Node.js",
      description: "Passo a passo sobre como construir uma API RESTful segura e eficiente.",
      videoUrl: `${BASE_PATH}videos/video-api.mp4`,
      thumbnail: thumbApiNodejs, 
    },
    {
      title: "Apresentando o App Mobile",
      description: "Um tour pelas principais telas e funcionalidades do aplicativo de e-commerce.",
      videoUrl: `${BASE_PATH}videos/video-app.mp4`,
      thumbnail: thumbAppMobile, 
    },
  ],
  presentations: [
    {
      icon: "FileText",
      title: "Arquitetura de Microsserviços",
      description: "Apresentação sobre os conceitos, vantagens e desafios da arquitetura de microsserviços.",
      fileUrl: `${BASE_PATH}presentations/apresentacao-arquitetura.pptx`,
    },
    {
      icon: "BarChart2",
      title: "Visualização de Dados com D3.js",
      description: "Slides da palestra sobre como criar gráficos interativos para a web utilizando a biblioteca D3.js.",
      fileUrl: `${BASE_PATH}presentations/apresentacao-dados.pptx`,
    },
    {
      icon: "Shield",
      title: "Segurança em Aplicações Web",
      description: "Material sobre as principais vulnerabilidades e como proteger suas aplicações de ataques.",
      fileUrl: `${BASE_PATH}presentations/apresentacao-seguranca.pptx`,
    },
  ],
};
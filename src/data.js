// src/data.js

// Importação das imagens que estão na pasta src/assets.
import profilePic from './assets/images/profile.jpg';
import projectThumb1 from './assets/images/placeholder-600x400.png';

// Importando das thumbnails
import thumbFinanceiro from './assets/images/thumb-financeiro.jpg';
import thumbApiNodejs from './assets/images/thumb-api-nodejs.jpg';
import thumbAppMobile from './assets/images/thumb-app-mobile.jpg';


export const portfolioData = {
  name: "Iuri Santana",
  title: "Analista e Desenvolvedor de Sistemas",
  profilePic: profilePic,
  contactEmail: "iuri.enderson@souunit.com.br",
  socialLinks: {
    linkedin: "https://linkedin.com/school/unit-br/",
    github: "https://github.com/iuriend",
  },
  projects: [
    {
      icon: "Code",
      title: "Sistema de Gestão Financeira",
      description: "Aplicação web completa para controle de despesas e receitas, com dashboards interativos.",
      link: "https://github.com/seu-usuario/repo-projeto-1",
      thumbnail: projectThumb1,
    },
    {
      icon: "Smartphone",
      title: "App Mobile de E-commerce",
      description: "Aplicativo multiplataforma (iOS/Android) para uma loja virtual, com sistema de pagamento integrado.",
      link: "https://github.com/seu-usuario/repo-projeto-2",
      thumbnail: projectThumb1,
    },
    {
      icon: "Database",
      title: "API REST para Microsserviços",
      description: "Backend robusto para suportar uma arquitetura de microsserviços, com autenticação e documentação.",
      link: "https://github.com/seu-usuario/repo-projeto-3",
      thumbnail: projectThumb1,
    },
  ],
  videos: [
    {
      title: "Demo: Sistema Financeiro",
      description: "Demonstração completa das funcionalidades do sistema de gestão financeira.",
      videoUrl: '/videos/video-sistema.mp4',
      thumbnail: thumbFinanceiro, 
    },
    {
      title: "Tutorial: API com Node.js",
      description: "Passo a passo sobre como construir uma API RESTful segura e eficiente.",
      videoUrl: '/videos/video-api.mp4',
      thumbnail: thumbApiNodejs, 
    },
    {
      title: "Apresentando o App Mobile",
      description: "Um tour pelas principais telas e funcionalidades do aplicativo de e-commerce.",
      videoUrl: '/videos/video-app.mp4',
      thumbnail: thumbAppMobile, 
    },
  ],
  presentations: [
    {
      icon: "FileText",
      title: "Arquitetura de Microsserviços",
      description: "Apresentação sobre os conceitos, vantagens e desafios da arquitetura de microsserviços.",
      fileUrl: '/presentations/apresentacao_exemplo.pptx',
    },
    {
      icon: "BarChart2",
      title: "Visualização de Dados com D3.js",
      description: "Slides da palestra sobre como criar gráficos interativos para a web utilizando a biblioteca D3.js.",
      fileUrl: '/presentations/apresentacao_exemplo.pptx',
    },
    {
      icon: "Shield",
      title: "Segurança em Aplicações Web",
      description: "Material sobre as principais vulnerabilidades e como proteger suas aplicações de ataques.",
      fileUrl: '/presentations/apresentacao_exemplo.pptx',
    },
  ],
};
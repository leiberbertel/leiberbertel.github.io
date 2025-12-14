import { Component, HostListener, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { HeroComponent, HeroData } from './features/hero/hero.component';
import { AboutComponent, AboutData } from './features/about/about.component';
import { ServicesComponent, ServiceCard } from './features/services/services.component';
import { TestimonialsComponent, Testimonial } from './features/testimonials/testimonials.component';
import { NavComponent, NavLink } from './features/nav/nav.component';
import { SkillsComponent, SkillCategory } from './features/skills/skills.component';
import { QualificationComponent, QualificationItem } from './features/qualification/qualification.component';
import { PortfolioComponent, PortfolioProject } from './features/portfolio/portfolio.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent, FooterLink, FooterSocial } from './features/footer/footer.component';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    QualificationComponent,
    ServicesComponent,
    TestimonialsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  dark = localStorage.getItem('selected-theme') === 'dark';
  activeSection = 'home';
  showHeaderShadow = false;
  showScrollUp = false;

  navLinks: NavLink[] = [
    { id: 'home', href: '#home', label: 'Inicio', icon: 'uil uil-estate' },
    { id: 'about', href: '#about', label: 'Sobre mi', icon: 'uil uil-user' },
    { id: 'skills', href: '#skills', label: 'Habilidades', icon: 'uil uil-file-alt' },
    { id: 'services', href: '#services', label: 'Servicios', icon: 'uil uil-suitcase' },
    { id: 'portfolio', href: '#portfolio', label: 'Portafolio', icon: 'uil uil-scenery' },
    { id: 'contact', href: '#contact', label: 'Contacto', icon: 'uil uil-message' },
  ];

  heroData: HeroData = {
    name: '¡Hola! Soy Leiber',
    title: 'Software Developer',
    subtitle: 'Software Developer',
    description:
      'Soy un Desarrollador backend con conocimientos de frontend, autodidacta, me gusta aprender cosas nuevas cada día y crear productos web.',
    ctaLabel: 'Contáctame',
    ctaHref: '#contact',
    scrollLabel: 'Desplazarse hacia abajo',
    scrollHref: '#about',
    imageSrc: 'assets/img/perfil.png',
    imageAlt: 'Foto de perfil de Leiber',
    social: [
      { icon: 'uil uil-linkedin-alt', href: 'https://www.linkedin.com/in/leiber-bertel/', label: 'LinkedIn' },
      { icon: 'uil uil-university', href: 'https://platzi.com/p/leiberbertel/', label: 'Platzi' },
      { icon: 'uil uil-github-alt', href: 'https://github.com/leiberbertel', label: 'GitHub' },
    ],
  };

  aboutData: AboutData = {
    image: 'assets/img/about.jpeg',
    description:
      'Desarrollador de software con experiencia en la creación de aplicaciones robustas y escalables. Aunque mi enfoque principal es el desarrollo backend, también tengo conocimientos en tecnologías frontend, lo que me permite contribuir eficazmente a través de la pila.',
    stats: [
      { value: '02+', label: 'Años <br />experiencia' },
      { value: '25+', label: 'Proyectos<br />completados' },
      { value: '01+', label: 'Compañias <br />trabajado' },
    ],
    cvLink: 'assets/pdf/leiber_bertel_curriculum.pdf',
    cvLabel: 'Descargar CV',
  };

  skillsCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend Developer',
      subtitle: 'Más de 2 año',
      icon: 'uil uil-brackets-curly',
      skills: [
        { name: 'HTML', level: '90%', barClass: 'skills__html' },
        { name: 'CSS', level: '75%', barClass: 'skills__css' },
        { name: 'JavaScript', level: '80%', barClass: 'skills__python' },
        { name: 'Vue', level: '70%', barClass: 'skills__vue' },
        { name: 'Angular', level: '70%', barClass: 'skills__vue' },
        { name: 'Git & Github', level: '70%', barClass: 'skills__git' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Developer',
      subtitle: 'Más de 2 año',
      icon: 'uil uil-server-network',
      skills: [
        { name: 'Python', level: '80%', barClass: 'skills__python' },
        { name: 'Django', level: '70%', barClass: 'skills__django' },
        { name: 'Java', level: '90%', barClass: 'skills__html' },
        { name: 'MySQL', level: '75%', barClass: 'skills__mysql' },
        { name: 'Node.js', level: '70%', barClass: 'skills__aws' },
        { name: 'Spring framework', level: '70%', barClass: 'skills__aws' },
        { name: 'MongoDB', level: '70%', barClass: 'skills__aws' },
        { name: 'Docker', level: '70%', barClass: 'skills__js' },
      ],
    },
    {
      id: 'data',
      title: 'Data analyst',
      subtitle: 'Más de 9 meses',
      icon: 'uil uil-chart-line',
      skills: [
        { name: 'Excel', level: '70%', barClass: 'skills__excel' },
        { name: 'Power Bi', level: '65%', barClass: 'skills__powerbi' },
        { name: 'SQL', level: '85%', barClass: 'skills__sql' },
        { name: 'Big Data', level: '60%', barClass: 'skills__bigdata' },
      ],
    },
  ];

  education: QualificationItem[] = [
    {
      title: 'Bachiller en ciencias',
      subtitle: 'Colombia - Colegio Alvaro Araujo Noguera',
      calendar: '2018 - 2020',
    },
    {
      title: 'Backend Developer con Python y Django',
      subtitle: 'Colombia - Platzi',
      calendar: '2021 - 2023',
      align: 'right',
    },
    {
      title: 'Desarrollo Full-Stack con Java + Spring',
      subtitle: 'Colombia - Oracle Next Education',
      calendar: '2022 - 2023',
    },
    {
      title: 'Técnico en Programación de Software',
      subtitle: 'Colombia - SENA',
      calendar: '2023 - 2024',
      align: 'right',
      last: true,
    },
  ];

  work: QualificationItem[] = [
    {
      title: 'Desarrollador de Software (Mobile y Web)',
      subtitle: 'Quipux - Medellín, Antioquía',
      calendar: '2023 - Actualidad',
    },
    {
      title: 'Developer full-stack',
      subtitle: 'Autonomo - Medellín, Antioquía',
      calendar: '2022 - 2023',
      align: 'right',
    },
    {
      title: 'Operario Logística',
      subtitle: 'Utah Textil - Colombia, Antioquía',
      calendar: '2021 - 2022',
    },
    {
      title: 'Operario Administrativo',
      subtitle: 'Sistervarly - Colombia, César',
      calendar: '2019 - 2021',
      align: 'right',
      last: true,
    },
  ];

  services: ServiceCard[] = [
    {
      icon: 'uil uil-arrow',
      title: 'Frontend <br />developer',
      bullets: [
        'Supervisar la estructura y el diseño de páginas web y hacerlas lo más sencillas posible.',
        'Desarrollar aplicaciones orientadas al usuario y supervisar su eficacia.',
        'Comprender las necesidades de la empresa y garantizar la máxima eficacia de las páginas web.',
        'Cambiar el diseño y el contenido de las páginas existentes en beneficio de usuarios y clientes.',
      ],
    },
    {
      icon: 'uil uil-server-network-alt',
      title: 'Backend <br />developer',
      bullets: [
        'Trabajar con la dirección para garantizar que la experiencia de usuario siga siendo de alto nivel.',
        'Incorporar elementos de seguridad preparados para el futuro y supervisar su funcionalidad permanente.',
        'Optimizar aplicaciones para ofrecer mayor rapidez y comodidad.',
        'Implementar aplicaciones de almacenamiento de datos y mantener su eficacia.',
      ],
    },
    {
      icon: 'uil uil-chart-growth',
      title: 'Data <br />analyst',
      bullets: [
        'Extraer y procesar todo tipo de datos.',
        'Analizar todos los datos con las herramientas adecuadas.',
        'Elaborar informes con los datos relevantes.',
        'Transmitir a la dirección los resultados obtenidos.',
      ],
    },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'María González',
      role: 'Product Manager',
      message: 'Su enfoque en backend nos permitió escalar sin fricciones y con entregas rápidas.',
    },
    {
      name: 'Carlos Díaz',
      role: 'Tech Lead',
      message: 'Gran equilibrio entre calidad de código y velocidad; siempre propone mejoras útiles.',
    },
    {
      name: 'Ana Ruiz',
      role: 'Data Analyst',
      message: 'Su apoyo en visualizaciones y dashboards nos ayudó a comunicar hallazgos clave.',
    },
  ];

  projects: PortfolioProject[] = [
    {
      title: 'To Do List',
      description:
        'Aplicación de lista de tareas con registro de usuario, inicio de sesión, búsqueda y CRUD completo construido con Django.',
      image: 'assets/img/portfolio1.png',
      alt: 'Aplicación de tareas en Django',
      link: 'https://github.com/leiberbertel/to_do_App',
      cta: 'Github',
    },
    {
      title: 'Tablero Financiero Interactivo',
      description:
        'Dashboard financiero configurable con Plotly Dash en Python para cargar, filtrar y visualizar datos.',
      image: 'assets/img/portfolio2.png',
      alt: 'Dashboard financiero interactivo',
      link: 'https://github.com/leiberbertel/financial_dashboard_dash',
      cta: 'Github',
    },
    {
      title: 'The Django Blogger',
      description:
        'Blog responsivo con creación de publicaciones, soporte de imágenes y pruebas automatizadas. Construido con Django y Bootstrap.',
      image: 'assets/img/portfolio3.png',
      alt: 'Blog en Django responsivo',
      link: 'https://github.com/leiberbertel/dj-blogger',
      cta: 'Github',
    },
  ];

  footerLinks: FooterLink[] = [
    { label: 'Servicios', href: '#services' },
    { label: 'Portafolio', href: '#portfolio' },
    { label: 'Contacto', href: '#contact' },
  ];

  footerSocials: FooterSocial[] = [
    { href: 'https://twitter.com/BertelLeiber', icon: 'uil uil-twitter-alt' },
    { href: 'https://www.linkedin.com/in/leiber-bertel/', icon: 'uil uil-linkedin-alt' },
  ];

  ngOnInit() {
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.dark);
  }

  toggleTheme() {
    this.dark = !this.dark;
    this.applyTheme();
    localStorage.setItem('selected-theme', this.dark ? 'dark' : 'light');
    localStorage.setItem('selected-icon', this.dark ? 'uil-moon' : 'uil-sun');
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;
    this.showHeaderShadow = scrollY >= 80;
    this.showScrollUp = scrollY >= 560;

    document.querySelectorAll<HTMLElement>('section[id]').forEach((sec) => {
      const top = sec.offsetTop - 50;
      const height = sec.offsetHeight;
      if (scrollY > top && scrollY <= top + height) {
        this.activeSection = sec.id;
      }
    });
  }
}

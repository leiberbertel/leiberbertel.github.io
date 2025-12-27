import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from './core/services/i18n.service';
import { AboutComponent, AboutData } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import {
  FooterComponent,
  FooterLink,
  FooterSocial,
} from './features/footer/footer.component';
import { HeroComponent, HeroData } from './features/hero/hero.component';
import { NavComponent, NavLink } from './features/nav/nav.component';
import {
  PortfolioComponent,
  PortfolioProject,
} from './features/portfolio/portfolio.component';
import {
  QualificationComponent,
  QualificationItem,
} from './features/qualification/qualification.component';
import {
  ServicesComponent,
  ServiceCard,
} from './features/services/services.component';
import {
  SkillsComponent,
  SkillCategory,
} from './features/skills/skills.component';
import {
  TestimonialsComponent,
  Testimonial,
} from './features/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    HeroComponent,
    AboutComponent,
    TranslateModule,
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
  language = '';

  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
  ];

  navLinks: NavLink[] = [
    { id: 'home', href: '#home', label: 'NAV.HOME', icon: 'uil uil-estate' },
    { id: 'about', href: '#about', label: 'NAV.ABOUT', icon: 'uil uil-user' },
    {
      id: 'skills',
      href: '#skills',
      label: 'NAV.SKILLS',
      icon: 'uil uil-file-alt',
    },
    {
      id: 'services',
      href: '#services',
      label: 'NAV.SERVICES',
      icon: 'uil uil-suitcase',
    },
    {
      id: 'portfolio',
      href: '#portfolio',
      label: 'NAV.PORTFOLIO',
      icon: 'uil uil-scenery',
    },
    {
      id: 'contact',
      href: '#contact',
      label: 'NAV.CONTACT',
      icon: 'uil uil-message',
    },
  ];

  heroData: HeroData = {
    name: 'HERO.NAME',
    title: 'HERO.TITLE',
    subtitle: 'HERO.SUBTITLE',
    description: 'HERO.DESCRIPTION',
    ctaLabel: 'HERO.CTA',
    ctaHref: '#contact',
    scrollLabel: 'HERO.SCROLL',
    scrollHref: '#about',
    imageSrc: 'https://plhmjzol7fhqdza8.public.blob.vercel-storage.com/img/perfil.png',
    imageAlt: 'HERO.IMAGE_ALT',
    social: [
      {
        icon: 'uil uil-linkedin-alt',
        href: 'https://www.linkedin.com/in/leiber-bertel/',
        label: 'LinkedIn',
      },
      {
        icon: 'uil uil-university',
        href: 'https://platzi.com/p/leiberbertel/',
        label: 'Platzi',
      },
      {
        icon: 'uil uil-github-alt',
        href: 'https://github.com/leiberbertel',
        label: 'GitHub',
      },
    ],
  };

  aboutData: AboutData = {
    image: 'https://plhmjzol7fhqdza8.public.blob.vercel-storage.com/img/about.jpeg',
    description: 'ABOUT.DESCRIPTION',
    stats: [
      { value: '02+', label: 'ABOUT.STATS.EXPERIENCE' },
      { value: '25+', label: 'ABOUT.STATS.PROJECTS' },
      { value: '01+', label: 'ABOUT.STATS.COMPANIES' },
    ],
    cvLink: 'https://plhmjzol7fhqdza8.public.blob.vercel-storage.com/pdf/leiber_bertel_curriculum.pdf',
    cvLabel: 'ABOUT.CV',
  };

  skillsCategories: SkillCategory[] = [
    {
      id: 'backend',
      title: 'SKILLS.CATEGORIES.BACKEND.TITLE',
      subtitle: 'SKILLS.CATEGORIES.BACKEND.SUBTITLE',
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
      id: 'frontend',
      title: 'SKILLS.CATEGORIES.FRONTEND.TITLE',
      subtitle: 'SKILLS.CATEGORIES.FRONTEND.SUBTITLE',
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
      id: 'mobile',
      title: 'SKILLS.CATEGORIES.MOBILE.TITLE',
      subtitle: 'SKILLS.CATEGORIES.MOBILE.SUBTITLE',
      icon: 'uil uil-mobile-android',
      skills: [
        { name: 'Flutter', level: '70%', barClass: 'skills__flutter' },
        { name: 'Kotlin', level: '65%', barClass: 'skills__kotlin' },
        {
          name: 'Jetpack Compose',
          level: '65%',
          barClass: 'skills__jetpackcompose',
        },
        {
          name: 'Firebase Crashlytics',
          level: '70%',
          barClass: 'skills__firebaseCrashlytics',
        },
      ],
    },
  ];

  education: QualificationItem[] = [
    {
      title: 'QUALIFICATION.EDUCATION.BACHELOR.TITLE',
      subtitle: 'QUALIFICATION.EDUCATION.BACHELOR.SUBTITLE',
      calendar: 'QUALIFICATION.EDUCATION.BACHELOR.CALENDAR',
    },
    {
      title: 'QUALIFICATION.EDUCATION.BACKEND.TITLE',
      subtitle: 'QUALIFICATION.EDUCATION.BACKEND.SUBTITLE',
      calendar: 'QUALIFICATION.EDUCATION.BACKEND.CALENDAR',
      align: 'right',
    },
    {
      title: 'QUALIFICATION.EDUCATION.FULLSTACK.TITLE',
      subtitle: 'QUALIFICATION.EDUCATION.FULLSTACK.SUBTITLE',
      calendar: 'QUALIFICATION.EDUCATION.FULLSTACK.CALENDAR',
    },
    {
      title: 'QUALIFICATION.EDUCATION.SOFTWARE.TITLE',
      subtitle: 'QUALIFICATION.EDUCATION.SOFTWARE.SUBTITLE',
      calendar: 'QUALIFICATION.EDUCATION.SOFTWARE.CALENDAR',
      align: 'right',
      last: true,
    },
  ];

  work: QualificationItem[] = [
    {
      title: 'QUALIFICATION.WORK.SOFTWARE.TITLE',
      subtitle: 'QUALIFICATION.WORK.SOFTWARE.SUBTITLE',
      calendar: 'QUALIFICATION.WORK.SOFTWARE.CALENDAR',
    },
    {
      title: 'QUALIFICATION.WORK.FULLSTACK.TITLE',
      subtitle: 'QUALIFICATION.WORK.FULLSTACK.SUBTITLE',
      calendar: 'QUALIFICATION.WORK.FULLSTACK.CALENDAR',
      align: 'right',
    },
    {
      title: 'QUALIFICATION.WORK.LOGISTICS.TITLE',
      subtitle: 'QUALIFICATION.WORK.LOGISTICS.SUBTITLE',
      calendar: 'QUALIFICATION.WORK.LOGISTICS.CALENDAR',
    },
    {
      title: 'QUALIFICATION.WORK.ADMIN.TITLE',
      subtitle: 'QUALIFICATION.WORK.ADMIN.SUBTITLE',
      calendar: 'QUALIFICATION.WORK.ADMIN.CALENDAR',
      align: 'right',
      last: true,
    },
  ];

  services: ServiceCard[] = [
    {
      icon: 'uil uil-arrow',
      title: 'SERVICES.FRONTEND.TITLE',
      bullets: [
        'SERVICES.FRONTEND.BULLETS.0',
        'SERVICES.FRONTEND.BULLETS.1',
        'SERVICES.FRONTEND.BULLETS.2',
        'SERVICES.FRONTEND.BULLETS.3',
      ],
    },
    {
      icon: 'uil uil-server-network-alt',
      title: 'SERVICES.BACKEND.TITLE',
      bullets: [
        'SERVICES.BACKEND.BULLETS.0',
        'SERVICES.BACKEND.BULLETS.1',
        'SERVICES.BACKEND.BULLETS.2',
        'SERVICES.BACKEND.BULLETS.3',
      ],
    },
    {
      icon: 'uil uil-mobile-android',
      title: 'SERVICES.MOBILE.TITLE',
      bullets: [
        'SERVICES.MOBILE.BULLETS.0',
        'SERVICES.MOBILE.BULLETS.1',
        'SERVICES.MOBILE.BULLETS.2',
        'SERVICES.MOBILE.BULLETS.3',
        'SERVICES.MOBILE.BULLETS.4',
      ],
    },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'María González',
      role: 'TESTIMONIALS.MESSAGES.0.ROLE',
      message: 'TESTIMONIALS.MESSAGES.0.TEXT',
    },
    {
      name: 'Carlos Díaz',
      role: 'TESTIMONIALS.MESSAGES.1.ROLE',
      message: 'TESTIMONIALS.MESSAGES.1.TEXT',
    },
    {
      name: 'Ana Ruiz',
      role: 'TESTIMONIALS.MESSAGES.2.ROLE',
      message: 'TESTIMONIALS.MESSAGES.2.TEXT',
    },
  ];

  projects: PortfolioProject[] = [
    {
      title: 'To Do List',
      description: 'PORTFOLIO.PROJECTS.0.DESCRIPTION',
      image: 'https://plhmjzol7fhqdza8.public.blob.vercel-storage.com/img/portfolio1.png',
      alt: 'PORTFOLIO.PROJECTS.0.ALT',
      link: 'https://github.com/leiberbertel/to_do_App',
      cta: 'PORTFOLIO.CTA',
    },
    {
      title: 'Tablero Financiero Interactivo',
      description: 'PORTFOLIO.PROJECTS.1.DESCRIPTION',
      image: 'https://plhmjzol7fhqdza8.public.blob.vercel-storage.com/img/portfolio2.png',
      alt: 'PORTFOLIO.PROJECTS.1.ALT',
      link: 'https://github.com/leiberbertel/financial_dashboard_dash',
      cta: 'PORTFOLIO.CTA',
    },
    {
      title: 'The Django Blogger',
      description: 'PORTFOLIO.PROJECTS.2.DESCRIPTION',
      image: 'https://plhmjzol7fhqdza8.public.blob.vercel-storage.com/img/portfolio3.png',
      alt: 'PORTFOLIO.PROJECTS.2.ALT',
      link: 'https://github.com/leiberbertel/dj-blogger',
      cta: 'PORTFOLIO.CTA',
    },
  ];

  footerLinks: FooterLink[] = [
    { label: 'NAV.SERVICES', href: '#services' },
    { label: 'NAV.PORTFOLIO', href: '#portfolio' },
    { label: 'NAV.CONTACT', href: '#contact' },
  ];

  footerSocials: FooterSocial[] = [
    { href: 'https://twitter.com/BertelLeiber', icon: 'uil uil-twitter-alt' },
    {
      href: 'https://www.linkedin.com/in/leiber-bertel/',
      icon: 'uil uil-linkedin-alt',
    },
  ];

  constructor(private i18n: I18nService) {
    this.language = this.i18n.currentLang || 'es';
  }

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

  setLanguage(lang: string) {
    this.i18n.use(lang);
    this.language = this.i18n.currentLang || 'es';
  }
}

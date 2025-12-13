import { Component, HostListener, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { RouterOutlet } from "@angular/router";
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private fb = inject(FormBuilder);

  menuOpen = false;
  dark = localStorage.getItem('selected-theme') === 'dark';
  skillsOpen = new Set<string>(['backend']);
  activeTab: 'education' | 'work' = 'education';
  activeModal: number | null = null;
  activeSection = 'home';
  showHeaderShadow = false;
  showScrollUp = false;
  projects = [
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

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    reason: ['', Validators.required],
    message: ['', Validators.required],
  });

  toggleMenu(open: boolean) {
    this.menuOpen = open;
  }

  toggleSkill(id: string) {
    this.skillsOpen = new Set(
      this.skillsOpen.has(id) ? [] : [id]
    );
  }

  setTab(tab: 'education' | 'work') {
    this.activeTab = tab;
  }

  openModal(index: number) {
    this.activeModal = index;
  }
  closeModal() {
    this.activeModal = null;
  }

  toggleTheme() {
    this.dark = !this.dark;
    document.body.classList.toggle('dark-theme', this.dark);
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

  async submit() {
    if (this.contactForm.invalid) {
      Swal.fire(
        'Advertencia',
        'Por favor completa todos los campos.',
        'warning'
      );
      return;
    }
    const res = await fetch('https://formspree.io/f/mzbqzaad', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(
        // Object.entries(this.contactForm.value).reduce((f, [k, v]) => {
        //   f.append(k, v ?? '');
        //   return f;
        // }, new FormData())
      ),
    });
    if (res.ok) {
      this.contactForm.reset();
      Swal.fire(
        'Te escribiré pronto!',
        'Gracias por tu interés en contactarme.',
        'success'
      );
    }
  }
}

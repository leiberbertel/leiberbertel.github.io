import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

export interface PortfolioProject {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  cta: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="portfolio section" id="portfolio">
      <h2 class="section__title">Proyectos</h2>
      <span class="section__subtitle">A lo largo de mi trayectoria como Desarrollador de Software, he tenido la
        oportunidad de
        trabajar en proyectos increíbles y desafiantes. <br />
        Estos son algunos proyectos que me gustaría compartir</span>
      <swiper-container class="portfolio__container container" css-mode="true" navigation="true" pagination="true"
        loop="true">
        <swiper-slide *ngFor="let project of projects">
          <div class="portfolio__content grid">
            <img [src]="project.image" [alt]="project.alt" class="portfolio__img" />

            <div class="portfolio__data">
              <h3 class="portfolio__title">{{ project.title }}</h3>
              <p class="portfolio__description">
                {{ project.description }}
              </p>
              <a [href]="project.link" target="_blank" class="button button--flex button--small portfolio__button">
                {{ project.cta }}
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-button-next" slot="container-end">
          <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-button-prev" slot="container-end">
          <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>

        <div class="swiper-pagination" slot="container-end"></div>
      </swiper-container>
    </section>
  `,
})
export class PortfolioComponent {
  @Input() projects: PortfolioProject[] = [];
}

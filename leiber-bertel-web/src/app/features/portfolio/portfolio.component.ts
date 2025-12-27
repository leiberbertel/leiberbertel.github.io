import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="portfolio section" id="portfolio">
      <h2 class="section__title">{{ 'PORTFOLIO.TITLE' | translate }}</h2>
      <span
        class="section__subtitle"
        [innerHTML]="'PORTFOLIO.SUBTITLE' | translate"
      >
      </span>
      <div
        class="portfolio__slider container"
        *ngIf="projects.length; else emptyState"
      >
        <div class="portfolio__viewport">
          <div class="portfolio__track" [style.transform]="trackTransform">
            <article
              class="portfolio__slide"
              *ngFor="let project of projects; let index = index"
            >
              <div class="portfolio__content grid">
                <img
                  [src]="project.image"
                  [alt]="project.alt | translate"
                  class="portfolio__img"
                />

                <div class="portfolio__data">
                  <h3 class="portfolio__title">{{ project.title }}</h3>
                  <p class="portfolio__description">
                    {{ project.description | translate }}
                  </p>
                  <a
                    [href]="project.link"
                    target="_blank"
                    class="button button--flex button--small portfolio__button"
                  >
                    {{ project.cta | translate }}
                    <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="portfolio__controls" *ngIf="projects.length > 1">
          <button
            type="button"
            class="portfolio__nav portfolio__nav--prev"
            (click)="prev()"
            [attr.aria-label]="'PORTFOLIO.NAV.PREV' | translate"
          >
            <i class="uil uil-angle-left-b"></i>
          </button>

          <div class="portfolio__pagination">
            <button
              type="button"
              *ngFor="let _ of projects; let i = index"
              class="portfolio__bullet"
              [class.portfolio__bullet--active]="i === currentIndex"
              (click)="goTo(i)"
              [attr.aria-label]="
                'PORTFOLIO.NAV.GOTO' | translate : { index: i + 1 }
              "
            ></button>
          </div>

          <button
            type="button"
            class="portfolio__nav portfolio__nav--next"
            (click)="next()"
            [attr.aria-label]="'PORTFOLIO.NAV.NEXT' | translate"
          >
            <i class="uil uil-angle-right-b"></i>
          </button>
        </div>
      </div>
      <ng-template #emptyState>
        <div class="container portfolio__empty">
          <p>{{ 'PORTFOLIO.EMPTY' | translate }}</p>
        </div>
      </ng-template>
    </section>
  `,
})
export class PortfolioComponent {
  @Input() projects: PortfolioProject[] = [];

  currentIndex = 0;

  get trackTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  next() {
    if (!this.projects?.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  prev() {
    if (!this.projects?.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  goTo(index: number) {
    if (!this.projects?.length) return;
    this.currentIndex = index;
  }
}

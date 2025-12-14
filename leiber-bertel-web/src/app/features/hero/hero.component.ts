import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface HeroSocial {
  icon: string;
  href: string;
  label?: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  scrollLabel: string;
  scrollHref: string;
  imageSrc: string;
  imageAlt: string;
  social: HeroSocial[];
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home section" id="home">
      <div class="home__container container grid">
        <div class="home__content grid">
          <div class="home__social">
            <a *ngFor="let link of data.social" [href]="link.href" target="_blank" class="home__social-icon"
              [attr.aria-label]="link.label || link.href">
              <i class="{{ link.icon }}"></i>
            </a>
          </div>
          <div class="home__img">
            <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                      -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image class="home__blob-img" x="12" y="2" [attr.href]="data.imageSrc" [attr.alt]="data.imageAlt" />
              </g>
            </svg>
          </div>

          <div class="home__data">
            <h1 class="home__title">{{ data.name }}</h1>
            <h3 class="home__subtitle">{{ data.title }}</h3>
            <p class="home_description">
              {{ data.description }}
            </p>
            <a [href]="data.ctaHref" class="button button--flex">
              {{ data.ctaLabel }} <i class="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>
        <div class="home__scroll">
          <a [href]="data.scrollHref" class="home__scroll-button button--flex">
            <i class="uil uil-mouse-alt home__scroll-mouse"></i>
            <span class="home__scroll-name">{{ data.scrollLabel }}</span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  @Input({ required: true }) data!: HeroData;
}

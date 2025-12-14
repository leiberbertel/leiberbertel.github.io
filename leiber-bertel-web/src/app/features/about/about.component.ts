import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutData {
  image: string;
  description: string;
  stats: AboutStat[];
  cvLink: string;
  cvLabel: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about section" id="about">
      <h2 class="section__title">Conóceme un poco...</h2>
      <span class="section__subtitle">Lema de vida <br />
        <i><strong>Nunca parar de aprender</strong></i></span>

      <div class="about__container container grid">
        <img [src]="data.image" alt="about me" class="about__img" />

        <div class="about__data">
          <p class="about__description">
            {{ data.description }}
          </p>
          <div class="about__info">
            <div *ngFor="let stat of data.stats">
              <span class="about__info-title">{{ stat.value }}</span>
              <span class="about__info-name" [innerHTML]="stat.label"></span>
            </div>
          </div>
          <div class="about__buttons">
            <a download="" target="_blank" [href]="data.cvLink" class="button button--flex">
              {{ data.cvLabel }}<i class="uil uil-download-alt button__icon"></i> </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  @Input({ required: true }) data!: AboutData;
}

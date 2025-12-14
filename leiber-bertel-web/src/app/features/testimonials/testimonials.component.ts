import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Testimonial {
  name: string;
  role: string;
  message: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services section" id="testimonials">
      <h2 class="section__title">Testimonios</h2>
      <span class="section__subtitle">Lo que dicen de mi trabajo</span>
      <div class="services__container container grid">
        <div class="services__content" *ngFor="let testimonial of testimonials">
          <div>
            <i class="uil uil-comment-message services__icon"></i>
            <h3 class="services__title">{{ testimonial.name }}</h3>
            <span class="qualification__subtitle">{{ testimonial.role }}</span>
          </div>
          <p class="portfolio__description">
            “{{ testimonial.message }}”
          </p>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  @Input({ required: true }) testimonials: Testimonial[] = [];
}

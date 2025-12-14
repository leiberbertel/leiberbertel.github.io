import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ServiceCard {
  icon: string;
  title: string;
  bullets: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services section" id="services">
      <h2 class="section__title">Mis servicios</h2>
      <span class="section__subtitle">Mis diferentes facetas</span>
      <div class="services__container container grid">
        <div class="services__content" *ngFor="let service of services; index as i">
          <div>
            <i class="{{ service.icon }} services__icon"></i>
            <h3 class="services__title" [innerHTML]="service.title"></h3>
          </div>

          <span class="button button--flex button--small button--link services__button" (click)="openModal(i)">
            Ver más
            <i class="uil uil-arrow-right button__icon"></i>
          </span>

          <div class="services__modal" [class.active-modal]="activeModal === i">
            <div class="services__modal-content">
              <h4 class="services__modal-title" [innerHTML]="service.title"></h4>
              <i class="uil uil-times services__modal-close" (click)="closeModal()"></i>

              <ul class="services_modal-services grid">
                <li class="services__modal-service" *ngFor="let bullet of service.bullets">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    {{ bullet }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  @Input({ required: true }) services: ServiceCard[] = [];
  activeModal: number | null = null;

  openModal(index: number) {
    this.activeModal = index;
  }

  closeModal() {
    this.activeModal = null;
  }
}

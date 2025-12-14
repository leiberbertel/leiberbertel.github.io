import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact section" id="contact">
      <h2 class="section__title">¡Hablemos!</h2>
      <span class="section__subtitle">
        Mi bandeja de entrada siempre está abierta. <br />
        Si tienes alguna pregunta sobre mis servicios, o simplemente quieres
        saludarme<br />
        no dudes en contactarme.</span>

      <div class="contact__container container grid">
        <div>
          <div class="contact__information">
            <i class="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 class="contact__title">Ubicación</h3>
              <span class="contact__subtitle">Colombia - Medellín</span>
            </div>
          </div>
        </div>

        <form id="form" class="contact__form grid" [formGroup]="contactForm" (ngSubmit)="submit()">
          <div class="contact__inputs grid">
            <div class="contact__content">
              <label for="" class="contact__label">Nombre</label>
              <input name="name" type="text" class="contact__input" formControlName="name" />
            </div>

            <div class="contact__content">
              <label for="" class="contact__label">Correo</label>
              <input name="email" type="email" class="contact__input" formControlName="email" />
            </div>
          </div>

          <div class="contact__content">
            <label for="" class="contact__label">Proyecto</label>
            <input name="reason" type="text" class="contact__input" formControlName="reason" />
          </div>
          <div class="contact__content">
            <label for="" class="contact__label">Mensaje</label>
            <textarea name="message" id="" cols="0" rows="7" class="contact__input" formControlName="message"></textarea>
          </div>

          <div>
            <button type="submit" class="button button--flex">
              Enviar mensaje
              <i class="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class ContactComponent implements OnInit {
  private fb = new FormBuilder();

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    reason: ['', Validators.required],
    message: ['', Validators.required],
  });

  ngOnInit() { }

  async submit() {
    if (this.contactForm.invalid) {
      Swal.fire('Advertencia', 'Por favor completa todos los campos.', 'warning');
      return;
    }
    const res = await fetch('https://formspree.io/f/mzbqzaad', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: Object.entries(this.contactForm.value).reduce((f, [k, v]) => {
        f.append(k, v ?? '');
        return f;
      }, new FormData()),
    });
    if (res.ok) {
      this.contactForm.reset();
      Swal.fire('Te escribiré pronto!', 'Gracias por tu interés en contactarme.', 'success');
    }
  }
}

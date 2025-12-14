import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  template: `
    <section class="contact section" id="contact">
      <h2 class="section__title">{{ 'CONTACT.TITLE' | translate }}</h2>
      <span class="section__subtitle" [innerHTML]="'CONTACT.SUBTITLE' | translate">
      </span>

      <div class="contact__container container grid">
        <div>
          <div class="contact__information">
            <i class="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 class="contact__title">{{ 'CONTACT.LOCATION.TITLE' | translate }}</h3>
              <span class="contact__subtitle">{{ 'CONTACT.LOCATION.SUBTITLE' | translate }}</span>
            </div>
          </div>
        </div>

        <form id="form" class="contact__form grid" [formGroup]="contactForm" (ngSubmit)="submit()">
          <div class="contact__inputs grid">
            <div class="contact__content">
              <label class="contact__label">{{ 'CONTACT.FORM.NAME' | translate }}</label>
              <input name="name" type="text" class="contact__input" formControlName="name" />
            </div>

            <div class="contact__content">
              <label class="contact__label">{{ 'CONTACT.FORM.EMAIL' | translate }}</label>
              <input name="email" type="email" class="contact__input" formControlName="email" />
            </div>
          </div>

          <div class="contact__content">
            <label class="contact__label">{{ 'CONTACT.FORM.REASON' | translate }}</label>
            <input name="reason" type="text" class="contact__input" formControlName="reason" />
          </div>
          <div class="contact__content">
            <label class="contact__label">{{ 'CONTACT.FORM.MESSAGE' | translate }}</label>
            <textarea name="message" cols="0" rows="7" class="contact__input" formControlName="message"></textarea>
          </div>

          <div>
            <button type="submit" class="button button--flex">
              {{ 'CONTACT.FORM.SUBMIT' | translate }}
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

  constructor(private translate: TranslateService) {}

  ngOnInit() { }

  async submit() {
    if (this.contactForm.invalid) {
      Swal.fire(
        this.translate.instant('CONTACT.ALERTS.WARNING_TITLE'),
        this.translate.instant('CONTACT.ALERTS.WARNING_TEXT'),
        'warning'
      );
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
      Swal.fire(
        this.translate.instant('CONTACT.ALERTS.SUCCESS_TITLE'),
        this.translate.instant('CONTACT.ALERTS.SUCCESS_TEXT'),
        'success'
      );
    }
  }
}

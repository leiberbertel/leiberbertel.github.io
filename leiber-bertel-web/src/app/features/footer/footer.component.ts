import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocial {
  href: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer__bg">
        <div class="footer__container container grid">
          <div>
            <h1 class="footer__title">{{ title }}</h1>
            <span class="footer__subtitle">{{ subtitle }}</span>
          </div>

          <ul class="footer__links">
            <li *ngFor="let link of links">
              <a [href]="link.href" class="footer__link">{{ link.label }}</a>
            </li>
          </ul>

          <div class="footer__socials">
            <a *ngFor="let social of socials" [href]="social.href" target="_blank" class="footer__social">
              <i class="{{ social.icon }}"></i>
            </a>
          </div>
        </div>

        <p class="footer__copy">
          &#169; {{ title }}. Hecho con ♡
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() links: FooterLink[] = [];
  @Input() socials: FooterSocial[] = [];
}

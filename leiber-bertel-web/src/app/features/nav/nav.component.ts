import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface NavLink {
  id: string;
  href: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" id="header" [class.scroll-header]="showHeaderShadow">
      <nav class="nav container">
        <a href="#" class="nav__logo">Leiber Bertel</a>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item" *ngFor="let link of links">
              <a [href]="link.href" class="nav__link" [class.active-link]="activeSection === link.id">
                <i class="{{ link.icon }} nav__icon"></i>{{ link.label }}
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close" id="nav-close"></i>
        </div>

        <div class="nav__btns">
          <i class="uil change-theme" id="theme-button" [ngClass]="dark ? 'uil-moon' : 'uil-sun'" (click)="toggleTheme.emit()"></i>
          <div class="nav__toggle" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  `,
})
export class NavComponent {
  @Input() dark = false;
  @Input() showHeaderShadow = false;
  @Input() activeSection = 'home';
  @Input() links: NavLink[] = [];
  @Output() toggleTheme = new EventEmitter<void>();
}

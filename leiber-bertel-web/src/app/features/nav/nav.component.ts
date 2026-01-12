import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface NavLink {
  id: string;
  href: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <header class="header" id="header" [class.scroll-header]="showHeaderShadow">
      <nav class="nav container">
        <a href="#" class="nav__logo">Leiber Bertel</a>

        <div class="nav__menu" id="nav-menu" [class.show-menu]="navMenuOpen">
          <ul class="nav__list grid">
            <li class="nav__item" *ngFor="let link of links">
              <a
                [href]="link.href"
                class="nav__link"
                [class.active-link]="activeSection === link.id"
                (click)="handleLinkClick()"
              >
                <i class="{{ link.icon }} nav__icon"></i
                >{{ link.label | translate }}
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            id="nav-close"
            (click)="closeMenu()"
          ></i>
        </div>

        <div class="nav__btns">
          <div
            class="nav__lang"
            style="position: relative;"
            (click)="$event.stopPropagation()"
            *ngIf="!navMenuOpen"
          >
            <button
              type="button"
              class="nav__lang-trigger lang-btn"
              aria-label="Change language"
              (click)="toggleLangMenu()"
            >
              <i class="uil uil-globe"></i>
            </button>
            <ul *ngIf="langMenuOpen" class="nav__lang-menu animate">
              <li *ngFor="let lang of languages" class="lang-options">
                <button
                  type="button"
                  (click)="selectLanguage(lang.code)"
                  style="
                    width: 100%;
                    text-align: left;
                    background: transparent;
                    border: none;
                    padding: 0.5rem 0.75rem;
                    cursor: pointer;
                  "
                  [style.fontWeight]="language === lang.code ? '600' : '400'"
                >
                  {{ lang.label }}
                </button>
              </li>
            </ul>
          </div>
          <i
            class="uil change-theme"
            id="theme-button"
            [ngClass]="dark ? 'uil-moon' : 'uil-sun'"
            (click)="toggleTheme.emit()"
          ></i>
          <div
            class="nav__toggle"
            id="nav-toggle"
            (click)="toggleMenu($event)"
            *ngIf="!navMenuOpen"
          >
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @Input() dark = false;
  @Input() showHeaderShadow = false;
  @Input() activeSection = 'home';
  @Input() links: NavLink[] = [];
  @Input() language = 'es';
  @Input() languages: { code: string; label: string }[] = [];
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() languageChange = new EventEmitter<string>();

  langMenuOpen = false;
  navMenuOpen = false;

  @HostListener('document:click')
  closeLangMenu() {
    this.langMenuOpen = false;
  }

  toggleLangMenu() {
    this.langMenuOpen = !this.langMenuOpen;
  }

  selectLanguage(code: string) {
    this.languageChange.emit(code);
    this.langMenuOpen = false;
  }

  toggleMenu(event?: MouseEvent) {
    this.navMenuOpen = !this.navMenuOpen;
    this.langMenuOpen = false;
    event?.stopPropagation();
  }

  closeMenu() {
    this.navMenuOpen = false;
    this.langMenuOpen = false;
  }

  handleLinkClick() {
    this.closeMenu();
  }
}

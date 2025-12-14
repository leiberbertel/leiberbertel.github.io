import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly defaultLang = 'es';
  readonly supportedLangs = ['es', 'en', 'pt'];

  constructor(private translate: TranslateService) {
    translate.addLangs(this.supportedLangs);
    translate.setDefaultLang(this.defaultLang);

    const storedLang = localStorage.getItem('lang');
    const browserLang = translate.getBrowserLang();
    const initialLang = this.resolveLang(storedLang || browserLang);

    this.use(initialLang);
  }

  use(lang: string) {
    const nextLang = this.resolveLang(lang);
    this.translate.use(nextLang);
    localStorage.setItem('lang', nextLang);
  }

  get currentLang() {
    return this.translate.currentLang || this.translate.getDefaultLang();
  }

  private resolveLang(lang?: string | null) {
    if (lang && this.supportedLangs.includes(lang)) {
      return lang;
    }
    return this.defaultLang;
  }
}

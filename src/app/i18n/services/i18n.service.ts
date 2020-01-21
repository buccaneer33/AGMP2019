import { Injectable } from '@angular/core';

// SERVICES
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
    constructor(public translate: TranslateService) {}

    public setLanguage(language: string) {
      this.translate.setDefaultLang(language);
      this.translate.use(language);
    }
}

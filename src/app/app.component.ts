import { Component, OnInit } from '@angular/core';
import { AutorisationService } from './auth/services/autorisation.service';
import { I18nService } from './i18n/services/i18n.service';
import { RouterService } from './commons/services/router.service';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        public autorisation: AutorisationService,
        private i18nService: I18nService,
        private routerService: RouterService,
    ) {}

    ngOnInit() {
        this.initLangulage();
    }

    private initLangulage() {
        const query = this.routerService.getQueryParams(document.location.search);

        if (query['l'] !== undefined) {
            const locale = query['l'];
            environment.language.langs.forEach(lang => {
                if (lang === locale) {
                    this.i18nService.setLanguage(locale);
                } else {
                    this.i18nService.setLanguage(environment.language.defaultLang);
                }
            });
        } else {
            this.i18nService.setLanguage(environment.language.defaultLang);
        }
    }
}

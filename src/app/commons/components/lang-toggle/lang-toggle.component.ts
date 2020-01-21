import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lang-toggle',
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.scss']
})
export class LangToggleComponent implements OnInit {
    public currentLang: string = 'ru';

    constructor(
        public translate: TranslateService,
        private router: Router
        ) { }

    ngOnInit() {
        this.translate.onLangChange.subscribe( (event: LangChangeEvent) => {
            this.currentLang = event.lang;
            this.changeLang();
        });
    }
    public changeLang(): void {
        this.translate.use(this.currentLang);
    }

    public onChange(lang): void {
        const params = { l: lang };
        this.router.navigate([], {
            queryParams: params
        }).then(() => window.location.reload());
    }
}

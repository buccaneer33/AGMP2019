import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'src/app/auth/services/autorisation.service';
import { Router } from '@angular/router';
import { ModalsServiceService } from '../../../modals/services/modals-service.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.redusers';
import { selectAuthToken, selectAuthUser } from '../../../store/selectors/auth.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    public username$: Observable<string>;
    public isAuthenticated$: Observable<boolean>;

    constructor(
        public autorisation: AutorisationService,
        private router: Router,
        private modalsService: ModalsServiceService,
        private store: Store<AppState>,
    ) { }

    ngOnInit() {
        this.username$ = this.store
            .select(selectAuthUser)
            .pipe(map(user => user ? user.name.first + ' ' + user.name.last : ''));

        this.isAuthenticated$ = this.store
            .select(selectAuthToken)
            .pipe(map(token => !!token));
    }

    logout() {
        this.modalsService.showPopup({
            displayComponent: 'confirm-popup',
            buttons: {
                ok: true,
                cancel: true
            },
            popupData: 'Do you want logout?'
        }).subscribe( result => {
            if (result.status) {
                this.autorisation.logout();
                this.router.navigate(['/login']);
            }
        });
    }
}

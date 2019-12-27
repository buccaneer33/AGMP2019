import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutorisationService } from '../services/autorisation.service';
import { State } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.redusers';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private state: State<AppState>,
        private router: Router
        ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): | Observable<boolean | UrlTree>
           | Promise<boolean | UrlTree>
           | boolean | UrlTree {
            if (this.state.getValue().auth.token) {
                return true;
                }
            this.router.navigate(['/login']);
            return false;
    }
}

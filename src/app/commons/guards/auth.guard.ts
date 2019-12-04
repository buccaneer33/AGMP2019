import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorisationService } from '../services/autorisation.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private auth: AutorisationService,
        private router: Router
        ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): Observable<boolean> | boolean {
        if (!this.auth.isAutificated()) {
            this.router.navigateByUrl('/login');
            return false;
        } else {
            return true;
        }
    }
}

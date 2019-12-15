import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppEventService } from '../services/app-event.service';

@Injectable()
export class HttpRequestOverlayInterceptor implements HttpInterceptor {

    constructor(private injector: Injector, private event: AppEventService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.event.httpRequestEvent$.next( true );

        return next.handle(req).pipe(
            tap(
                (response: HttpEvent<any>) => {
                    if (response instanceof HttpResponse) {
                        this.event.httpRequestEvent$.next( false );
                    }
                },
                (errorResponse) => {
                    this.event.httpRequestEvent$.next( false );
                }
            )
        );
    }
}


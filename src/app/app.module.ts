import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { ModalsModule } from './modals/modals.module';
import { CoreModuleModule } from './core-module/core-module.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutorisationService } from './auth/services/autorisation.service';
import { AuthInterceptor } from './auth/interceptors/AuthInterceptor';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.redusers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonsModule,
        ModalsModule,
        CoreModuleModule,
        AppRoutingModule,
        AuthModule,
        StoreModule.forRoot( appReducers ),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [
        AutorisationService, {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

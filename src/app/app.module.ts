import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { ModalsModule } from './modals/modals.module';
import { CoreModuleModule } from './core-module/core-module.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutorisationService } from './commons/services/autorisation.service';
import { AuthInterceptor } from './commons/interceptors/AuthInterceptor';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonsModule,
        ModalsModule,
        CoreModuleModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        AutorisationService, {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

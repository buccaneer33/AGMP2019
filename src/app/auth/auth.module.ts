import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { AutorisationService } from './services/autorisation.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AutorisationService],
  exports: [LoginPageComponent]
})
export class AuthModule { }

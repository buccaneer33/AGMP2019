// COMMONS
import { BreadcrumpsComponent } from 'src/app/commons/components/breadcrumps/breadcrumps.component';
import { CopyRightsComponent } from 'src/app/commons/components/copy-rights/copy-rights.component';
import { LoginFormComponent } from 'src/app/commons/components/login-form/login-form.component';
import { LogoComponent } from 'src/app/commons/components/logo/logo.component';
import { SearchBarComponent } from 'src/app/commons/components/search-bar/search-bar.component';

// Cource LIST
import {
    CourceItemComponent
} from './core-module/cource-list/components/cource-item/cource-item.component';
import {
    ItemsListComponent
} from './core-module/cource-list/components/items-list/items-list.component';

// MARKUP
import {
    FooterComponent
} from 'src/app/core-module/page-markup/components/footer/footer.component';
import {
    HeaderComponent
} from 'src/app/core-module/page-markup/components/header/header.component';

export const APP_DECLARATIONS = [
    BreadcrumpsComponent,
    CopyRightsComponent,
    LoginFormComponent,
    LogoComponent,
    SearchBarComponent,
    CourceItemComponent,
    ItemsListComponent,
    FooterComponent,
    HeaderComponent
];

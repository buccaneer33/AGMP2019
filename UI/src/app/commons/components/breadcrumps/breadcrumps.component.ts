import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';

interface BreadCrumb {
    url: string;
    label: any;
}

@Component({
    selector: 'app-breadcrumps',
    templateUrl: './breadcrumps.component.html',
    styleUrls: ['./breadcrumps.component.scss']
})
export class BreadcrumpsComponent implements OnInit {

    public breadcrumbs: BreadCrumb[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
      ) {
    }
    ngOnInit() {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            distinctUntilChanged(),
        ).subscribe(() => {
            this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        });
    }

    buildBreadCrumb(
        route: ActivatedRoute,
        url: string = '',
        breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {

        let labelStr = route.routeConfig && route.routeConfig.data ?
            route.routeConfig.data.breadcrumb : '';
        let path = route.routeConfig && route.routeConfig.data ?
            route.routeConfig.path : '';

        const lastRoutePart = path.split('/').pop();
        const isDynamicRoute = lastRoutePart.startsWith(':');
        if (isDynamicRoute && !!route.snapshot) {
          const paramName = lastRoutePart.split(':')[1];
          path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
          labelStr = route.snapshot.params[paramName];
        }

        const nextUrl = path ? `${url}/${path}` : url;

        const breadcrumb: BreadCrumb = {
            label: labelStr,
            url: nextUrl,
        };
        if (Number(breadcrumb.label)) {
            breadcrumb.label = breadcrumb.label ? 'Edit' : 'Create';
        }

        const newBreadcrumbs = breadcrumb.label ?
            [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }
}

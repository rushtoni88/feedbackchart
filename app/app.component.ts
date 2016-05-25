import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { LeadService } from './lead.service';
import { LeadsComponent } from './leads.component';
import { DashboardComponent } from './dashboard.component';
import { LeadDetailComponent } from './lead-detail.component';
import { LeadFormComponent } from './lead-form.component';
import { ChartComponent } from './chart.component';

@Component({
    selector: 'my-app',
    template: `
        <h1 class="title">{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Leads']">Leads</a>
            <a [routerLink]="['Charts']">Charts</a>
        </nav>
        <enquiry-form></enquiry-form>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, LeadFormComponent],
    providers: [
      ROUTER_PROVIDERS,
      LeadService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/leads',
        name: 'Leads',
        component: LeadsComponent
    },
    {
        path: '/charts',
        name: 'Charts',
        component: ChartComponent
    },
    {
        path: 'detail/:id',
        name: 'LeadDetail',
        component: LeadDetailComponent
    }
])
export class AppComponent {
        title = 'Customer HQ';
    }
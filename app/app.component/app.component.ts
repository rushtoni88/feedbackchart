import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { LeadService } from '../lead.service/lead.service';
import { LeadsComponent } from '../leads.component/leads.component';
import { DashboardComponent } from '../dashboard.component/dashboard.component';
import { LeadDetailComponent } from '../lead-detail.component/lead-detail.component';
import { LeadFormComponent } from '../lead-form.component/lead-form.component';
import { ChartComponent } from '../chart.component/chart.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="title container">
            <img class="col-md-4" id="globe-img" src="app/img/globe.png">
            <h1 class="col-md-8">{{title}}</h1>
        <nav class="col-md-12">
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Leads']">Leads</a>
            <a [routerLink]="['Charts']">Charts</a>
        </nav>
        </div>
        <router-outlet></router-outlet>
        
    `,
    styleUrls: ['app/app.component/app.component.css'],
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
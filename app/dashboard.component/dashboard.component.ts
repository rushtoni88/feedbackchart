import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Lead } from '../lead/lead';
import { LeadService } from '../lead.service/lead.service';
import { ChartComponent } from '../chart.component/chart.component';
import { LeadFormComponent } from '../lead-form.component/lead-form.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component/dashboard.component.html',
    styleUrls: ['app/dashboard.component/dashboard.component.css'],
    directives: [LeadFormComponent, ChartComponent]
})
export class DashboardComponent implements OnInit {
    
    leads: Lead[] = [];
    
    constructor(
        private leadService: LeadService,
        private router: Router) { }
    
    ngOnInit() {
        this.leadService.getLeads().then(leads => this.leads = leads.slice(1,5));
    }
    
    gotoDetail(lead: Lead) {
        let link = ['LeadDetail', {id: lead.id}];
        this.router.navigate(link);
    }
}
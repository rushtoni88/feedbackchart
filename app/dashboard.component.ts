import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Lead } from './lead';
import { LeadService } from './lead.service'

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
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
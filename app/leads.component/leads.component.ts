import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Lead } from '../lead/lead';
import { LeadDetailComponent } from '../lead-detail.component/lead-detail.component';
import { LeadService } from '../lead.service/lead.service'


@Component({
    selector: 'my-leads',
    templateUrl: 'app/leads.component/leads.component.html',
    styleUrls: ['app/leads.component/leads.component.css'],
    directives: [LeadDetailComponent],
})

export class LeadsComponent implements OnInit {

    title = 'Lead Manager';
    leads: Lead[];
    selectedLead: Lead;

    constructor(
        private leadService: LeadService,
        private router: Router
        ) { }

    getLeads() {
        this.leadService.getLeads().then(leads => this.leads = leads);
    }

    ngOnInit() {
        this.getLeads();
    }

    onSelect(lead: Lead) { this.selectedLead = lead; }
    
    gotoDetail() {
        this.router.navigate(['LeadDetail', { id: this.selectedLead.id }])
    }

}


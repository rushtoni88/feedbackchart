import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Lead } from './lead';
import { LeadService } from './lead.service';

@Component({
    selector: 'my-lead-detail',
    templateUrl: 'app/lead-detail.component.html'
})
export class LeadDetailComponent implements OnInit {
    
    @Input()
    lead: Lead;
    
    constructor(
        private leadService: LeadService,
        private routeParams: RouteParams) { }
        
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.leadService.getLead(id)
            .then(lead => this.lead = lead);
    }
    
    goBack() {
        window.history.back();
    }
        
}
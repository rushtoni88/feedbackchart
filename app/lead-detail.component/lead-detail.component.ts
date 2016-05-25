import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Lead } from '../lead/lead';
import { LeadService } from '../lead.service/lead.service';

@Component({
    selector: 'my-lead-detail',
    templateUrl: 'app/lead-detail.component/lead-detail.component.html',
    styleUrls: ['app/lead-detail.component/lead-detail.component.css']
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
import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { Lead } from './lead';

@Component({
    
    selector: 'enquiry-form',
    templateUrl: 'app/lead-form.component.html'
    
})
export class LeadFormComponent {
    
    enquirytype: string[] = ['Development', 'Migration', 'Support', 'Other',];
    
    model = new Lead(9, "Example", "example@example.co.uk", "Company Name", "New Enquiry", "Empty");
    
    submitted = false;
    
    onSubmit() { this.submitted = true; }
    
    get diagnostic() { return JSON.stringify(this.model)}
    
    active = true;

    newLead() {
    this.model = new Lead(10, "", "", "", "Not sure", "Don't know");
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
    
}
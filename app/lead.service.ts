import { Injectable } from '@angular/core';

import { Lead } from './lead';
import { LEADS } from './mock-leads';

@Injectable()
export class LeadService {
    
    getLeads() {
        return Promise.resolve(LEADS);
    }
    
    getLeadsSlowly() {
        return new Promise<Lead[]>(resolve =>
                setTimeout(()=>resolve(LEADS), 1000) // 2 seconds
        );
    }
    
    getLead(id: number) {
        return Promise.resolve(LEADS).then(
                heroes => heroes.filter(lead => lead.id === id)[0]
        );
    }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { Location } from './location.model';

@Component({
    selector: 'app-alphaNumeric-messageKey-template-driven-validation-directives',
    templateUrl: './alpha-numeric-message-key.component.html'
})
export class AlphaNumericMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    location: Location
	
    constructor(
    ) { }

    ngOnInit() {
       this.location= new Location()
    }
}

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-formtest',
    templateUrl: './formtest.component.html',
    styleUrls: ['./formtest.component.css'],
})
export class FormtestComponent implements OnInit {

    formtest: FormGroup;

    public result = '';

    firstName = new FormControl('', Validators.required);
    email = new FormControl('', [this.validateEmail]);

    constructor(fb: FormBuilder) {
        this.formtest = fb.group({
            'firstName': this.firstName,
            'email': this.email,
        });
    }
    onSubmitModelBased() {
        console.log('model-based form submitted');
        console.log(this.formtest);
        this.result = 'Submited ' + this.formtest.value.firstName;
    }

    validateEmail(c: FormControl) {
        if (c.value.includes('@', 1) && !c.value.includes('mailinator', 1)) {
            return null;
        } else {
            return {
                validateEmail: true
            };
        }
    }

    ngOnInit() {
    }

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.scss', '../app.component.scss']
})
export class FormHandlingComponent {
    hide           : boolean = true;
    hideRepassword : boolean = true;
    form           : FormGroup;
    name           = new FormControl('', [Validators.required, Validators.email]);
    email          = new FormControl('', [Validators.required, Validators.email]);
    password       = new FormControl('', [Validators.required]);
    repassword     = new FormControl('', [Validators.required]);


    constructor(
        private fb       : FormBuilder,
        private _snackBar: MatSnackBar
    ){
        this.form = this.fb.group({
            name        : ['', [Validators.required]],
            email       : ['', [Validators.required, Validators.email]],
            password    : ['', [Validators.required, Validators.minLength(8)]],
            repassword  : ['', [Validators.required]],
        },{
            validators  : this.passwordMatchValidator
        });
    }

    hasError(controlName: string, errorName: string) {
        const control = this.form.get(controlName);
        return control?.hasError(errorName) && control.touched;
    }

    passwordMatchValidator(form: FormGroup) {
        const password   = form.get('password')?.value;
        const repassword = form.get('repassword')?.value;
        return password === repassword ? null : { passwordMismatch: true };
    }

    onSubmit() {
        if (this.form.valid) {
            this._snackBar.open(`Hallo ${this.form?.value?.name}`, 'x', {
                horizontalPosition  : 'right',
                verticalPosition    : 'top',
            });        
            this.form.reset();
        } else {
            console.error('Form is invalid', this.form);
        }
    }
  
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-state-management',
    templateUrl: './state-management.component.html',
    styleUrls: ['./state-management.component.scss', '../app.component.scss']
})
export class StateManagementComponent {
    count            : number = 0;
    durationInSeconds: number = 5;

    constructor(private _snackBar: MatSnackBar){}

    handleIncrement(): void {
        this.count++;
    }
      
    handleDecrement(): void {
        if (this.count > 0) {
            this.count--;
        } else {
            this.openSnackBar();
        }
    }

    openSnackBar(){
        this._snackBar.open('Number can\'t less than zero', 'x', {
            horizontalPosition  : 'right',
            verticalPosition    : 'top',
        });
    }
}

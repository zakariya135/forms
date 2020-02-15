import { EnrollmentService } from './enrollment.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    topics = ['Angular','Java','React'];

    userModel = new User('zakariya','zakariya4444@gmail.com',8688879177,'','morning',true);
    
    errorMsg= '';
    constructor(private value:EnrollmentService) { }

    ngOnInit() { }
    onSubmit(){
        this.value.enroll(this.userModel)
        .subscribe(
            data => console.log('success!',data),
            error => this.errorMsg= error.statusText
        )

    }
}
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { EnrollmentService } from './enrollment.service';



@NgModule({
    imports: [BrowserModule,FormsModule,HttpClientModule],
    exports: [],
    declarations: [AppComponent],
    providers: [EnrollmentService],
    bootstrap: [AppComponent]
})
export class AppModule { }

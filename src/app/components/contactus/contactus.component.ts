import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FilteationrServiceService } from '../../core/filteationr-service.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

  constructor(private _filteration :FilteationrServiceService){  }

  errMsg :string = '';
  isLoading :boolean = false;

  email:string = 'upskilling@gmail.com';
  phone:string = '+201154932137';


  contactForm:FormGroup = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    
  })




  handleForm():void{
    const userData = this.contactForm.value;
    console.log(userData);
    this.isLoading = true;

    if (this.contactForm.valid === true) {
      this._filteration.register(userData).subscribe({
        next:(response)=>{
          console.log(response.message);
          if (response.message === "Email sent successfully") {
            this.isLoading =false;
          }
        },
        error:(err)=> {
          this.errMsg = err.error.message;
          this.isLoading =false;
        }
      })
    }
  }
}

import { Component } from '@angular/core';


@Component({

  selector: 'app-user-form',

  templateUrl: './user-form.component.html',

  styleUrls: ['./user-form.component.css']

})

export class UserFormComponent {

  user = { name: '', mobile: '', pincode: '', email: '' };


  onSubmit() {

	if (this.user.name && this.user.mobile && this.user.pincode && this.user.email) {

  	alert('Form submitted successfully!');

  	console.log(this.user);

	}

  }

}
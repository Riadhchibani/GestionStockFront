import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  signup(nom: string, prenom: string, email: string, password: string, username: string, birthDate: string) {
    console.log(nom, prenom, email, password, username, birthDate);
  }

  ngOnInit(): void {
  }

}

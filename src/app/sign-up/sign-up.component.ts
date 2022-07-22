import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) { }

  signup(nom: string, prenom: string, email: string, password: string, username: string, birthDate: string) {
    const user = {} as User;
    user.firstName = prenom;
    user.lastName = nom;
    user.email = email;
    user.password = password;
    user.username = username;
    user.birthDate = birthDate;

    this.userService.addUser(user).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
  }

}

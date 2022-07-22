import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  login(username: string, password: string) {
    console.log(username,password);
    this.userService.login(username, password).subscribe(
      data => {
        console.log(data);
        if(data.idUser != null){
          localStorage.setItem("user", JSON.stringify(data));
          this.router.navigate(['manageProduct/' + data.username]);
          console.log(username,password);
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-simple-async',
  templateUrl: './simple-async.component.html',
  styleUrls: ['./simple-async.component.scss']
})
export class SimpleAsyncComponent implements OnInit {

  //Declare the observable which holds users list
  users$:Observable<User[]>;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    //get the observable from the service and thats it here, use users$ directly in html
    this.users$ = this.usersService.getUsers$();
  }

}

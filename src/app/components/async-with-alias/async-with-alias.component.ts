import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, USerPagination } from 'src/app/models/user';
import { UsersPageService } from 'src/app/services/users-page.service';

@Component({
  selector: 'app-async-with-alias',
  templateUrl: './async-with-alias.component.html',
  styleUrls: ['./async-with-alias.component.scss']
})
export class AsyncWithAliasComponent implements OnInit {

  //Declare the observable which holds user page object
  usersPage$:Observable<USerPagination>; 

  constructor(private usersPageService:UsersPageService) { }

  ngOnInit(): void {
    //get the observable from the service
    this.usersPage$ = this.usersPageService.getUsersWithPagination$();
  }

  //simple business logic
  greetEvent(user:User){
    const prefix = user.gender.toLowerCase() == 'male' ? 'Mr.' : 'Ms.';
    alert(`Welcome ${prefix}${user.name}`);
  }

}

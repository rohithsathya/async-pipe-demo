import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-without-async',
  templateUrl: './without-async.component.html',
  styleUrls: ['./without-async.component.scss']
})
export class WithoutAsyncComponent implements OnInit,OnDestroy {

  //manage state - Problem #1
  users:User[];
  subscription:Subscription;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    //code is less readable and complex - Problem #2
    this.subscription = this.usersService.getUsers$().subscribe((users)=>{this.users = users});
  }

  ngOnDestroy(): void{
    //We should un-subscribe manually - Problem #3
    this.subscription.unsubscribe();
  }

}

import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User, USerPagination } from "../models/user";

//Simple Angular service which mocks Http/REST call by returning dummy data
@Injectable({providedIn:'root'})
export class UsersPageService{

    //Returns an Observable consisting of list of users in the form of Page
    getUsersWithPagination$():Observable<USerPagination>{
        //hardcoded dummy data
        const users:User[] = [
            {id:1,name:'Sheldon',age:30,gender:'Male'},
            {id:2,name:'Penny',age:31,gender:'Female'},
            {id:3,name:'Howard',age:33,gender:'Male'}
        ];
        //hardcoded dummy page
        let page:USerPagination = {
            count:20,
            users:users
        };

        //wrap the page object in an Observable using of(rxjs method) and return it
        return of(page);
    }


}
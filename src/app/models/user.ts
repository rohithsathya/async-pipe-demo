export interface User{
    id:number;
    name:string;
    age:number;
    gender:string;
}

export interface USerPagination{
    count:number;
    users:User[]
}
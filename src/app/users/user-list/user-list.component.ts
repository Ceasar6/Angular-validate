import { Component, OnInit } from '@angular/core';
import {IUser} from '../../iuser';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  message: string;
  userFilter: IUser[] = [];
  newId: number;
  newName: string;
  newAddress: string;
  newEmail: string;

  updateId: number;
  updateName: string;
  updateAddress: string;
  updateEmail: string;


  users: IUser[] = [{
    id: 1,
    name: 'Jame1',
    address: 'New York',
    email: 'Jame1@gmail.com'
  },
    {
      id: 2,
      name: 'Jame2',
      address: 'New York',
      email: 'Jame2@gmail.com'
    },
    {
      id: 3,
      name: 'Jame3',
      address: 'New York',
      email: 'Jame3@gmail.com'
    },
    {
      id: 4,
      name: 'Jame4',
      address: 'New York',
      email: 'Jame4@gmail.com'
    },
    {
      id: 5,
      name: 'Jame5',
      address: 'New York',
      email: 'Jame5@gmail.com'
    }];
  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users;
  }
  // tslint:disable-next-line:typedef
  search(event) {

    console.log(event);
    this.userFilter = (event) ? this.filterUser(event) : this.users;
  }


  // tslint:disable-next-line:typedef
  filterUser(keyword)
  {
    return this.users.filter(user => {
      // tslint:disable-next-line:triple-equals
      return user.name.toLowerCase().indexOf(keyword) != -1;
    });
  }
  // tslint:disable-next-line:typedef
  delete(id){

    const index = this.userFilter.findIndex(userFilter => userFilter.id === id );
    console.log(index);
    this.userFilter.splice(index, 1);
    this.message = 'Xoa thanh cong!!';
  }

  // tslint:disable-next-line:typedef
  add(){
  this.userFilter.unshift({
    id: this.newId ,
    name: this.newName,
    address: this.newAddress,
    email: this.newEmail
  });
  this.newName = '';
  this.newAddress = '';
  this.newEmail = '';
  }

  // tslint:disable-next-line:typedef
  edit(id){
   const index = this.userFilter.findIndex(userFilter => userFilter.id === id);
   this.updateId = this.userFilter[index].id;
   this.updateName = this.userFilter[index].name;
   this.updateAddress = this.userFilter[index].address;
   this.updateEmail = this.userFilter[index].email;
   console.log(this.updateId);
  }

  // tslint:disable-next-line:typedef
  update(id){
      console.log(id);
      const index = this.userFilter.findIndex(userFilter => userFilter.id === id);
      this.userFilter.splice(index, 1, {
      id: this.updateId,
      name: this.updateName,
      address: this.updateAddress,
      email: this.updateEmail
    });
  }
}




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
userDetails;
readonly BaseURI = 'http://localhost:63262/api';
movieList =[];

  constructor(private router: Router, private service: UserService,private http : HttpClient) { 
    
    this.http.get(this.BaseURI +'/movies').toPromise().then( data =>{
      console.log(data);

      for(let key in data)
        if (data.hasOwnProperty(key))
          this.movieList.push(data[key]);
    });
  }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  
}

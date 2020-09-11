import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userDetails;
readonly BaseURI = 'http://localhost:63262/api';
movieList =[];
detailsForm: FormGroup;

  constructor(private modalService: NgbModal,private router: Router, private service: UserService,private http : HttpClient,private fb: FormBuilder) { 
    

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
    this.detailsForm = this.fb.group({
      title: [''],
      director: [''],
      description: [''],
      year: [''],
      url: ['']
     });
  }

  openModal(targetModal, movie) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   debugger
    this.detailsForm.patchValue({
     title: movie.title,
     director: movie.director,
     description: movie.description,
     year: movie.year,
     url: movie.imageUrl
    });
   }



  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  onSubmit() {
    this.modalService.dismissAll();
    console.log("res:", this.detailsForm.getRawValue());
   }
}

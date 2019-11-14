import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  profileForm: FormGroup;
  sss: ArrayBuffer;
  public posts = {};

  constructor(public router:Router,public service:ApiService) { 


  // profileForm = new FormGroup({
  //   Name: new FormControl(''),
  //   title: new FormControl(''),
  //   Auther: new FormControl('')
  // })
  this.profileForm = new FormGroup({
     id:  new FormControl(''),
    name:  new FormControl(''),
    title:new FormControl(''),

    Auther: new FormControl(''),


});}
  
  ngOnInit() { 
    // this.submit()
  }
  submit(){
    console.log(this.profileForm.value)
  this.service.postdata(this.profileForm.value).subscribe(res=>{
console.log(res)
    // this.sss=res
// console.log(this.res)
// this.router.navigate(['']);

  })
  
  
}}



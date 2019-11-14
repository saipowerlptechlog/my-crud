import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // stuID: any;
  // eeiit: any;
  public stuID ='';
  public eeiit = {};

  constructor(public ser:ApiService,private router: Router,private route: ActivatedRoute,) { 
    this.stuID = route.snapshot.params['id'];
console.log('check stuid',this.stuID)
  }

  ngOnInit() {
    this.ser.editProduct(this.stuID).subscribe(res=>{
      console.log("check ngmodel name",res)
      this.eeiit=res
    })
  }


  editProduct(){
console.log()
this.ser.ubdate(this.eeiit, this.stuID).subscribe(res=>{
console.log(res)
})
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  display: any;
  searchText;
  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getdata()
  }
getdata(){
this.service.sai().subscribe(res=>{
  console.log(res)
  this.display=res
})

}
delt(s){
  console.log(s)
  this.service.dell(s).subscribe(res=>{
    console.log(res)
  })

}

edt(i){
  console.log(i)

}
}

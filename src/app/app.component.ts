import {Component} from '@angular/core';
import  {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular practice';
  data = 10;

  updateChild(){
    this.data = Math.floor(Math.random() * 10)
  }

  // userData:any = {};
  //
  // getData(data:NgForm) {
  //   console.log(data);
  //   this.userData = data;
  // }

  // list:any[] = [];
  //
  // addData(item:string) {
  //
  //   this.list.push({id:this.list.length , name: item});
  //   console.log(this.list);
  // }
  //
  // removeTask(id:number) {
  //   console.warn(id);
  //
  //   this.list=this.list.filter(item => item.id !== id)
  // }

}



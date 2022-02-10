import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bhavdip';

  demo(name:any , second:any) {
    alert("Bhavdip");
    alert("Mandani");
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {

  constructor(private appService: AppService) {}
  acronymName : string = "";
  protected users$: Observable<any[]>;
 
  searchAcronym(acronym){
    console.log(acronym);
    this.appService.searchAcronym(acronym).subscribe(res => {
      console.log(acronym);
      this.users$ = res;
    });
  }
  

  }


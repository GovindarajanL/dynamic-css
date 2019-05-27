import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-disp-comp',
  templateUrl: './disp-comp.component.html',
  styleUrls: ['./disp-comp.component.css']
})
export class DispCompComponent implements OnInit {
  cssUrl: string;

  constructor(private router: Router,private sanitizer: DomSanitizer) {}

    ngOnInit() {
        //this.href = this.router.url;
        console.log(this.router.url);
        if(this.router.url == '/yahoo'){
          this.cssUrl = '/assets/yahoo.css';
        }else{
          this.cssUrl = '/assets/google.css';
        }
        let element = document.createElement('link');
                element.rel = "stylesheet";
                element.href = '../app.component.css';
    }

    getCssTemplate(){
      
    }

}

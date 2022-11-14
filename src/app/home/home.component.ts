import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c5c-aCwAHKc");
  }

  ngOnInit(): void {
  }

}

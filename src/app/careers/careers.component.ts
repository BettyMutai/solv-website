import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.4e4301f2a1689cffad29524dc9218188.js');
    this.loadScript('/assets/js/script.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}

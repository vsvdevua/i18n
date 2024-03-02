import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Your Receipt';

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }
}

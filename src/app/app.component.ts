import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  buttonAClick(tooltip) {
    console.log(tooltip);
    //tooltip.toggle();
  }

  buttonBClick(tooltip) {
    console.log(tooltip);
    //tooltip.toggle();
  }
}

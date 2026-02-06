import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.html',
  styleUrl: './app.css', 
  imports: [
    RouterOutlet, 
    SecondComponentComponent, 
    ThirdComponentComponent, 
    FourthComponentComponent
  ],
})
export class App {
  protected readonly title = signal('Nola-Alessandro-filaB');
  nola = 'app';
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SideBar } from './components/side-bar/side-bar';
import "ionicons"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ares');
}

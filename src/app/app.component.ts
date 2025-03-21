import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  socialMedia = [
    { name: 'Mail', icon: 'assets/contact/mail.png', link:'mailto: i.koinaris@gmail.com' },
    { name: 'LinkedIn', icon: 'assets/contact/linkedin.png', link: 'https://www.linkedin.com/in/ikoinaris/' },
    /*{ name: 'X', icon: 'assets/contact/x.png', link: 'https://x.com/ikoinaris' },*/
    { name: 'GitHub', icon: 'assets/contact/git.png', link: 'https://github.com/ikoinaris' }
  ];
  
  title = 'ioannis-koinaris-software-engineer';
  menuOpen = false;
  sidebarExpanded = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  expandSidebar() {
    this.sidebarExpanded = true;
  }

  collapseSidebar() {
    this.sidebarExpanded = false;
  }
}

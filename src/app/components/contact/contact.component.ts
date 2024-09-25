import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  socialMedia = [
    { name: 'Mail', icon: 'assets/contact/mail.png', link:'mailto: i.koinaris@gmail.com' },
    { name: 'LinkedIn', icon: 'assets/contact/linkedin.png', link: 'https://www.linkedin.com/in/ikoinaris/' },
    { name: 'X', icon: 'assets/contact/x.png', link: 'https://x.com/ikoinaris' },
    { name: 'GitHub', icon: 'assets/contact/git.png', link: 'https://github.com/ikoinaris' }
  ];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentText: string = '';
  textIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typeSpeed: number = 40;
  deleteSpeed: number = 40;
  pauseTime: number = 1000;

  typeWriter() {
    const fullText = this.typewriterTexts[this.textIndex];

    if (!this.isDeleting && this.charIndex < fullText.length) {
      this.currentText = fullText.substring(0, this.charIndex + 1);
      this.charIndex++;
      setTimeout(() => this.typeWriter(), this.typeSpeed);
    } else if (this.isDeleting && this.charIndex > 0) {
      this.currentText = fullText.substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.typeWriter(), this.deleteSpeed);
    } else if (!this.isDeleting && this.charIndex === fullText.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeWriter(), this.pauseTime);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.typewriterTexts.length;
      setTimeout(() => this.typeWriter(), this.typeSpeed);
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typewriterTexts: string[] = [
    'Software Engineer',
    'Certified Scrum Master'
  ];

}

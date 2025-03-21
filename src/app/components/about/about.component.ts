import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Ensure your resume file is in the `assets` folder.
    link.download = 'Ioannis_Koinaris_Resume.pdf';
    link.click();
  }
}
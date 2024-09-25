import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillCategories = [
    { name: 'Languages', skills: [
        { name: 'Java', icon: 'assets/skills/java.png' },
        { name: 'Typescript', icon: 'assets/skills/typescript.png' },
        { name: 'JavaScript', icon: 'assets/skills/javascript.png' },
        { name: 'HTML', icon: 'assets/skills/html.png' },
        { name: 'CSS', icon: 'assets/skills/css.png' },
        { name: 'Python', icon: 'assets/skills/python.png' }
      ]
    },
    { name: 'Frameworks', skills: [
        { name: 'Spring', icon: 'assets/skills/spring.png' },
        { name: 'Quarkus', icon: 'assets/skills/quarkus.png' },
        { name: 'Angular', icon: 'assets/skills/angular.png' },
        { name: 'React', icon: 'assets/skills/react.png' },
        { name: 'Node', icon: 'assets/skills/node.png' }
      ]
    },
    { name: 'Software', skills: [
        { name: 'IntelliJ', icon: 'assets/skills/intellij.png' },
        { name: 'VS Code', icon: 'assets/skills/vscode.png' },
        { name: 'Eclipse', icon: 'assets/skills/eclipse.png' },
        { name: 'Git', icon: 'assets/skills/github.png' },
        { name: 'Docker', icon: 'assets/skills/docker.png' },
        { name: 'Jenkins', icon: 'assets/skills/jenkins.png' },
        { name: 'Postman', icon: 'assets/skills/postman.png' },
        { name: 'Bruno', icon: 'assets/skills/bruno.png' }
      ] },
    { name: 'Databases', skills: [
        { name: 'PostgreSQL', icon: 'assets/skills/postgres.png' },
        { name: 'MySQL', icon: 'assets/skills/mysql.png' },
        { name: 'MongoDB', icon: 'assets/skills/mongodb.png' }
      ]
    }
  ];

  currentSlideIndex = 0;

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.skillCategories.length;
  }

  previousSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.skillCategories.length) % this.skillCategories.length;
  }
}

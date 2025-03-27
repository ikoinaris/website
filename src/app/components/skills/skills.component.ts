import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillCategories = [
    { name: 'Programming Languages', skills: [
        { name: 'Java', icon: 'assets/skills/languages/java.png' },
        { name: 'Typescript', icon: 'assets/skills/languages/typescript.png' },
        { name: 'JavaScript', icon: 'assets/skills/languages/javascript.png' },
        { name: 'HTML', icon: 'assets/skills/languages/html.png' },
        { name: 'CSS', icon: 'assets/skills/languages/css.png' },
        { name: 'Python', icon: 'assets/skills/languages/python.png' }
      ]
    },
    { name: 'Frameworks', skills: [
        { name: 'Spring', icon: 'assets/skills/frameworks/spring.png' },
        { name: 'Quarkus', icon: 'assets/skills/frameworks/quarkus.png' },
        { name: 'Angular', icon: 'assets/skills/frameworks/angular.png' },
        { name: 'React', icon: 'assets/skills/frameworks/react.png' },
        { name: 'Node', icon: 'assets/skills/frameworks/node.png' }
      ]
    },
    { name: 'Software', skills: [
        { name: 'IntelliJ', icon: 'assets/skills/software/intellij.png' },
        { name: 'VS Code', icon: 'assets/skills/software/vscode.png' },
        { name: 'Eclipse', icon: 'assets/skills/software/eclipse.png' },
        { name: 'Git', icon: 'assets/skills/software/github.png' },
        { name: 'Docker', icon: 'assets/skills/software/docker.png' },
        { name: 'Jenkins', icon: 'assets/skills/software/jenkins.png' },
        { name: 'Postman', icon: 'assets/skills/software/postman.png' },
        { name: 'Bruno', icon: 'assets/skills/software/bruno.png' }
      ] },
    { name: 'Databases', skills: [
        { name: 'PostgreSQL', icon: 'assets/skills/databases/postgres.png' },
        { name: 'MySQL', icon: 'assets/skills/databases/mysql.png' },
        { name: 'Cosmos DB', icon: 'assets/skills/databases/cosmosdb.png' },
        { name: 'MongoDB', icon: 'assets/skills/databases/mongodb.png' }
      ]
    },
    { name: 'Cloud Providers', skills: [
      { name: 'AWS', icon: 'assets/skills/cloud/aws.png' },
      { name: 'Azure', icon: 'assets/skills/cloud/azure.png' }
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

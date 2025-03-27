import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  expertiseAreas = [
    { 
      name: 'RESTful API Development', 
      skills: [
        { name: 'Java', icon: 'assets/skills/languages/java.png' },
        { name: 'Spring', icon: 'assets/skills/frameworks/spring.png' },
        { name: 'Quarkus', icon: 'assets/skills/frameworks/quarkus.png' },
        { name: 'Node', icon: 'assets/skills/frameworks/node.png' },
      ]
    },
    { 
      name: 'Website Development', 
      skills: [
        { name: 'HTML', icon: 'assets/skills/languages/html.png' },
        { name: 'CSS', icon: 'assets/skills/languages/css.png' },
        { name: 'TypeScript', icon: 'assets/skills/languages/typescript.png' },
        { name: 'Angular', icon: 'assets/skills/frameworks/angular.png' }
      ]
    },
    { 
      name: 'CI/CD Orchestration', 
      skills: [
        { name: 'Git', icon: 'assets/skills/software/github.png' },
        { name: 'Docker', icon: 'assets/skills/software/docker.png' },
        { name: 'Jenkins', icon: 'assets/skills/software/jenkins.png' }
      ]
    },
    { 
      name: 'Cloud Services Management', 
      skills: [
        { name: 'AWS', icon: 'assets/skills/cloud/aws.png' },
        { name: 'Azure', icon: 'assets/skills/cloud/azure.png' }
      ]
    },
    { 
      name: 'Database Management', 
      skills: [
        { name: 'PostgreSQL', icon: 'assets/skills/databases/postgres.png' },
        { name: 'MySQL', icon: 'assets/skills/databases/mysql.png' },
        { name: 'CosmosDb', icon: 'assets/skills/databases/cosmosdb.png' },
        { name: 'MongoDB', icon: 'assets/skills/databases/mongodb.png' }
      ]
    }
  ];
}

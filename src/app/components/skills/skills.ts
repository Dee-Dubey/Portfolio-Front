import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = signal([
    {
      title: 'Frontend',
      icon: 'bi-code-slash',
      color: '#3b82f6', // Blue
      items: ['Angular', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Backend',
      icon: 'bi-hdd-stack',
      color: '#10b981', // Green
      items: ['Node.js', 'Express']
    },
    {
      title: 'Database',
      icon: 'bi-database',
      color: '#a855f7', // Purple
      items: ['MongoDB', 'SQL']
    },
    {
      title: 'Tools',
      icon: 'bi-wrench-adjustable',
      color: '#0ea5e9', // Sky Blue
      items: ['Git', 'REST APIs']
    }
  ]);
}

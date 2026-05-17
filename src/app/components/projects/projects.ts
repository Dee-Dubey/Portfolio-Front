import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = signal([
    {
      title: 'Loyalty Program System',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      features: ['Role-based access', 'Reward tracking', 'Dashboard analytics'],
      status: 'In Progress'
    },
    {
      title: 'Employee Management System',
      tech: ['Angular', 'Node.js'],
      features: ['CRUD + search', 'Role-based UI', 'Clean architecture'],
      status: 'Completed'
    }
  ]);
}

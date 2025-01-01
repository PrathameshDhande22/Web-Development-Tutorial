import { Component } from '@angular/core';
import { students, Student } from '../../data/student';

@Component({
  selector: 'communication',
  templateUrl: './communication.component.html',
})
export class CommunicationComponent {
  // communication between the parent component with the child component
  listofStudents: Student[] = students;
}

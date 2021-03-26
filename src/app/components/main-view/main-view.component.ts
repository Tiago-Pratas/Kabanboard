import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', 
  [new Column('Ideas', [ 
    'Some random stuff',
    'This is another',
    'Build a Kanban Board']),
    new Column('Research', [
      'Some stuff we just found out',
      'This was in the Research',
      'Lorem ipsum']),
    new Column('Todo',[
      'Have a brilliant idea',
      'Play some U.N.Squadron',
      'Go home',
      'Play some more U.N.Squadron',
    ]),
  new Column('Done', [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Delete emails',
    'Play U.N.Squadron',
  ])])

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


}

import { Component, OnInit } from '@angular/core';

import { BookTypeService } from '../bookType/book-type.service';
import { BookType } from '../bookType/book-type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  bookTypes: BookType[] = [];

  constructor(private bookTypeService: BookTypeService) {}

  ngOnInit(): void {
    this.getBookTypes();
  }

  getBookTypes(): void {
    this.bookTypeService
      .getBookTypes()
      .subscribe((bookTypes) => (this.bookTypes = bookTypes));
  }
}

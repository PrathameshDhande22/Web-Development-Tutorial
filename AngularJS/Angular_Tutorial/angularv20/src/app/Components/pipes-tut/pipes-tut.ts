import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from '../../Pipes/truncate-pipe';

@Component({
  selector: 'app-pipes-tut',
  imports: [TitleCasePipe, DatePipe, TruncatePipe],
  templateUrl: './pipes-tut.html'
})
export class PipesTut {
  public compnayName = "prathamesh Dhande"
  public datepurchased = "2024-10-20"
  public longstring = "prathamesh@gmail.com"
}

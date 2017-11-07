import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListQuoteComponent implements OnInit {
	@Input() list;
	@Output() voteEmitter=new EventEmitter();
	voteUp(idx){
		this.list[idx].rating++;
		this.voteEmitter.emit(this.list);
	}
	voteDown(idx){
		this.list[idx].rating--;
		this.voteEmitter.emit(this.list);
	}
	destroy(idx){
		this.list.splice(idx, 1);
		this.voteEmitter.emit(this.list);
	}
  constructor() { }
  ngOnInit() {
  }

}

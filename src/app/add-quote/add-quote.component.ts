import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddQuoteComponent implements OnInit {
	quote=new Quote();
	@Output() quoteEmitter = new EventEmitter();
	onSubmit(){
		this.quoteEmitter.emit(this.quote);
		this.quote=new Quote();
	}
  constructor() { }
  ngOnInit() {
  }

}

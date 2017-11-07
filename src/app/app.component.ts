import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	quotes=[];
	sortRating(){
		this.quotes.sort(function(a, b){
			return b.rating-a.rating;
		});
	}
	addQuote(quote){
		this.quotes.push(quote);
		this.sortRating();
	}
	vote(list){
		this.quotes=list;
		this.sortRating();
	}
}

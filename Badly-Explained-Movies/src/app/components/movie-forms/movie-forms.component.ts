import { Component, OnInit } from '@angular/core';
import { MovieForms } from 'src/app/models/movieforms';

@Component({
  selector: 'app-movie-forms',
  templateUrl: './movie-forms.component.html',
  styleUrls: ['./movie-forms.component.css']
})
export class MovieFormsComponent implements OnInit {
  movieForm: MovieForms = new MovieForms();
  guess: MovieForms = new MovieForms(); 
  movies: MovieForms[] = [{title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
  {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
  {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
  {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
  {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
  {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
  {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
  {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'AWOOooooooooooo goes the...'},
  {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
  {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
  {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
];
  randMovie: MovieForms = this.movies[this.getRandomMovie()];
  smth?: string = "";
  exp?: string = this.randMovie.explanation;
  result?: string = "";
  constructor() { }


  ngOnInit(): void {
  }
  checkGuess(){
    if(this.guess.title === this.randMovie.title){
      this.result = ("You got it right");
    }
    else{
      this.result = ("You got it wrong");
    }
    this.guess = new MovieForms();
  }
  showHint(){
    this.smth = this.randMovie.hint;
  }
  getRandomMovie(){
    return Math.floor(Math.random()*this.movies.length);
  }
}

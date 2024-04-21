import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Faker, en, th } from '@faker-js/faker';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  randomText: string = '';
  enteredText = '';
  faker = new Faker({ locale: [en] });

  ngOnInit() {
    this.randomText = this.getRandomText();
    this.enteredText = '';
  }

  validateText(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.enteredText = target.value;
      console.log(this.enteredText);
    }
  }

  getColor(wordLetter : string, inputLetter: string):string{
    if (!inputLetter){
      return "color:gray";
    }
    if (wordLetter === inputLetter){
      return "color:green";
    }
    return "color:red";
  }

  isWin(): boolean {
    if (this.enteredText === this.randomText) {
      return true;
    }
    return false;
  }

  getRandomText(): string {
    return this.faker.lorem.word();
  }

  tryAgain():void{
    this.ngOnInit();

  }
}

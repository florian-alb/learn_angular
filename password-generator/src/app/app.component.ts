import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password = '';
  length = 0;
  useNumbers = false;
  useLetters = false;
  useSymbols = false;

  onChangeLength(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      const parsedValue = parseInt(target.value);
      if (!isNaN(parsedValue)) {
        this.length = parsedValue;
      }
    }
  }

  onChangeUseLetters(): void {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers(): void {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols(): void {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick(): void {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@&%$£*€()';

    let possiblesCaracters = '';
    if (this.useLetters) {
      possiblesCaracters += letters;
    }

    if (this.useNumbers) {
      possiblesCaracters += numbers;
    }

    if (this.useSymbols) {
      possiblesCaracters += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * possiblesCaracters.length);
      generatedPassword += possiblesCaracters[randomIndex];
    }
    this.password = generatedPassword;
  }
}

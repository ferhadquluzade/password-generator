import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Import this
import { RouterOutlet } from '@angular/router';
import { isNumberObject } from 'util/types';
import { parse } from 'path';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  passwordLength:number = 0;
  password:string = '';
  passwordGenerated:boolean = false;
  
  letters:string = 'abcdefghijklmnopqrstuvwxyz'
  numbers:string = '01234567890'
  symbols:string = '!@#$%^&*()[]{}_-+?><|":/.,;`~±§'

  lettersIncluded:boolean = false;
  numbersIncluded:boolean = false;
  symbolsIncluded:boolean = false;

  modifyLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue))
     this.passwordLength = parsedValue;
  }

  toggleLettersUsage(){
    this.lettersIncluded = !this.lettersIncluded
  }

  toggleNumbersUsage(){
    this.numbersIncluded = !this.numbersIncluded
  }
  toggleSymbolsUsage(){
    this.symbolsIncluded = !this.symbolsIncluded
  }

  generate(){
 
    
    let basePassChars = ''

    if(this.lettersIncluded) basePassChars += this.letters;
    if(this.numbersIncluded) basePassChars += this.numbers;
    if(this.symbolsIncluded) basePassChars += this.symbols;

    let pass = '';
    for( let i = 0; i < this.passwordLength; i++)
    {
      let randomIndex = Math.floor(Math.random() * basePassChars.length)
      pass += basePassChars[randomIndex];
    }

    this.password = pass;
    this.passwordGenerated = true;
  }

  getPassword(){
    return this.password;
  }
}

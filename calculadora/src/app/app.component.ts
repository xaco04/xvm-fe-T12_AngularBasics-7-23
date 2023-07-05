import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  display: string = '';
  operacion: string = '';
  resultado: string = '';

  // metode per poder ficar els valors
  addToDisplay(value: number | string) {
    if (value === '.') {
      this.operacion += value;
    } else {
      this.operacion += value.toString();
    }
  }
  // metode per poder ficar el operador 
  addOperator(operator: string) {
    this.operacion += operator;
  }
// metode per realitzar la operacio
  calculate() {
    try {
      this.resultado = eval(this.operacion);
      this.display = this.resultado;
    } catch (error) {
      this.resultado = 'Error';
      this.display = this.resultado;
    }
  }

  clear() {
    this.display = '';
    this.operacion = '';
    this.resultado = '';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string = ``;
  date: string = ``;
  amount: number = 0 ;
  
  onNameChange($event: any){
    this.name = $event?.target?.value;
    console.log($event);

}

onDateChange($event: any){
  this.date = $event?.target?.value;
}

onAmountChange($event: any){
  const amt = $event?.target?.value;
  this.amount = parseFloat(amt);
}
}

import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-transaction-table',
  imports: [],
  templateUrl: './transaction-table.html',
  styleUrl: './transaction-table.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TransactionTable {
  dropdownVisible = signal(false);
  toggleDropDown(){
    console.log(this.dropdownVisible);
    this.dropdownVisible.set(!this.dropdownVisible());
  }
}

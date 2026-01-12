import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TransactionSummary } from '../../components/transaction-summary/transaction-summary';
import { TransactionTable } from '../../components/transaction-table/transaction-table';
@Component({
  selector: 'app-transactions',
  imports: [TransactionSummary, TransactionTable],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Transactions {

}

import { Transaction } from "./Transaction.js";

export class Caisse {
  constructor(private solde: number, private transactions: Transaction[]) {}

  getTransaction() {
    return this.transactions;
  }

  getSolde() {
    return this.solde;
  }
}

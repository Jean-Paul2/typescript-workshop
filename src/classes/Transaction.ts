export class Transaction {
  constructor(
    private type: string,
    private montant: number,
    private motif: string
  ) {}

  text() {
    return `${this.montant} on étais ${
      this.type === "Débit" ? "Rétirer" : "Déposer"
    } par ${this.motif}`;
  }
}

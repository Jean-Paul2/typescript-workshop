"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(type, montant, motif) {
        this.type = type;
        this.montant = montant;
        this.motif = motif;
    }
    text() {
        return `${this.montant} on étais ${this.type === "Débit" ? "Rétirer" : "Déposer"} par ${this.motif}`;
    }
}
exports.Transaction = Transaction;

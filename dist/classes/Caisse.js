"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caisse = void 0;
class Caisse {
    constructor(solde, transactions) {
        this.solde = solde;
        this.transactions = transactions;
    }
    getTransaction() {
        return this.transactions;
    }
    getSolde() {
        return this.solde;
    }
}
exports.Caisse = Caisse;

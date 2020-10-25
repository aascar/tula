import { getRandomId } from "../utils";
import Service from "./index";

export default class TransactionService extends Service {
  _persistKey = "_a_t_transactions";

  create = (transaction) => {
    if (transaction instanceof Transaction) {
      if (this.isExists(transaction.id)) {
        this.data = [...this.data, transaction];
      }
    }
  };
}

export class Transaction {
  id;
  entityId;
  time;
  credit;
  debit;
  remarks;
  constructor(entityId, credit, debit, remarks) {
    this.id = getRandomId();
    this.time = Date.now();
    this.entityId = entityId;
    this.credit = credit;
    this.debit = debit;
    this.remarks = remarks;
  }
}

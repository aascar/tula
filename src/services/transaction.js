import { getRandomId } from "../utils";
import Service from "./index";

export default class TransactionService extends Service {
  _persistKey = "_a_t_transactions";

  constructor(userId) {
    super(userId);
    this._persistKey = this.userId + this._persistKey;
    this.data = this.retrieve();
  }

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
  cost;
  paid;
  payment_mode;
  remarks;
  constructor(entityId, cost, paid, payment_mode, remarks, time = Date.now()) {
    this.id = getRandomId();
    this.time = +new Date(time);
    this.entityId = entityId;
    this.cost = cost;
    this.paid = paid;
    this.payment_mode = payment_mode;
    this.remarks = remarks ?? "";
  }
}

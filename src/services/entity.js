import { getRandomId } from "../utils";
import Service from "./index";

export default class EntityService extends Service {
  _persistKey = "_a_t_entities";

  create = (entity) => {
    if (entity instanceof Entity) {
      if (this.isExists(entity.id)) {
        this.data = [...this.data, entity];
      }
    }
  };
}

export class Entity {
  id;
  name;
  description;
  balance;
  opening_balance;
  constructor(name, description, opening_balance) {
    this.id = getRandomId();
    this.name = name;
    this.description = description;
    this.opening_balance = opening_balance;
    this.balance = opening_balance;
  }
}

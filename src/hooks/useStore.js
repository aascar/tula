import React from "react";
import EntityService from "../services/entity";
import TransactionService from "../services/transaction";

export default function useStore(userId, entities, transactions) {
  const ref = React.useRef({});
  React.useEffect(() => {
    let { entity, transaction } = ref.current;
    if (userId && !entity && !transaction) {
      ref.current.entity = new EntityService(userId, entities);
      ref.current.transaction = new TransactionService(userId, transactions);
    }
    if (entity && transaction) {
      entity.data = entities;
      transaction.data = transactions;
      console.log(entity, transaction);
      entity.persist();
      transaction.persist();
    }
  }, [userId, entities, transactions]);
}

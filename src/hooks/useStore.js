import React from "react";
import { CRUD } from "../constants";
import EntityService from "../services/entity";
import TransactionService from "../services/transaction";

export default function useStore(
  userId,
  entities,
  transactions,
  entityDispatcher,
  transactionDispatcher
) {
  const ref = React.useRef({});
  React.useEffect(() => {
    const { entity, transaction } = ref.current;
    if (userId && !entity && !transaction) {
      ref.current.entity = new EntityService(userId);
      ref.current.transaction = new TransactionService(userId);
      entityDispatcher({
        type: CRUD.BULK_CREATE,
        payload: ref.current.entity.data,
      });
      transactionDispatcher({
        type: CRUD.BULK_CREATE,
        payload: ref.current.transaction.data,
      });
    }
    if (ref.current.entity && ref.current.transaction) {
      if (entities.length) {
        entity.data = entities;
        entity.persist();
      }
      if (transactions.length) {
        transaction.data = transactions;
        transaction.persist();
      }
    }
  }, [userId, entities, transactions, entityDispatcher, transactionDispatcher]);
}

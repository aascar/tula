import React from "react";
import entity from "../reducers/entity";
import EntityService from "../services/entity";

export function useStore(userId) {
  const entityService = new EntityService(userId);
  // const transactionService = new EntityService(userId);
  const [entities, entityDispatcher] = React.useReducer(entity, []);
  return {
    entityDispatcher,
    entities,
  };
}

export const getRandomId = (size = 7) =>
  Math.random().toString(36).slice(-size);

export const prepareData = (entities, transactions) => {
  if (Array.isArray(entities) && Array.isArray(transactions)) {
    return entities.map((en) => ({
      ...en,
      transactions: transactions.filter((o) => (o.entityId = en.id)),
    }));
  } else {
    return [];
  }
};

export const getRandomId = (size = 7) =>
  Math.random().toString(36).slice(-size);

export const prepareData = (entities, transactions) => {
  const data = {
    balance: 0,
    entities: [],
  };
  console.log(entities, transactions);
  if (Array.isArray(entities) && Array.isArray(transactions)) {
    data.entities = entities.map((en) => {
      data.balance += en.balance;
      return {
        ...en,
        transactions: transactions.filter((o) => o.entityId === en.id),
      };
    });
  }
  return data;
};

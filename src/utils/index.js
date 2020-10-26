export const getRandomId = (size = 7) =>
  Math.random().toString(36).slice(-size);

export const prepareData = (entities, transactions) => {
  const data = {
    balance: 0,
    entities: [],
  };
  console.log(entities, transactions);
  if (Array.isArray(entities) && Array.isArray(transactions)) {
    debugger;
    data.entities = [...entities].map((entity) => {
      const en = { ...entity };
      const trans = transactions.filter((o) => {
        if (o.entityId === en.id) {
          en.balance += o.cost - o.paid;
          return true;
        }
        return false;
      });
      data.balance += +en.balance;
      return {
        ...en,
        transactions: trans,
      };
    });
  }
  return data;
};

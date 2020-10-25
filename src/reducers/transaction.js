export default function transaction(state, action) {
  const { type, transaction } = action;
  switch (type) {
    case "ADD":
      return [...state, transaction];
    default:
      throw new Error();
  }
}

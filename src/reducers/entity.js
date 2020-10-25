export default function entity(state, action) {
  const { type } = action;
  switch (type) {
    case "ADD":
      return [...state, action.entity];
    case "REMOVE":
      return [...state];
    default:
      throw new Error();
  }
}

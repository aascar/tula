export default function auth(state, action) {
  const { type, userId } = action;
  switch (type) {
    case "LOGIN":
      return { userId };
    case "LOGOUT":
      return {};
    default:
      throw new Error();
  }
}

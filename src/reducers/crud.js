import { CRUD } from "../constants";
export default function crud(state, action) {
  const { type } = action;
  let returnState = state;
  switch (type) {
    case CRUD.BULK_CREATE:
      returnState = [...state, ...action.payload];
      break;
    case CRUD.CREATE:
      returnState = [...state, action.payload];
      break;
    case CRUD.UPDATE:
      const index = state.findIndex((o) => o.id === action.id);
      if (index > 0) {
        const obj = { ...state[index], ...action.payload };
        returnState = [
          ...state.slice(0, index),
          obj,
          ...state.slice(index + 1),
        ];
      }
      break;
    case CRUD.DELETE:
      returnState = state.filter((o) => action.queryFn(o));
      break;
    default:
      throw new Error();
  }
  return returnState;
}

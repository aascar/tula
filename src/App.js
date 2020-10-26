import React, { useEffect } from "react";
import Auth from "./components/Auth";
import Entities from "./components/Entities";
import Layout from "./components/Layout";
import useStore from "./hooks/useStore";
import auth from "./reducers/auth";

import crud from "./reducers/crud";
import { prepareData } from "./utils";

function App() {
  const [{ userId }, handleSubmit] = React.useReducer(auth, {});
  const [entities, entityDispatcher] = React.useReducer(crud, []);
  const [transactions, transactionDispatcher] = React.useReducer(crud, []);
  const [data, setData] = React.useState({});

  useEffect(() => {
    if (userId) {
      setData(prepareData(entities, transactions));
    }
  }, [userId, entities, transactions]);

  useStore(
    userId,
    entities,
    transactions,
    entityDispatcher,
    transactionDispatcher
  );

  return (
    <div className="App">
      <Auth loggedIn={!!userId} handleSubmit={handleSubmit} />
      <Layout userId={userId}>
        <Entities
          data={data}
          dispatch={entityDispatcher}
          transactionProps={{ dispatch: transactionDispatcher }}
        />
      </Layout>
    </div>
  );
}

export default App;

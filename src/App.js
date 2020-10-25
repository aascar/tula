import React, { useEffect } from "react";
import Auth from "./components/Auth";
import Entities from "./components/Entities";
import Layout from "./components/Layout";
import auth from "./reducers/auth";

import entity from "./reducers/entity";
import transaction from "./reducers/transaction";
import { prepareData } from "./utils";

function App() {
  const [{ userId }, handleSubmit] = React.useReducer(auth, {});
  const [entities, entityDispatcher] = React.useReducer(entity, []);
  const [transactions, transactionDispatcher] = React.useReducer(
    transaction,
    []
  );
  const [data, setData] = React.useState({});

  useEffect(() => {
    setData(prepareData(entities, transactions));
  }, [userId, entities, transactions]);

  return (
    <div className="App">
      <Auth loggedIn={!!userId} handleSubmit={handleSubmit} />
      <Layout userId={userId}>
        <Entities
          data={data}
          entityDispatcher={entityDispatcher}
          transactionDispatcher={transactionDispatcher}
        />
      </Layout>
    </div>
  );
}

export default App;

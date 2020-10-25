import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Modal from "./Modal";

export default function Auth({ loggedIn = false, handleSubmit }) {
  const [userId, setUserId] = React.useState("");
  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ type: "LOGIN", userId });
  };

  const actions = (
    <Button type="submit" onClick={onSubmit} color="primary">
      Login
    </Button>
  );

  return (
    <Modal title="Login" actions={actions} open={!loggedIn}>
      <TextField
        id="userId"
        label="User Id"
        value={userId}
        fullWidth
        autoFocus
        onChange={handleChange}
      />
    </Modal>
  );
}

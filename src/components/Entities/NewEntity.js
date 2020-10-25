import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Entity } from "../../services/entity";

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    textAlign: "right",
  },
}));

export default function NewEntity({ handleAdd }) {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [opening_balance, setBalance] = React.useState(0);
  const handleBalanceChange = (event) => {
    setBalance(event.target.value);
  };

  const [description, setDescription] = React.useState("");
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(new Entity(name, opening_balance));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item sm={6}>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={handleNameChange}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            id="balance"
            label="Opening Balance"
            value={opening_balance}
            onChange={handleBalanceChange}
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="description"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            type="text"
            multiline
            rows={2}
            fullWidth
          />
        </Grid>
        <Grid item sm={12}></Grid>
        <Grid item sm={12} className={classes.grid}>
          <Button
            onClick={handleSubmit}
            color="primary"
            startIcon={<AddIcon />}
          >
            Entity
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

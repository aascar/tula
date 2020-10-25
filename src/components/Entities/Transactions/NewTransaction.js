import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Transaction } from "../../../services/transaction";

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    textAlign: "right",
  },
}));

export default function NewTransaction({ handleAdd }) {
  const classes = useStyles();
  const [credit, setCredit] = React.useState(0);
  const [debit, setDebit] = React.useState(0);
  const [remarks, setRemarks] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd((entityId) => new Transaction(entityId, credit, debit, remarks));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item sm={6}>
          <TextField
            id="credit"
            label="Credit"
            value={credit}
            onChange={(e) => setCredit(Number(e.target.value))}
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            id="debit"
            label="Debit"
            value={debit}
            onChange={(e) => setDebit(Number(e.target.value))}
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="remarks"
            label="Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
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
            Transaction
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

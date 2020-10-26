import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Transaction } from "../../../services/transaction";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px 0`,
    padding: `${theme.spacing(1)}px`,
  },
  grid: {
    textAlign: "right",
  },
  button: {
    margin: `${theme.spacing(1)}px 0`,
  },
}));

export default function NewTransaction({ handleAdd }) {
  const classes = useStyles();
  const [time, setTime] = React.useState(Date.now());
  const [credit, setCredit] = React.useState(0);
  const [debit, setDebit] = React.useState(0);
  const [remarks, setRemarks] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(
      (entityId) => new Transaction(entityId, credit, debit, remarks, time)
    );
    handleOpen();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <form noValidate autoComplete="off">
      {open && (
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item sm={4} xs={12}>
              <TextField
                id="debit"
                label="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="datetime-local"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                id="credit"
                label="Credit (+)"
                value={credit}
                onChange={(e) => setCredit(Number(e.target.value))}
                type="number"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                id="debit"
                label="Debit (-)"
                value={debit}
                onChange={(e) => setDebit(Number(e.target.value))}
                type="number"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="remarks"
                label="Remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                type="text"
                multiline
                rows={2}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                color="primary"
                size="small"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
      {!open && (
        <Button
          onClick={handleOpen}
          color="primary"
          startIcon={<AddIcon />}
          size="small"
          className={classes.button}
        >
          Transaction
        </Button>
      )}
    </form>
  );
}

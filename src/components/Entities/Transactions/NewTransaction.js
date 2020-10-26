import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Transaction } from "../../../services/transaction";
import { Paper } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { PAYMENT_MODES } from "../../../constants";

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
  const [cost, setCost] = React.useState(0);
  const [paid, setPaid] = React.useState(0);
  const [paymentMode, setPaymentMode] = React.useState(PAYMENT_MODES.CASH);
  const [remarks, setRemarks] = React.useState("");

  const reset = () => {
    setTime(Date.now());
    setCost(0);
    setPaid(0);
    setPaymentMode(PAYMENT_MODES.CASH);
    setRemarks("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(
      (entityId) =>
        new Transaction(entityId, cost, paid, paymentMode, remarks, time)
    );
    handleOpen();
    reset();
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
            <Grid item sm={6} xs={12}>
              <TextField
                id="cost"
                label="Cost"
                value={cost}
                onChange={(e) => setCost(Number(e.target.value))}
                type="number"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="paid"
                label="Paid"
                value={paid}
                onChange={(e) => setPaid(Number(e.target.value))}
                type="number"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="time"
                label="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="datetime-local"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="payment_mode"
                select
                label="Payment Mode"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                fullWidth
              >
                {Object.keys(PAYMENT_MODES).map((o) => (
                  <MenuItem key={o} value={o}>
                    {o}
                  </MenuItem>
                ))}
              </TextField>
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

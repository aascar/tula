import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.pxToRem(15),
  },
  debit: {
    color: theme.palette.error.main,
  },
  credit: {
    color: theme.palette.success.main,
  },
}));

export default function Amount({ amount, neutral = false }) {
  const classes = useStyles();
  return (
    <Typography
      className={cx(classes.root, {
        [classes.debit]: !neutral && amount < 0,
        [classes.credit]: !neutral && amount > 0,
      })}
      component="span"
    >
      ₹ {Math.abs(amount)}
    </Typography>
  );
}

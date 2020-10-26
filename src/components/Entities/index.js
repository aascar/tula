import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider, Grid } from "@material-ui/core";
import NewEntity from "./NewEntity";
import Transactions from "./Transactions";
import Amount from "../Amount";
import { CRUD } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: `${theme.spacing(1)}px 0`,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "66.66%",
    flexShrink: 0,
    textAlign: "right",
    marginRight: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`,
  },
  rightAlign: {
    textAlign: "right",
  },
}));

function Entity({
  id,
  name,
  description,
  balance,
  opening_balance,
  transactions,
  transactionProps,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="content"
        id={id}
      >
        <Typography className={classes.heading}>{name}</Typography>
        <div className={classes.secondaryHeading}>
          <Amount amount={balance} />
        </div>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <Typography variant="caption">Opening balance</Typography>
            <Typography variant="body2">
              <Amount amount={opening_balance} />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="caption">Description</Typography>
            <Typography variant="body2">{description}</Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Transactions
              entityId={id}
              data={transactions}
              {...transactionProps}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default function Entities({ data, dispatch, transactionProps }) {
  const classes = useStyles();

  const handleAdd = (entity) => {
    dispatch({ type: CRUD.CREATE, payload: entity });
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={9} className={classes.rightAlign}>
        <Typography component="div" variant="subtitle1">
          Total: <Amount amount={data.balance} />
        </Typography>
      </Grid>
      <Grid item sm={3}>
        <NewEntity handleAdd={handleAdd} />
      </Grid>
      <Grid item sm={12}>
        {data.entities?.map((d) => {
          return (
            <Entity key={d.id} {...d} transactionProps={transactionProps} />
          );
        })}
      </Grid>
    </Grid>
  );
}

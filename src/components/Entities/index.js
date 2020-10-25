import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Paper } from "@material-ui/core";
import NewEntity from "./NewEntity";
import Transactions from "./Transactions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function Entity({
  id,
  name,
  description,
  balance,
  opening_balance,
  transactions,
  transactionDispatcher,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="content"
        id={id}
      >
        <Typography className={classes.heading}>{name}</Typography>
        <Typography className={classes.secondaryHeading}>
          {description}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Transactions
          entityId={id}
          data={transactions}
          dispatch={transactionDispatcher}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default function Entities({
  data,
  entityDispatcher,
  transactionDispatcher,
}) {
  const classes = useStyles();

  const handleAdd = (entity) => {
    entityDispatcher({ type: "ADD", entity });
  };

  return (
    <Grid container>
      <Grid item sm={12}>
        <Paper className={classes.paper}>
          <NewEntity handleAdd={handleAdd} />
        </Paper>
      </Grid>
      <Grid item sm={12}>
        {data.map((d) => {
          return (
            <Entity
              key={d.id}
              {...d}
              transactionDispatcher={transactionDispatcher}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

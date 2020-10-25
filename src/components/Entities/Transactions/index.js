import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import NewTransaction from "./NewTransaction";

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
}));

function Transaction({ id, time, credit, debit, remarks }) {
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
        <Typography className={classes.heading}>{credit}</Typography>
        <Typography className={classes.heading}>{debit}</Typography>
        <Typography className={classes.secondaryHeading}>{remarks}</Typography>
      </AccordionSummary>
      <AccordionDetails></AccordionDetails>
    </Accordion>
  );
}

export default function Transactions({ entityId, data, dispatch }) {
  const classes = useStyles();

  const handleAdd = (cb) => {
    const transaction = cb(entityId);
    dispatch({ type: "ADD", transaction });
  };

  return (
    <Grid container>
      <Grid item sm={12}>
        {data.map((d) => (
          <Transaction key={d.id} {...d} />
        ))}
      </Grid>
      <Grid item sm={12}>
        <NewTransaction handleAdd={handleAdd} />
      </Grid>
    </Grid>
  );
}

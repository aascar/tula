import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import NewTransaction from "./NewTransaction";
import Amount from "../../Amount";
import { CRUD } from "../../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    flexBasis: "33.33%",
    flexShrink: 0,
    textAlign: "right",
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
        <Typography>{new Date(time).toLocaleString()}</Typography>
        <div className={classes.heading}>
          <Amount amount={credit} />
        </div>
        <div className={classes.heading}>
          <Amount amount={-debit} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.secondaryHeading}>{remarks}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function Transactions({ entityId, data, dispatch }) {
  const classes = useStyles();

  const handleAdd = (cb) => {
    const transaction = cb(entityId);
    dispatch({ type: CRUD.CREATE, payload: transaction });
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

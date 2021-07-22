import React from 'react';
import {Link, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Deposits=({ setCurrentId })=> {
  const investment=useSelector((state)=>state.investment)
 


    const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {investment[investment.length-1].amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      {investment[investment.length-1].depositDate}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}


export default Deposits
import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

const Footer = () => {
    const classes= useStyles()
    return (
        <footer className={classes.footer}>
            <Typography variant='h6' align="center" gutterBottom>
            CONTACT US
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
            <p>(306) 949-9121</p>
            <p>info@alehsaanhousing.ca</p>
            </Typography>
      </footer>
    )
}

export default Footer

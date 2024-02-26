import React from 'react';
import styles from "../styles/components/button.module.scss";
import Button from '@mui/material/Button';
import clsx from 'clsx';

const TravelButton = (props) => {
  return (
    <Button
            variant={props.variant || "contained"}
            disabled={!!props.disabled}
            onClick={props.onClick}
            className={clsx(styles.button, props.className)}
            classes={props.classes}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            fullWidth={!!props.fullWidth}
        >
            {props.buttonText}
        </Button>
  )
}

export default TravelButton
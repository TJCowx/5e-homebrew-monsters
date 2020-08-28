import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes, { InferProps } from 'prop-types';
import { Theme, withStyles } from '@material-ui/core';
import MonsterDefinition from '../../models/MonsterDefinition';

const styles = (theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function FileUploadModal({
  open,
  onClose,
  classes,
}: InferProps<typeof FileUploadModal.propTypes>) {
  return (
    <>
      <Modal className={classes.modal} open={open} onClose={onClose}>
        <div style={{ top: `${59}%`, left: `${50}%` }} className={classes.paper}>
          <h2>Hello</h2>
        </div>
      </Modal>
    </>
  );
}

FileUploadModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(styles, { withTheme: true })(FileUploadModal);

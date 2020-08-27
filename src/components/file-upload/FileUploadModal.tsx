import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes, { InferProps } from 'prop-types';

function FileUploadModal({
  open,
  onClose,
}: InferProps<typeof FileUploadModal.propTypes>) {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div>
          <h2>Hello</h2>
        </div>
      </Modal>
    </>
  );
}

FileUploadModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FileUploadModal;

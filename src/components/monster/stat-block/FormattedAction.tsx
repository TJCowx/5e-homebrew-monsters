import React from 'react';
import MonsterAction from '../../../models/MonsterAction';
import PropTypes, { InferProps } from 'prop-types';

function FormattedAction({ action }: InferProps<typeof FormattedAction.propTypes>) {
  return (
    <div style={{ fontSize: '12px', paddingBottom: '4px' }}>
      <strong>{action.name}.</strong> {action.description}
    </div>
  );
}

FormattedAction.propTypes = {
  action: PropTypes.instanceOf(MonsterAction).isRequired,
};

export default FormattedAction;

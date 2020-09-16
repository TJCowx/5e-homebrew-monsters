import React from 'react';
import MonsterAction from '../../../models/MonsterAction';
import PropTypes, { InferProps } from 'prop-types';

function FormattedAction({ action }: InferProps<typeof FormattedAction.propTypes>) {
  return (
    <div style={{ fontSize: '13px', paddingBottom: '4px' }}>
      <strong>{action.name}.</strong>{' '}
      {action.isAttack && (
        <>
          <i>{action.attackType}</i>: {action.toHit}, reach {action.reach}ft.{' '}
          <i>Hit</i>: ({action.damage}) {action.damageType} Damage{' '}
        </>
      )}
      {action.description}
    </div>
  );
}

FormattedAction.propTypes = {
  action: PropTypes.instanceOf(MonsterAction).isRequired,
};

export default FormattedAction;

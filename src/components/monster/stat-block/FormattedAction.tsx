import React from 'react';
import MonsterAction from '../../../models/MonsterAction';

type Props = {
  action: MonsterAction
}

function FormattedAction({ action }: Props) {
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

export default FormattedAction;

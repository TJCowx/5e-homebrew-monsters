import { v4 as uuidv4 } from 'uuid';

export default class MonsterAction {
  id: string;
  name: string;
  description: string;
  actionType: string;
  attackType?: string;
  toHit?: string;
  damage?: string;
  damageType?: string;
  reach?: string;

  constructor(init?: Partial<MonsterAction>) {
    if (init.id == null) {
      init.id = uuidv4();
    }

    Object.assign(this, init);
  }
}

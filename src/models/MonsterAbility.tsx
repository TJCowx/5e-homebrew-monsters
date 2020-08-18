import { v4 as uuidv4 } from 'uuid';

export default class MonsterAbility {
  id: string;
  name: string;
  description: string;

  constructor(init?: Partial<MonsterAbility>) {
    if (init.id == null) {
      init.id = uuidv4();
    }

    Object.assign(this, init);
  }
}

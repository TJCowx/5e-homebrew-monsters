import { v4 as uuidv4 } from 'uuid';

export default class MonsterAbility {
  id: string = uuidv4();
  name: string = '';
  description: string = '';

  constructor(init?: Partial<MonsterAbility>) {
    Object.assign(this, init);
  }
}

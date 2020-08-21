import { v4 as uuidv4 } from 'uuid';

export default class MonsterAbility {
  public id: string = uuidv4();
  public name: string = '';
  public description: string = '';

  constructor(init?: Partial<MonsterAbility>) {
    Object.assign(this, init);
  }
}

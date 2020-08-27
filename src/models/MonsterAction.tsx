import { v4 as uuidv4 } from 'uuid';

export default class MonsterAction {
  public id: string = uuidv4();
  public name: string = '';
  public description: string = '';
  public actionType: string = '';
  public isAttack: boolean = false;
  public attackType?: string;
  public toHit?: string;
  public damage?: string;
  public damageType?: string;
  public reach?: string;

  constructor(init?: Partial<MonsterAction>) {
    Object.assign(this, init);
  }
}

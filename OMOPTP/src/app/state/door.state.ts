import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { PickUpKey } from './door.actions';
import { produce } from '@ngxs-labs/immer-adapter';

export interface KeyModel {
  id: number;
  isPickedUp: boolean
}

export interface DoorStateModel {
  keys: KeyModel[]
}

const DefaultKeys: KeyModel[] = [
  {id: 0, isPickedUp: false}, 
  {id: 1, isPickedUp: false},
  {id: 2, isPickedUp: false},
  {id: 3, isPickedUp: false},
  {id: 4, isPickedUp: false},
  {id: 5, isPickedUp: false},
]

@State<DoorStateModel>({
  name: 'door',
  defaults: {
    keys: DefaultKeys
  }
})
@Injectable()
export class DoorState {
  @Action(PickUpKey)
  pickUpKey(ctx: StateContext<DoorStateModel>, key: {keyId: number}) {
    produce(ctx, (draft: DoorStateModel) => {
      draft.keys.find(x => x.id === key.keyId).isPickedUp = true;
    });
  }

  @Selector() static isDoorUnlocked(state: DoorStateModel): boolean {
    return state.keys.filter(x => x.isPickedUp).length === 6;
  }

  static isKeyPickedUp(keyId: number) {
    return createSelector([DoorState], (state: DoorStateModel) => {
      return state.keys.find(x => x.id === keyId).isPickedUp;
    });
  }
}
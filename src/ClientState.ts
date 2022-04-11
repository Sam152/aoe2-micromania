import {ClientState, ClientStateAction} from "./types";

function ClientStateReducer(state: ClientState, action: ClientStateAction): ClientState {
  return state;
}

const defaultState: ClientState = {
  units: [],
  projectiles: [],
  players: [],
};

export { defaultState, ClientStateReducer };

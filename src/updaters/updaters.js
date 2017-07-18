/* global party */

export const showPlayerNameField = state => ({ playerNameVisible: true });

export const hidePlayerNameField = state => ({ playerNameVisible: false });

export const showPlayerOccupationField = state => ({
  playerOccupationVisible: true
});

export const hidePlayerOccupationField = state => ({
  playerOccupationVisible: false
});

export const startBurning = state => {
  // probably a bad idea
  if (state.startBurning === true) {
    const blowTrees = Math.floor(Math.random() * 100) + 20;
    window.party.addsmoke(550, 400, blowTrees);
    return;
  }
  return {
    startBurning: true
  };
};

// saves currently inputted name value to global object
// this is temporary within the form
export const setNewPlayerName = value => state => ({ playerNameInput: value });

// sets the player name
// this is actually your name in the game state
export const addPlayerName = state => ({
  playerNameSaved: state.playerNameInput
});

// saves currently selected radio group to global object
// this is temporary within the form
export const setNewPlayerOccupation = value => state => ({
  playerOccupationRadio: value
});

// sets player occupation
// this is actually your occuptation in game state
export const addPlayerOccupation = state => ({
  playerOccupationSaved: state.playerOccupationRadio,
  playerOccupationFinished: true
});

export const turnOnComputer = state => ({
  workspaceVisible: true
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    musicActivity: null, // Null initial value
};
// * - MUSIC ACTIVITY REDUCER -
const musicActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MUSIC_ACTIVITY":
            // Setting new activity
            const newMusicActivity = action.payload;
            return Object.assign(Object.assign({}, state), { musicActivity: newMusicActivity });
        case "CLEAR_MUSIC_CATEGORY":
            const noMusicActivity = null;
            return Object.assign(Object.assign({}, state), { musicActivity: noMusicActivity });
        default:
            return state;
    }
};
// * Exporting musicActivityReducer
exports.default = musicActivityReducer;

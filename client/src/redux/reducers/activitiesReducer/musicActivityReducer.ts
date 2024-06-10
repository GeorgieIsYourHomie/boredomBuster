// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { musicActivity: Activity | null } = {
  musicActivity: null, // Null initial value
};

// * - MUSIC ACTIVITY REDUCER -
const musicActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_MUSIC_ACTIVITY":
      // Setting new activity
      const newMusicActivity = action.payload as Activity;
      return { ...state, musicActivity: newMusicActivity };
    case "CLEAR_MUSIC_CATEGORY":
      const noMusicActivity = null;
      return { ...state, musicActivity: noMusicActivity };
    default:
      return state;
  }
};

// * Exporting musicActivityReducer
export default musicActivityReducer;

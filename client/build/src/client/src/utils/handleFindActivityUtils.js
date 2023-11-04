"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING -
// Redux Saga
const effects_1 = require("redux-saga/effects");
// * - handleFindActivityUtils GEN FUNCTION -
// A generator function to handle dispatching find activity actions
function* handleFindActivityUtils(chosenCategories) {
    if (chosenCategories) {
        // Discerning category for finding activities
        for (let chosenCategory of chosenCategories) {
            switch (chosenCategory) {
                case "Random":
                    yield (0, effects_1.put)({
                        type: "FIND_RANDOM_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "Recreation":
                    yield (0, effects_1.put)({
                        type: "FIND_RECREATION_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "Social":
                    yield (0, effects_1.put)({
                        type: "FIND_SOCIAL_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "Education":
                    yield (0, effects_1.put)({
                        type: "FIND_EDUCATION_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "DIY":
                    yield (0, effects_1.put)({
                        type: "FIND_DIY_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "Cooking":
                    yield (0, effects_1.put)({
                        type: "FIND_COOKING_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "Charity":
                    yield (0, effects_1.put)({
                        type: "FIND_CHARITY_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "Relaxation":
                    yield (0, effects_1.put)({
                        type: "FIND_RELAXATION_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "Busywork":
                    yield (0, effects_1.put)({
                        type: "FIND_BUSYWORK_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                case "Music":
                    yield (0, effects_1.put)({
                        type: "FIND_MUSIC_ACTIVITY",
                        payload: chosenCategory,
                    });
                    break;
                default:
                    break;
            }
        }
    }
} // * end handleFindActivityUtils
// * Exporting handleFindActivityUtils
exports.default = handleFindActivityUtils;

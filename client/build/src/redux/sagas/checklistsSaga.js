"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING -
const effects_1 = require("redux-saga/effects");
const axios_1 = __importDefault(require("axios"));
// * - LISTENER SAGA -
// * checklists listener saga
function* checklistsSaga() {
    yield (0, effects_1.takeLatest)("FETCH_ALL_CHECKLISTS", fetchAllChecklists);
    yield (0, effects_1.takeLatest)("ADD_CHECKLIST", addChecklist);
    yield (0, effects_1.takeLatest)("DELETE_CHECKLIST", deleteChecklist);
} // * end checklistsSaga
// * - ACTION SAGAS -
// Fetch Checklists
// * Gen function to get all checklists from the server
function* fetchAllChecklists(action) {
    try {
        // Declaring user's id as payload
        const userID = action.payload;
        // Declaring response as variable
        const allChecklists = yield axios_1.default.get(`/checklists/${userID}`);
        // Dispatch action to checklists reducer, setting the global state to data
        yield (0, effects_1.put)({ type: "SET_CHECKLISTS", payload: allChecklists.data });
    }
    catch (_a) {
        console.log("\nError getting all checklists.");
    }
} // * end fetchAllChecklists
// Add Checklist
// * Gen function to add a checklist via POST
function* addChecklist(action) {
    try {
        // Declaring user's id as payload
        const userID = action.payload;
        console.log("userID is:", userID);
        // Making POST request to url with data
        yield axios_1.default.post("/checklists", { userID });
        // Dispatch action to fetch the updated checklist
        yield (0, effects_1.put)({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
    }
    catch (_a) {
        console.log("\nError adding checklist.");
    }
} // * end addChecklist
// * - TO IMPLEMENT SOON -
// PUT request for updating rank of checklist
// GET request for order by feature maybe? Highest to lowest rank and vise versa
// Delete Checklist
// * Gen function to remove a checklist via DELETE
function* deleteChecklist(action) {
    try {
        // Declaring user's id as payload
        const userID = action.payload.userID;
        // Declaring user's checklist id as payload
        const checklistID = action.payload.checklistID;
        // Logging
        console.log("\nuserID is:", userID, "checklistID is:", checklistID);
        // Axios DELETE request
        yield axios_1.default.delete(`/checklists/${userID}/${checklistID}`, action.payload);
        // Dispatch action to re-fetch checklists
        yield (0, effects_1.put)({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
    }
    catch (_a) {
        console.log("\nError removing checklist.");
    }
} // * end deleteChecklist
// * - EXPORTING userSaga -
exports.default = checklistsSaga;

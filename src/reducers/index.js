import { combineReducers } from "redux";
import checked from "./checked";
import log from "./log";
import queue from "./queue";
import textDisabled from "./textDisabled";
import user from "./user";

export default combineReducers({ checked, log, textDisabled, queue, user });
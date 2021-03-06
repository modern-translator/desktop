/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import { combineReducers } from 'redux';

import {
  DIALOG_SHORTCUT_CLOSE,
  DIALOG_SHORTCUT_OPEN,
  DIALOG_SHORTCUT_SET_COMBINATOR,
} from '../../../../constants/actions';

const open = (state = false, action) => {
  switch (action.type) {
    case DIALOG_SHORTCUT_CLOSE: return false;
    case DIALOG_SHORTCUT_OPEN: return true;
    default: return state;
  }
};

const identifier = (state = null, action) => {
  switch (action.type) {
    case DIALOG_SHORTCUT_CLOSE: return null;
    case DIALOG_SHORTCUT_OPEN: return action.identifier;
    default: return state;
  }
};

const combinator = (state = null, action) => {
  switch (action.type) {
    case DIALOG_SHORTCUT_CLOSE: return null;
    case DIALOG_SHORTCUT_OPEN: return action.combinator;
    case DIALOG_SHORTCUT_SET_COMBINATOR: return action.combinator;
    default: return state;
  }
};

export default combineReducers({
  open,
  identifier,
  combinator,
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import { combineReducers } from 'redux';

import { ROUTE_HOME } from '../../../constants/routes';
import { CHANGE_ROUTE } from '../../../constants/actions';

const route = (state = ROUTE_HOME, action) => {
  switch (action.type) {
    case CHANGE_ROUTE: return action.route;
    default: return state;
  }
};

export default combineReducers({
  route,
});

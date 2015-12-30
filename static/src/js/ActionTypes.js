/* @file ActionTypes.js
 * @brief Provides the action types for the Flux dispatcher.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';
var keyMirror = require('keymirror');

module.exports = keyMirror({
  // Announcements
  'ANNOUNCEMENT_CREATE': null,
  'ANNOUNCEMENT_CREATE_COMPLETE': null,
  'ANNOUNCEMENT_DELETE': null,
  'ANNOUNCEMENT_DELETE_COMPLETE': null,
  'ANNOUNCEMENT_LOAD': null,

  // Authentication
  'AUTH_LOGIN': null,
  'AUTH_LOGIN_ADMIN': null,
  'AUTH_LOGOUT': null,
});

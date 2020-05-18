// _action/user.action.js
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

// _service/user.service.js
function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

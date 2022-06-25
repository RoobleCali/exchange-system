// write here a function for user authorization and give access to page based on user role

export const authorize = (user) => {
  if (user.role === "admin") {
    return true;
  }
  return false;
};

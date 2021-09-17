// REGISTER
export const registerUser = async body => {
  const url = 'https://login-pwa.herokuapp.com/api/users';
  const createdUser = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(data => data.json());

  return createdUser;
};

// LOG IN
export const login = async body => {
  const url = 'https://login-pwa.herokuapp.com/api/login';
  const logedUser = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(data => data.json());

  return logedUser;
};

// LOG OUT

export const logout = async token => {
  const url = 'https://login-pwa.herokuapp.com/api/logout';
  const logoutUser = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  window.localStorage.removeItem('acess_token');
  window.localStorage.removeItem('logout');

  return logoutUser;
};

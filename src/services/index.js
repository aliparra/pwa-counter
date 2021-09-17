const baseUrl = `https://login-pwa.herokuapp.com/api`;

// REGISTER
export const registerUser = async body => {
  const url = `${baseUrl}/users`;
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
  const url = `${baseUrl}/login`;
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
  const url = `${baseUrl}/logout`;
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

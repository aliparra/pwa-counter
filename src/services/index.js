// REGISTER
export const registerUser = async body => {
  const url = 'https://pwa-api.herokuapp.com/api/users';
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
  const url = 'https://pwa-api.herokuapp.com/api/login';
  const createdUser = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(data => data.json());

  return createdUser;
};

// LOG OUT

export const logout = async token => {
  const url = 'https://pwa-api.herokuapp.com/api/logout';
  const createdUser = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => {
      window.localStorage.removeItem('acess_token');
      window.localStorage.removeItem('logout');
    })
    .catch(e => e);

  return createdUser;
};

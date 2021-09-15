// REGISTER
export const registerUser = async body => {
  const url = 'http://localhost:3001/api/users';
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
  const url = 'http://localhost:3001/api/login';
  const createdUser = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(data => data.json());

  return createdUser;
};

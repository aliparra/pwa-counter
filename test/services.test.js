import { expect } from '@open-wc/testing';
import sinon from 'sinon';
import { registerUser, login } from '../src/services/index.js';

const jsonOk = body => {
  const mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json',
    },
  });

  return Promise.resolve(mockResponse);
};

const MOCK_JSON_USER = {
  email: 'test@test.com',
  id: '123',
  logout: null,
  password: 'hashedpassword',
};

const MOCK_JSON_LOGIN = {
  acess_token: 'jwttoken',
  logout: null,
};

describe('Services', () => {
  it(`registerUser returns a new user object `, async () => {
    const stub = sinon.stub(window, 'fetch');
    stub.onCall(0).returns(jsonOk(MOCK_JSON_USER));
    const response = await registerUser();
    expect(response).to.be.an('object');
    window.fetch.restore();
  });

  it(`login returns a new object with the acess token `, async () => {
    const stub = sinon.stub(window, 'fetch');
    stub.onCall(0).returns(jsonOk(MOCK_JSON_LOGIN));
    const response = await login();
    expect(response).to.be.an('object');
    window.fetch.restore();
  });
});

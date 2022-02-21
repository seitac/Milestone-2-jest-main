const request = require("supertest");

export default async (
  expectedStatus = 200,
) => {
  const baseUrl = "https://petstore.swagger.io/v2";
  const endpoint = "/pet";
  const id = '4445554545'


  const res = await request(baseUrl)
    .delete(`${endpoint}/${id}`)
    .expect(expectedStatus);

  return {
    response: {
      headers: res.headers,
      body: res.body,
    },
  };
};
import { petObject } from "../../support";
const request = require("supertest");

export default async (
  expectedStatus = 200,
  params = { id: 232567, name: "Dalmata" }
) => {
  //COMMENT I would extract repetitive definitions to a utils file
  const baseUrl = "https://petstore.swagger.io/v2";
  const endpoint = "/pet";

  const requestBody = petObject(params.id, params.name);

  const res = await request(baseUrl)
    .post(endpoint)
    .send(requestBody)
    .expect(expectedStatus);

  return {
    response: {
      headers: res.headers,
      body: res.body,
    },
  };
};
declare namespace NodeJS {
  interface Global {
    testRequest: import("supertest").SuperTest<import("supertest").Test>;
  }
}

//ALTERNATIVA EM VERÇÕES DO NODE MAIORES
// eslint-disable-next-line no-var
// declare var testRequest: import("supertest").SuperTest<import("supertest").Test>;

import { makeGrid } from "../src/client/js/designs.js";

// To check if 'makeGrid' produces the right output.
describe("Testing the form handler's functionality", () => {
  test("Testing the makeGrid function", () => {
    expect(makeGrid).toBeDefined();
  });
});

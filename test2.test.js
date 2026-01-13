import { expect, test } from "vitest";
import { sum } from "./sum.js";

test("adds 2 + 5 to equal 3", () => {
  expect(sum(2, 5)).toBe(7);
});

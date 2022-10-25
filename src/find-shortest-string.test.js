const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
    expect(findShortestString(["a", "cat"])).toBe("a");
    //expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
  });
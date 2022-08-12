import React from "react";
import renderer from "react-test-renderer";
import Features from "../index";

it("renders correctly", () => {
  const tree = renderer.create(<Features />).toJSON();
  expect(tree).toMatchSnapshot();
});

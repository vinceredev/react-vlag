import React from "react";
import renderer from "react-test-renderer";
import Switch from "../index";

it("renders correctly", () => {
  const tree = renderer.create(<Switch />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders checked true correctly", () => {
  const tree = renderer.create(<Switch checked={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders disabled true correctly", () => {
  const tree = renderer.create(<Switch disabled={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
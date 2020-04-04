import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const wrapper = shallow(<App />);

  it("should render App correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 2 Routes correctly", () => {
    expect(wrapper.find("Route")).toHaveLength(2);
  });
});

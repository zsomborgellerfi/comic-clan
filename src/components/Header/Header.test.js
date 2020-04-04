import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  const wrapper = shallow(<Header />);

  it("should render Header correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

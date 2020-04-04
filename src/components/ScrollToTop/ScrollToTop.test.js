import React from "react";
import { shallow } from "enzyme";
import ScrollToTop from "./ScrollToTop";

describe("ScrollToTop", () => {
  const wrapper = shallow(<ScrollToTop />);

  it("should render ScrollToTop correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import Loading from "./Loading";

describe("Loading", () => {
  const wrapper = shallow(<Loading />);

  it("should render Loading correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

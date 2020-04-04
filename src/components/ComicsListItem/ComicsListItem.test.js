import React from "react";
import { shallow } from "enzyme";
import ComicsListItem from "./ComicsListItem";

const props = {
  comic: {
    name: "test name",
    owner: "test owner",
    image: "test image",
  },
};
describe("ComicsListItem", () => {
  const wrapper = shallow(<ComicsListItem {...props} />);

  it("should render ComicsListItem correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Link").props().to).toEqual("/comic/test name");
    expect(wrapper.find("img.ComicsListItem__image").props().src).toEqual(
      "test image"
    );
    expect(wrapper.find("div.ComicsListItem__name").text()).toEqual(
      "test name"
    );
  });
});

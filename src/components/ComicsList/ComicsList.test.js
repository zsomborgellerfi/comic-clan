import React from "react";
import { shallow } from "enzyme";
import ComicsList from "./ComicsList";

const props = {
  comics: [{ name: "test comic 1" }, { name: "test comic 2" }],
};
describe("ComicsList", () => {
  const wrapper = shallow(<ComicsList {...props} />);

  it("should render 2 ComicsListItem correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("ComicsListItem")).toHaveLength(2);
  });
});

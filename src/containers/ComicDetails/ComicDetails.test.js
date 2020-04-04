import React from "react";
import { shallow } from "enzyme";
import { ComicDetails } from "./ComicDetails";

const props = {
  getComics: jest.fn(),
  comics: [{ name: "test-name", rating: 3 }],
  match: {
    params: {
      name: "test-name",
    },
  },
};
describe("ComicDetails", () => {
  const wrapper = shallow(<ComicDetails {...props} />);

  it("should render ComicDetails correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

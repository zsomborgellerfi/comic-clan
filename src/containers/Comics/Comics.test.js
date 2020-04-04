import React from "react";
import { shallow } from "enzyme";
import { Comics } from "./Comics";

const props = {
  getComics: jest.fn(),
  comics: [{ name: "test-name", rating: 3 }],
  match: {
    params: {
      category: "year",
    },
  },
};
describe("ComicDetails", () => {
  const wrapper = shallow(<Comics {...props} />);

  it("should render Comics correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

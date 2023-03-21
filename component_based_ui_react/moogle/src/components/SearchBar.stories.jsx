import React from "react";

import SearchBar from "./SearchBar";

export default {
  title: "Moogle/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Primary = Template.bind(
  {},
  {
    label: "Search",
  }
);

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Find my cow",
};

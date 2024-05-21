const myObj: {
  first_name: string;
  last_name: string;
  age: number;
  dob: string;
  email: string;
  location: {
    city: string;
    state: string;
    country: Array<string>;
  };
} = {
  first_name: "Jake",
  last_name: "Robins",
  age: 39,
  dob: "1982-01-01",
  email: "me@jakerobins.com",
  location: {
    city: "Merida",
    state: "Yucatan",
    country: ["Mexico"],
  },
};

const otherusers: Array<{
  first_name: string;
  last_name: string;
  age: number;
  dob: string;
  email: string;
}> = [];

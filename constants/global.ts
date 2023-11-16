export const bloodGroupsOption = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
  },
];

export const designationOption = ["Accountant", "Manager", "Director"];

export const genderOptionObject = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];

const locations = [
  "Dhaka Cantt.",
  "Baridhara",
  "Dhanmondi",
  "Gulshan",
  "Keraniganj",
  "Khilgaon",
  "Khilkhet",
  "Lalbag",
  "Mirpur",
  "Mohammadpur",
  "Motijheel",
  "New Market",
  "Ramna",
  "Uttara",
];

export const locationArray = locations.map((location) => ({
  label: location,
  value: location,
}));

const residential = [
  "Apartment",
  "House",
  "Duplex",
  "Condo",
  "Townhouse",
  "Villa",
  "Penthouse",
  "Studio",
];

export const residentialArray = residential.map((residential) => ({
  label: residential,
  value: residential,
}));

const numbers = ["1", "2", "3", "4", "5", "6", "7", "9", "10"];

export const numberArray = numbers.map((number) => ({
  label: number,
  value: number,
}));

const sizePerUnit = [
  "Square Feet",
  "Square Meter",
  "Square Inch",
  "Acre",
  "Bigha",
  "Kottah",
  "Marla",
  "Kanal",
];

export const sizePerUnitArray = sizePerUnit.map((size) => ({
  label: size,
  value: size,
}));

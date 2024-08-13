"use client";

import { useState } from "react";
import Picker from "react-mobile-picker";

const selections = {
  serviceName: [
    "Offline Software Development",
    "SEO",
    "SMM",
    "Website Development",
    "Cloud",
    "Devops",
    "Database",
  ],
};

const SelectScroll = ({ itemHeight = 45 }) => {
  const [pickerValue, setPickerValue] = useState({
    serviceName: "Website Development",
  });

  const pickerStyle = {
    height: itemHeight,
  };

  const selectedItemStyle = {
    ...pickerStyle,
    fontWeight: "bold",
    color: "blue",
  };

  return (
    <Picker
      value={pickerValue}
      onChange={setPickerValue}
      wheelMode="natural"
      itemHeight={itemHeight}
      height={itemHeight * 7}
      selectedItemStyle={selectedItemStyle}
      className="text-black font-bold bg-[#F4EF14] text-lg bg-scroll-custom"
    >
      {Object.keys(selections).map((name) => (
        <Picker.Column key={name} name={name}>
          {selections[name].map((option) => (
            <Picker.Item
              key={option}
              value={option}
              className={
                pickerValue.serviceName === option ? "selectedScroll" : ""
              }
            >
              {option}
            </Picker.Item>
          ))}
        </Picker.Column>
      ))}
    </Picker>
  );
};

export default SelectScroll;

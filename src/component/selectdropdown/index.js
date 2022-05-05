import { ListboxInput, ListboxOption, ListboxList } from "@reach/listbox";
import React, { useState } from "react";
import { Container, MenuList, PopOver } from "./style";
import { FaChevronDown } from "react-icons/fa";
const Dropdown = ({ sort, functionName, style }) => {
  const [value, setValue] = useState("default");
  const handleChange = (value) => {
    alert(value);
    setValue(value);
    functionName(Number(value));
  };

  return (
    <Container style={style ? style : null}>
      <span id="my-label">How old are you??</span>
      <ListboxInput
        aria-labelledby="my-label"
        value={value}
        onChange={handleChange}
      >
        <MenuList arrow={<FaChevronDown />} />
        <PopOver>
          <ListboxList>
            <ListboxOption value="default">-- select age</ListboxOption>
            <ListboxOption value="5">05 years</ListboxOption>
            <ListboxOption value="6">06 years</ListboxOption>
            <ListboxOption value="7">07 years</ListboxOption>
            <ListboxOption value="8">08 years</ListboxOption>
            <ListboxOption value="9">09 years</ListboxOption>
            <ListboxOption value="10">10 years</ListboxOption>
          </ListboxList>
        </PopOver>
      </ListboxInput>
    </Container>
  );
};

export default Dropdown;

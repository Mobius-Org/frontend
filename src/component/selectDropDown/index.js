import { ListboxInput, ListboxOption, ListboxList } from "@reach/listbox";
import React, { useEffect, useState } from "react";
import { Container, MenuList, PopOver, ListboxI } from "./style";

const Dropdown = ({ sort, setSort, style }) => {
  const [value, setValue] = useState("05 years");
  const handleChange = (value) => {
    setValue(value);
    // setSort(value);
  };

  return (
    <Container style={style ? style : null}>
      <span id="my-label">How old are you?</span>
      <ListboxInput
        aria-labelledby="my-label"
        value={value}
        onChange={handleChange}
      >
        <MenuList arrow />
        <PopOver>
          <ListboxList>
            <ListboxOption value="05 years">05 years</ListboxOption>
            <ListboxOption value="06 years">06 years</ListboxOption>
            <ListboxOption value="07 years">07 years</ListboxOption>
            <ListboxOption value="08 years">08 years</ListboxOption>
            <ListboxOption value="09 years">09 years</ListboxOption>
            <ListboxOption value="10 years">10 years</ListboxOption>
            <ListboxOption value="above">10+ years</ListboxOption>
          </ListboxList>
        </PopOver>
      </ListboxInput>
    </Container>
  );
};

export default Dropdown;

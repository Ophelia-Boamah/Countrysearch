import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/core";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const index = () => {
  const [select, setSelect] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (name) => {
    if (select === "country") {
      if (name) {
        const results = await Axios.get(
          `https://restcountries.eu/rest/v2/name/${name}`
        );
        setData(results.data);
      }
    }
  };
  const fetchCity = async (capital) => {
    if (select === "city") {
      if (capital) {
        const results = await Axios.get(
          `https://restcountries.eu/rest/v2/capital/${capital}`
        );
        setData(results.data);
      }
    }
  };
  console.log("nation", data);
  useEffect(() => {
    fetchData(searchQuery);
    fetchCity(searchQuery);
  }, [searchQuery]);

  return (
    <Box
      w={{ md: "80%" }}
      pt={{ md: 40 }}
      mx="auto"
      textAlign="center"
      h="100vh"
    >
      <Heading mb={{ md: 10 }}>Search for countries below</Heading>

      <form>
        <Flex w={{ md: "80%" }} mx="auto">
          <Select
            onChange={(e) => setSelect(e.target.value)}
            placeholder="Select option"
            w={{ md: "20%" }}
          >
            <option value="country"> Country</option>
            <option value="city">City</option>
          </Select>
          <InputGroup w={{ md: "60%" }}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              name="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country name, city or currency"
              aria-aria-describedby="search-helper-text"
            />
            <InputRightElement
              as="button"
              children={<SmallCloseIcon color="green.500" />}
            />
          </InputGroup>
        </Flex>
      </form>
      {data.map((item) => (
        <Box key={item.name}>
          <Text>{item.name}</Text>
          <Text>{item.region}</Text>
          <Text>{item.subregion}</Text>
          {item.languages.map((lang) => (
            <Text key={lang.name}>{lang.name}</Text>
          ))}
          {item.currencies.map((cash) => (
            <Text key={cash.name}>{cash.name}</Text>
          ))}
          <Image src={item.flag} />
        </Box>
      ))}
    </Box>
  );
};

export default index;

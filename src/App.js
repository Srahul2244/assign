import axios from "axios";
import React, { useState, useEffect } from "react";
import CardList from "./componets/CardList";
import FilterDropDown from "./componets/FilterDropDown";
import SearchInput from "./componets/SearchInput";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  useDisclosure,
  
} from "@chakra-ui/react";
const App = () => {
  const [cards, setCards] = useState([]);
  const [Type, setType] = useState("All");
  const [Query, setQuery] = useState("");
  const [page, setPage] = useState(1);
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/data"
      );

      const newCards = response.data;
      setCards(prevCards => [...prevCards, ...newCards]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = value => {
    setType(value);
  };

 


  const handleSearch = query => {
    setQuery(query);
  };

  const handleClick = () => {
    fetchData();
  };

  const filteredCards = cards.filter(card => {
    if (Type === "All" && Query === "") {
      return true;
    } else if (Type === "All" && Query !== "") {
      return card.name.toLowerCase().includes(Query.toLowerCase());
    } else if (Type !== "All" && Query === "") {
      return card.card_type === Type;
    } else {
      return (
        card.card_type === Type &&
        card.name.toLowerCase().includes(Query.toLowerCase())
      );
    }
  });

  const handleAdd = () => {
    onOpen();
  };

  return (

    <>
     
    
    <div className="border-2 border-gray-950 shadow-2xl">

      <div className="ml-[85%] my-4">
        <Button
          onClick={handleAdd}
          backgroundColor={"gray.700"}
          color={"white"}
        >
          Filter
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <FilterDropDown value={Type} onChange={handleFilter} />
                <SearchInput value={Query} onChange={handleSearch} />
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                apply
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <CardList cards={filteredCards} onClick={handleClick} />
    </div>
    </>
  );
};

export default App;

import { Button, Input, Select, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const CreateInvoicePage = () => {
  // const [name, setName] = useState("null");
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} align="center">
          <Heading>Create invoice </Heading>
          <div> For Customer : maxime</div>
        </Stack>
        <Stack>
          <Select>
            <option>Payed</option>
            <option>Sent</option>
          </Select>

          <div style={{ position: "relative" }}>
            <Input
              type="number"
              placeholder="Invoice price"
              style={{ paddingRight: "30px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)",
              }}
            >
              €
            </div>
          </div>

          <Button>
            <Link to="/">Create</Link>
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default CreateInvoicePage;

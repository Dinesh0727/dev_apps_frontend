import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  CardHeader,
} from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import Label from "./Label";

export default function CardLocal({ title, body, subtitle, labels }) {
  return (
    <div>
      <Card
        className="card-local"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        borderRadius={"10px"}
      >
        <Stack>
          <CardHeader>
            <Text fontWeight={500} fontSize={"1.5rem"}>
              {title}
            </Text>
          </CardHeader>
          <CardBody>
            <Text py="2">{subtitle}</Text>
            <Text>{body}</Text>
          </CardBody>

          <CardFooter>
            <Text>
              {Object.values(labels).map((x) => {
                return <Label text={x}></Label>;
              })}
            </Text>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

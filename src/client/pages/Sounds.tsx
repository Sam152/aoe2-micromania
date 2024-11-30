import { Button, Container, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Section from "../components/Section";
import soundList from "../../common/sounds/soundList";

function playSound(soundName: string) {
  var audio = new Audio(`/sounds/de/${soundName}.ogg`);
  audio.play();
}

export default function Sounds() {
  return (
    <Container>
      <Section width="full">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Players</Th>
                <Th>Started at</Th>
                <Th>Play</Th>
              </Tr>
            </Thead>
            <Tbody>
              {soundList.map((sound) => (
                <Tr key={sound[1]}>
                  <Td>{sound[0]}</Td>
                  <Td>{sound[1]}</Td>
                  <Td>
                    <Button onClick={() => playSound(sound[1])}>Play</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Section>
    </Container>
  );
}

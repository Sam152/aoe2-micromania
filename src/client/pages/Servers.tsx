import {
  Button,
  Container,
  Heading,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Section from "../components/Section";
import { regionalServers, serversByPing } from "../servers/regionalServers";
import { useMemoAsync } from "../hooks/useMemoAsync";
import { resolveServerFromCache, setCachedServer } from "../servers/resolveServerFromCache";
import arrayOfSize from "../../common/util/arrayOfSize";

export default function Servers() {
  const [servers] = useMemoAsync(serversByPing, [], []);
  const [cached] = useMemoAsync(resolveServerFromCache, null, []);

  return (
    <Container>
      <VStack spacing={4}>
        <Section width="full">
          <TableContainer>
            <Table sx={{ tableLayout: "fixed" }}>
              <Thead>
                <Tr>
                  <Th>Server</Th>
                  <Th>Ping</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {servers.length === 0 && arrayOfSize(regionalServers.length).map((i) => <RowSkeleton key={i} />)}

                {servers.map((server, i) => (
                  <Tr key={i}>
                    <Td>
                      <Heading size="md">{server.server.replace("https://", "").replace(".aoe.cx", "")}</Heading>
                    </Td>
                    <Td>{server.ping}</Td>
                    <Td>
                      {cached === server.server ? (
                        <p>Connected</p>
                      ) : (
                        <Button
                          onClick={() => {
                            setCachedServer(server.server);
                            window.location.reload();
                          }}
                        >
                          Connect
                        </Button>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Section>
      </VStack>
    </Container>
  );
}

function RowSkeleton() {
  return (
    <Tr>
      <Td>
        <Skeleton w={"140px"} h={"24px"} />
      </Td>
      <Td>
        <Skeleton w={"40px"} h={"24px"} />
      </Td>
      <Td>
        <Skeleton w={"80px"} h={"24px"} />
      </Td>
    </Tr>
  );
}

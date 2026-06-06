import { determineWinner } from "../utils/determineWinner.ts";
import { Bot } from "../infra/repo/getAllBots.ts";

self.onmessage = async (e: MessageEvent<{ p1: Bot; p2: Bot }>) => {
  const { p1, p2 } = e.data;
  const result = determineWinner({ player1: p1.tree, player2: p2.tree });
  self.postMessage(result);
};

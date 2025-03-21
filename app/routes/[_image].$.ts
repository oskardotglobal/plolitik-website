import type { LoaderFunctionArgs } from "react-router";
import {
  createIPX,
  createIPXH3Handler,
  ipxFSStorage,
  ipxHttpStorage,
} from "ipx";
import { createApp, toWebHandler } from "h3";

const ipx = createIPX({
  storage: ipxFSStorage({ dir: "./public" }),
  httpStorage: ipxHttpStorage({ allowAllDomains: true }),
});

const handleRequest = toWebHandler(
  createApp().use("/_image", createIPXH3Handler(ipx))
);

export const loader = async (args: LoaderFunctionArgs) => {
  return handleRequest(args.request);
};

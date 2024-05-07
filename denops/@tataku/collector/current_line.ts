import { Denops } from "https://deno.land/x/denops_std@v6.4.2/mod.ts";
import * as fn from "https://deno.land/x/denops_std@v6.4.2/function/mod.ts";

const collector = (denops: Denops, _option: unknown) => {
  return new ReadableStream<string[]>({
    start: async (controller: ReadableStreamDefaultController<string[]>) => {
      controller.enqueue([await fn.getline(denops, ".")]);
    },
  });
};

export default collector;

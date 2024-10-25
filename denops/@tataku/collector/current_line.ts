import { Denops } from "jsr:@denops/std@7.3.0";
import * as fn from "jsr:@denops/std@7.3.0/function";

const collector = (denops: Denops, _option: unknown) => {
  return new ReadableStream<string[]>({
    start: async (controller: ReadableStreamDefaultController<string[]>) => {
      controller.enqueue([await fn.getline(denops, ".")]);
    },
  });
};

export default collector;

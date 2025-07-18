import { Denops } from "jsr:@denops/std@7.6.0";
import * as fn from "jsr:@denops/std@7.6.0/function";
import type { CollectorFactory } from "jsr:@omochice/tataku-vim@1.2.1";

const collector: CollectorFactory = (denops: Denops) => {
  return new ReadableStream<string[]>({
    start: async (controller: ReadableStreamDefaultController<string[]>) => {
      controller.enqueue([await fn.getline(denops, ".")]);
      controller.close();
    },
  });
};

export default collector;

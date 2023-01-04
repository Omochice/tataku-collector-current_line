import { Denops } from "https://deno.land/x/denops_std@v3.8.1/mod.ts";
import * as fn from "https://deno.land/x/denops_std@v3.8.1/function/mod.ts";
import { Collector } from "https://raw.githubusercontent.com/Omochice/tataku.vim/master/denops/tataku/interface.ts";

export default class implements Collector {
  constructor(_option: Record<string, unknown>) {
  }

  async run(denops: Denops) {
    return [await fn.getline(denops, ".")];
  }
}

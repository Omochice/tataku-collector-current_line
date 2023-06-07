import { Denops } from "https://deno.land/x/denops_std@v5.0.0/mod.ts";
import * as fn from "https://deno.land/x/denops_std@v5.0.0/function/mod.ts";
import { Collector } from "https://raw.githubusercontent.com/Omochice/tataku.vim/master/denops/tataku/interface.ts";

export default class implements Collector {
  constructor(_option: Record<string, unknown>) {
  }

  async run(denops: Denops) {
    return [await fn.getline(denops, ".")];
  }
}

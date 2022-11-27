import { Denops } from "https://deno.land/x/denops_std@v3.8.1/mod.ts";
import * as fn from "https://deno.land/x/denops_std@v3.8.1/function/mod.ts";

export default class {
  constructor(protected option: Record<string, unknown>) {
  }

  run(denops: Denops) {
    return [await fn.getline(denops, ".")];
  }
}

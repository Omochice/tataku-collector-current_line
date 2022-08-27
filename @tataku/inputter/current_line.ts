import { Denops } from "https://deno.land/x/denops_std@v3.8.1/mod.ts";
import * as fn from "https://deno.land/x/denops_std@v3.8.1/function/mod.ts";

export async function run(
  denops: Denops,
  options: Record<string, unkown>,
): Promise<string[]> {
  return [await fn.getline(denops, ".")];
}

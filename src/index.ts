import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  await files("*.css")
    .jsFam()
    .astGrep("--radix-accordion-content-width : $A")
    .replace("--reka-accordion-content-width : $A");

    await files("*.css")
    .jsFam()
    .astGrep("[data-radix-collection-item]")
    .replace("[data-reka-collection-item]");
}
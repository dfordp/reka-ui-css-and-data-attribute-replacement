import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  await files("*.css")
    .astGrep("--radix-accordion-content-width: $A;")
    .replace("--reka-accordion-content-width: $A;");
  

    await files("*.css")
    .astGrep("[data-radix-collection-item]")
    .replace("[data-reka-collection-item]");
}
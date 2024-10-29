import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {

  const oldpattern1 = `[data-radix-collection-item]`
  const newpattern1 = `[data-reka-collection-item]`
  const oldpattern2 = `--radix-accordion-content-width: $A;`
  const newpattern2 = `--reka-accordion-content-width: $A;`

  await files("*.css")
    .astGrep(oldpattern1)
    .replace(newpattern1);

  await files("*.css")
    .astGrep(oldpattern2)
    .replace(newpattern2);
  

}
import PhoneIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/phone.tsx";
import ChevronDownIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-down.tsx";
import { useState } from "preact/hooks";

export default function PreHeader() {

  return (
    <>
    <div class="text-white bg-primary text-xs">
      <div class="lg:container mx-8 md:mx-16 lg:mx-auto flex items-center justify-between py-2">
        <div class="flex gap-2 items-center cursor-pointer"><PhoneIcon class="w-5 h-5"/> +55 (77) 99848-9212</div>
        <div>Obtenha 50% de desconto em produtos selecionados | <a href="#">Compre agora</a></div>
        <div class="flex gap-2 items-center cursor-pointer">Localização <ChevronDownIcon class="w-5 h-5"/></div>
      </div>
    </div>
    </>
  );
}

import PreHeader from "$store/islands/header/PreHeader.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import SearchIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/search.tsx";
import UserIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/user.tsx";
import ShoppingCartIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/shopping-cart.tsx";
import ChevronDownIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-down.tsx";

export interface Props {
  /**
   * @title Logo
   * @default /logo.svg
   */
  logo?: ImageWidget;
}

export default function Header({logo = "/logo.svg"}: Props) {
  return (
    <>
    <PreHeader/>
    <header class="lg:container mx-8 my-5 text-xl md:text-base">
      <div class="flex items-center justify-between">
        <img
          class="object-cover w-20"
          src={logo}
        />
        <div class="flex align-center justify-between gap-6">
          <a href="#">Masculino</a>
          <a href="#">Feminino</a>
          <a href="#">Infantil</a>
          <a class="flex gap-2 items-center" href="#">Categorias <ChevronDownIcon class="w-5 h-5"/></a>
        </div>
        <div class="relative">
          <input placeholder="Procurar produto" class="border border-gray-300 rounded-2xl w-96 py-2 px-4" type="text" />
          <i class="absolute right-6 top-2.5"><SearchIcon class="w-5 h-5"/></i>
        </div>
        <div class="flex gap-4">
          <div class="flex gap-2 items-center"><UserIcon class="w-5 h-5"/><a href="#">Conta</a></div>
          <div class="flex gap-2 items-center"><ShoppingCartIcon class="w-5 h-5"/><a href="#">Carrinho</a></div>
        </div>
      </div>
    </header>
    </>
  );
}

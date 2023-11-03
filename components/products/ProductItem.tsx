import StarIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/star.tsx";
import StarFilledIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/star-filled.tsx";
import HeartIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/heart.tsx";
import ShoppingCartIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/shopping-cart.tsx";

interface Props {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function ProductItem({ id, name, description, price, image }: Props) {
  return (
    <div class="p-4 relative">
        <div class="absolute z-10 cursor-pointer right-4 bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-red-100">
            <HeartIcon class="w-5 h-5"/>
        </div>
        <img class="h-42 transition-transform duration-300 hover:scale-110" src={image} />
        <div class="flex items-center justify-between text-base font-semibold mt-4 mb-3">
            <p class="truncate">{name}</p>
            <p><span class="text-xs">R$</span>{price}</p>
        </div>
        <div class="text-xs mb-2.5 truncate">{description}</div>
        <div class="mb-4 flex gap-0.5">
            <StarFilledIcon class="w-3.5 h-3.5 text-primary"/>
            <StarFilledIcon class="w-3.5 h-3.5 text-primary"/>
            <StarFilledIcon class="w-3.5 h-3.5 text-primary"/>
            <StarFilledIcon class="w-3.5 h-3.5 text-primary"/>
            <StarIcon class="w-3.5 h-3.5 text-primary"/>
            <p class="text-xs ml-1.5">(121)</p>
        </div>
        <button class="flex gap-2 items-center rounded-3xl border border-gray-700 py-1.5 px-3 bg-transparent gray-700 font-semibold transition-all duration-300 hover:text-white hover:bg-primary">
            Comprar
            <ShoppingCartIcon class="w-5 h-5"/>
        </button>
    </div>
  );
}

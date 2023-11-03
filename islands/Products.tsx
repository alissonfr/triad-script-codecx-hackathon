import type { SectionProps } from "$live/mod.ts";
import ProductItem from "$store/components/products/ProductItem.tsx";
import { country } from "../utils/country.ts";
import { useEffect } from "preact/hooks";

interface Product {
  id: number;
  name: string;
  description: string;
  seasons: string[];
  price: number;
  image: string;
}

export interface Props {
   /**
   * @title País
   * @description Valores possíveis: 'brazil', 'angola' e 'canada'
   */
  country?: string;
}

export async function loader({country}: Props, _req: Request) {
  const produtos = (await fetch(
    `http://localhost:3000/api/products/${country ? country : "brazil"}`,
  ).then((r) => {
    return r.json();
  }).catch((e) => console.error(e))) as Product[];
  return { produtos };
}

export default function Products(
  { produtos }: SectionProps<typeof loader>,
  { title = "Produtos selecionados para você" }: Props
  ) {

    useEffect(() =>{
        console.log(country.value)
    }, [country.value])

  return (
    <section class="lg:container mx-8 my-5 mt-20 text-xl md:text-base">
      <h1 class="mt-5 mb-10 text-2xl font-bold">{title}</h1>
      <div class="flex gap-4 mb-10">
        <button class="rounded-3xl border border-gray-700 py-1.5 px-3 bg-transparent gray-700 font-semibold transition-all duration-300 hover:text-white hover:bg-primary">Ofertas</button>
        <button class="rounded-3xl border border-gray-700 py-1.5 px-3 bg-transparent gray-700 font-semibold transition-all duration-300 hover:text-white hover:bg-primary">Lançamentos</button>
        <button class="rounded-3xl border border-gray-700 py-1.5 px-3 bg-transparent gray-700 font-semibold transition-all duration-300 hover:text-white hover:bg-primary">Esportivo</button>
        <button class="rounded-3xl border border-gray-700 py-1.5 px-3 bg-transparent gray-700 font-semibold transition-all duration-300 hover:text-white hover:bg-primary">Mochilas</button>
        <button class="rounded-3xl border border-gray-700 py-1.5 px-3 bg-primary text-white gray-700 font-semibold transition-all duration-300">Mais vendidos</button>
        <button class="rounded-3xl border border-gray-700 py-1.5 px-3 bg-transparent gray-700 font-semibold transition-all duration-300 hover:text-white hover:bg-primary">Acessórios</button>
        <button class="rounded-3xl border border-gray-700 py-1.5 px-3 bg-transparent gray-700 font-semibold transition-all duration-300 hover:text-white hover:bg-primary">Outlet</button>
      </div>
        <div class="grid grid-cols-4 gap-8">
          {produtos.map((produto: Product) => {
            return <ProductItem
              id={produto.id}
              name={produto.name}
              description={produto.description}
              price={produto.price}
              image={produto.image}
              />
          })}
        </div>
    </section>
  );
}


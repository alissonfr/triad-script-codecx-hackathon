import type { ImageWidget } from "apps/admin/widgets.ts";
import Header from "$store/components/header/Header.tsx";


/** @title {{{href}}} */
export interface Link {
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  /** @format textarea */
  headline?: string;
  headsub?: string;
  heroBg?: string;
}

export default function Hero({
  logo = "/logo.svg",
  headline = "Shopping And Department Store.",
}: Props) {
  return (
    <>
    <Header logo={logo} />
    <section class="w-100 bg-cover bg-no-repeat bg-center h-[700px] flex items-center" style="background-image: url('/summer/bg.jpg');">
        <div class="lg:container mx-8 md:mx-16 lg:mx-auto text-gray-100">
          <h1 class="text-6xl font-bold">Estilo que faz você <br/> se destacar</h1>
          <p class="my-6 text-xl">Nossas roupas são projetadas não apenas para vestir, mas <br/> para empoderar você a se destacar em qualquer ocasião.</p>
          <button class="rounded-2xl text-xl bg-primary font-semibold py-3 px-6 hover:bg-blue-400">Saiba mais</button>
        </div>
    </section>
    </>
  );
}

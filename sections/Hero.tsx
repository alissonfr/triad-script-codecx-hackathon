import type { ImageWidget } from "apps/admin/widgets.ts";
import Header from "$store/components/header/Header.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  /**
   * @title Logo
   * @default /logo.svg
   */
  logo?: ImageWidget;
    /**
   * @title Título
   * @default Estilo que faz você se destacar
   */
  headline?: string;
  /**
   * @title Subtitulo
   * @default Nossas roupas são projetadas não apenas para vestir, mas \n para empoderar você a se destacar em qualquer ocasião.
   * @format textarea
   */
  headDescription?: string;
    /**
   * @title Imagem de fundo
   * @default /summer/bg.jpg
   */
    bg?: ImageWidget;
}

export default function Hero({
  logo = "/logo.svg",
  headline = "Estilo que faz você \n se destacar",
  headDescription = "Nossas roupas são projetadas não apenas para vestir, mas \n para empoderar você a se destacar em qualquer ocasião.",
  bg = "/summer/bg.jpg"
}: Props) {
  return (
    <>
    <Header logo={logo} />
    <section class="w-100 bg-cover bg-no-repeat bg-center h-[700px] flex items-center whitespace-pre-line" style={`background-image: url('${bg}');`}>
        <div class="lg:container mx-8 md:mx-16 lg:mx-auto text-gray-100">
          <h1 class="text-6xl font-bold">{headline}</h1>
          <p class="my-6 text-xl">{headDescription}</p>
          <button class="rounded-2xl text-xl bg-primary font-semibold py-3 px-6 hover:bg-blue-400">Saiba mais</button>
        </div>
    </section>
    </>
  );
}

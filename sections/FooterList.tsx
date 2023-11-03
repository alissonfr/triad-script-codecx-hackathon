import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";
import BrandInstagramIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-instagram.tsx";
import BrandFacebookIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-facebook.tsx";
import BrandEmailIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx";
import BrandTwiterIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx";
import BrandLinkedinIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import BrandTikTokIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-tiktok.tsx";

export interface Item {
  text: string;
}

export interface SimpleText {
  title: string;
  items: Array<Item>;
}

export interface Props {
  children?: string;
  title?: string;
  items?: Array<SimpleText>;
}

export default function SimpleTextList({
  title =
    "Nossa loja conta com uma seção exclusiva de roupas plus size, com tendências sempre em alta e preços super baixos. Aproveitar!",
  children = "Nossas Redes",
  items = [
    {
      title: "Departamento",
      items: [
        { text: "Moda" },
        { text: "Moda praia" },
        { text: "Moda verão" },
        { text: "Moda outono" },
        { text: "Moda inverno" },
        { text: "Moda primavera" },
        { text: "Moda tropical" },
        { text: "Feminino" },
        { text: "Masculino" },
        { text: "Infantil" },
        { text: "Adulto" },
        { text: "Fitness" },
        { text: "Acessórios" },
        { text: "Em promoção" },
      ],
    },
    {
      title: "Sobre nós",
      items: [
        { text: "Sobre a deco" },
        { text: "Carreiras" },
        { text: "Notícias & blogs" },
        { text: "Ajuda" },
        { text: "Centro da imprensa" },
        { text: "Compre por local" },
        { text: "Marcas de compras" },
        { text: "Afiliados & Parceiros" },
        { text: "Ideias & guias" },
      ],
    },
    {
      title: "Serviços",
      items: [
        { text: "Cartão Presente" },
        { text: "Aplicativo móvel" },
        { text: "Envio e entrega" },
        { text: "Retirada de pedido" },
        { text: "Cadastro de conta" },
      ],
    },
    {
      title: "Ajuda",
      items: [
        { text: "Ajuda nas compras" },
        { text: "Devoluções" },
        { text: "Rastrear pedidos" },
        { text: "Contate-nos" },
        { text: "Feedback" },
        { text: "Segurança e Fraude" },
      ],
    },
  ],
}: Props) {
  return (
    <div class="lg:container mx-8 md:mx-16 lg:mx-auto mb-8 lg:mb-20 pt-8 lg:border-t flex text-xl md:text-base sm:text-sm sm:flex-col lg:flex-row">
      <div className="pl-12">
        <PoweredByDeco />
        <p class="lg:w-56 pt-8 break-normal">
          {title}
        </p>
        <h2 class="lg:w-56 font-bold pt-8">{children}</h2>
        <div className="pb-8 pt-8 sm:flex-row">
          <div className="pb-4 flex items-center lg:flex-row gap-2">
            <div class="rounded-lg border-gray py-2 px-4 border">
              <BrandInstagramIcon />
            </div>
            <div class="rounded-lg border-gray py-2 px-4 border">
              <BrandFacebookIcon />
            </div>
            <div class="rounded-lg border-gray py-2 px-4 border">
              <BrandEmailIcon />
            </div>
          </div>
          <div className="flex items-center lg:flex-row gap-2">
            <div class="rounded-lg border-gray py-2 px-4 border">
              <BrandTwiterIcon />
            </div>
            <div class="rounded-lg border-gray py-2 px-4 border">
              <BrandLinkedinIcon />
            </div>
            <div class="rounded-lg border-gray py-2 px-4 border">
              <BrandTikTokIcon />
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-12 pl-12">
        {items.map((item) => {
          return (
            <div>
              <h3 class="font-bold text-lg pb-8">{item.title}</h3>
              <div>
                {item.items.map((item) => {
                  return (
                    <div class="hover:text-primary transition-transform transform duration-300 ease-in-out">
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

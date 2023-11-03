import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";
import GifIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/gift.tsx";
import HelpIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/help.tsx";
import LaravelIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-laravel.tsx";

export default function Footer() {
  return (
    <div class="lg:container py-4 md:mx-16 sm:mx-auto lg:mx-auto flex items-center justify-between gap-2 font-bold cursor-pointer border-t border-solid border-gray-200 sm:text-sm">
      <div className="flex items-center sm:flex-col lg:flex-row pt-8 pb-8">
        <div className="flex items-center gap-2 selection:lg:flex-row">
          <LaravelIcon />
          <span className="pr-8 hover:text-primary">Torne-se vendedor</span>
        </div>
        <div className="flex items-center gap-2 selection:lg:flex-row">
          <GifIcon />
          <span className="pr-8 hover:text-primary">
            Cartões de presente
          </span>
        </div>
        <div className="flex items-center gap-2 selection:lg:flex-row">
          <HelpIcon />
          <span className="pr-8 hover:text-primary">Centro de ajuda</span>
        </div>
      </div>
      <div className="flex items-center sm:flex-col lg:flex-row">
        <span className="hover:text-primary">
          Termos de serviço
        </span>
        <span className="pl-8 hover:text-primary">
          Política de Privacidade
        </span>
      </div>
      <div className="flex items-center sm:flex-col lg:flex-row pr-12">
        <span className="pr-8 hover:text-primary">Distribuído por | 2023</span>
        {" "}
        <PoweredByDeco width={76} />
      </div>
    </div>
  );
}

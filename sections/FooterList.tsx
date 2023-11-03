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
    "Our store has an exclusive section of plus size clothing, with trends always on the rise and super low prices. Enjoy!",
  children = "Our Networks",
  items = [
    {
      title: "Department",
      items: [
        { text: "Fashion" },
        { text: "Education Product" },
        { text: "Frozen Food" },
        { text: "Beverages" },
        { text: "Organic Grocery" },
        { text: "Office Supplies" },
        { text: "Beauty Products" },
        { text: "Books" },
        { text: "Electronics & Gadget" },
        { text: "Travel Accessories" },
        { text: "Fitness" },
        { text: "Sneakers" },
        { text: "Toys" },
        { text: "Furniture" },
      ],
    },
    {
      title: "About Us",
      items: [
        { text: "About Shopcart" },
        { text: "Careers" },
        { text: "News & Blog" },
        { text: "Help" },
        { text: "Press Center" },
        { text: "Shop By Location" },
        { text: "Shopcart Brands" },
        { text: "Affiliate & Partners" },
        { text: "Ideas & Guides" },
      ],
    },
    {
      title: "Services",
      items: [
        { text: "Gift Card" },
        { text: "Mobile App" },
        { text: "Shipping & Delivery" },
        { text: "Order Pickup" },
        { text: "Account Signup" },
      ],
    },
    {
      title: "Help",
      items: [
        { text: "Shopcart Help" },
        { text: "Returns" },
        { text: "Track Orders" },
        { text: "Contact Us" },
        { text: "Feedback" },
        { text: "Security & Fraud" },
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

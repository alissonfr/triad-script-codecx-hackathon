export interface Image {
  src?: string;
  alt?: string;
  title?: string;
}

export interface Props {
  src?: string;
  alt?: string;
  title?: string;
  items?: Array<Image>;
}

export default function ParagraphList({
  title = "Main Features",
  items = [
    {
      src:
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Summer fashion",
      title: "Summer",
    },
    {
      src:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Winter fashion",
      title: "Winter",
    },
    {
      src:
        "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHJvdXBhc3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Tropical fashion",
      title: "Tropical",
    },
    {
      src:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm91cGElMjBkZSUyMG1vZGElMjBvdXRvbm98ZW58MHx8MHx8fDA%3D",
      alt: "Autumn fashion",
      title: "Autumn",
    },
    {
      src:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm91cGElMjBmZW1pbmluYXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Spring fashion",
      title: "Spring",
    },
  ],
}: Props) {
  return (
    <section className="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-xl md:text-base flex-auto">
      <h1 className="pb-14 text-lg lg:text-2xl text-white font-bold">
        Shop Our Top Categories
      </h1>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        {items.map((image, index) => (
          <div key={index} class="mb-10 md:mb-20 relative">
            <div className="absolute opacity-100 top-8 justify-center flex inset-0 text-white text-2xl font-bold h-68 w-60">
              {image.title}
            </div>
            <img
              className="object-cover rounded-lg h-56 lg:h-68 w-full lg:w-60"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* transition-transform transform scale-100 group-hover:scale-105 */

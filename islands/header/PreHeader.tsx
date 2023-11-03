import PhoneIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/phone.tsx";
import MapPinIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/map-pin.tsx";
import { useState, useEffect } from "preact/hooks";
import { country } from "../../utils/country.ts";

interface country {
    id: string;
    name: string;
}

const countries: country[] = [
    {
        id: "brazil",
        name: "Brasil"
    },
    {
        id: "canada",
        name: "Canadá"
    },
    {
        id: "angola",
        name: "Angola"
    },
]

export default function PreHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleChangeLocation = (id: string) => {
        country.value = id;
    }

    useEffect(() => {
        console.log(countries)
    }, [])

  
  return (
    <>
    <div class="text-white bg-primary text-xs">
      <div class="lg:container mx-8 md:mx-16 lg:mx-auto flex items-center justify-between py-2">
        <div class="flex gap-2 items-center cursor-pointer"><PhoneIcon class="w-5 h-5"/> +55 (77) 99848-9212</div>
        <div>Obtenha 50% de desconto em produtos selecionados | <a href="#">Compre agora</a></div>
        <div class="flex gap-2 items-center cursor-pointer relative" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            Localização 
            <MapPinIcon class="w-5 h-5"/>
            {menuOpen && (
            <div class="absolute bg-white top-5 text-gray-600 text-base w-48 -left-14">
                <ul>
                    {/* {countries.map((country, index) => {
                        <li key={index} class="p-2 border-b border-gray-300 hover:bg-gray-100">{country.name}</li>
                    })} */}
                    <li class="p-2 border-b border-gray-300 hover:bg-gray-100" onClick={() => {handleChangeLocation("brasil")}}>Brasil</li>
                    <li class="p-2 border-b border-gray-300 hover:bg-gray-100" onClick={() => {handleChangeLocation("canada")}}>Canadá</li>
                    <li class="p-2 border-b border-gray-300 hover:bg-gray-100" onClick={() => {handleChangeLocation("angola")}}>Angola</li>
                </ul>
            </div>
        )}
        </div>
      </div>
    </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { Country } from "@/features/countries/types/Country";
import { CountryService } from "@/features/countries/services/CountryService";

const countryService = new CountryService();

export const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    try {
      const data = await countryService.getAllCountries();
      setCountries(data);
    } catch (error) {
      console.error("Error to search countries:", error);
    }
  };

  console.log(countries);
  return <div>index</div>;
};

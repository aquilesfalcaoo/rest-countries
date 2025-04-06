import axios, { AxiosInstance } from "axios";
import { Country } from "@/features/countries/types/Country";

export class CountryService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "https://restcountries.com/v3.1",
    });
  }

  async getAllCountries(): Promise<Country[]> {
    const response = await this.api.get<Country[]>("/all");
    return response.data;
  }
}

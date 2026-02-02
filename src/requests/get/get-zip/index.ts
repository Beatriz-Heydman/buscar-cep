// Libs
import axios from "axios";

// Types
import type { Adress } from "./types";

export async function zipCodeSearch(zipCode: string) {
  try {
    const response = await axios.get<Adress>(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

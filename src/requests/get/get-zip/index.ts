// Libs
import axios from "axios";

// Types
import type { Adress } from "./types";

export async function zipCodeSearch(zipCode: string, onError: () => void) {
  try {
    const response = await axios.get<Adress>(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    );

    if (response.data.erro === "true") {
      onError();
    }

    return response.data;
  } catch {
    onError();
  }
}

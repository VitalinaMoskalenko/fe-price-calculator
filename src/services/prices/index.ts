import axios, { AxiosResponse } from "axios";

import { PricingResponseType } from "../../types/models/responses";
import { getPricingEndpoint } from "./endpoint";

export const fetchPricingService = (): Promise<PricingResponseType> => {
  return axios
    .get(getPricingEndpoint())
    .then((response: AxiosResponse<PricingResponseType>) => response)
    .catch((error) => error);
};

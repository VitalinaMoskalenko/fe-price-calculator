import { Factor } from "../Factor";
import { PriceResponse } from "../Price";

type PricingType = {
  type: string;
  name: string;
  pricing: PriceResponse[];
  deadlineFactor: Factor[];
};

export type PricingResponseType = {
  data: { data: PricingType[] };
};

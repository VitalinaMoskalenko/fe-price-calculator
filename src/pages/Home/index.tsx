import React, { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { addDays, format } from "date-fns";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { Select, Flex, H2 } from "../../components";
import { fetchPricingService } from "../../services/prices";
import { Factor, Price } from "../../types/models";
import { DocumentReturns } from "./DocumentReturns";
import { EducationLevel } from "./EducationLevel";
import { TotalPrice } from "./TotalPrice";

const Container = styled.div`
  display: flex;
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  padding: 20px 40px;
`;

const MainContainer = styled(Flex)`
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  height: 50vh;
  margin-right: 40px;
  padding-right: 20px;
`;

const Title = styled(H2)`
  margin-bottom: 70px;
`;

const responseKey = {
  service: 0,
  setupFee: 1,
};

const baseTranslationPath = "Pages.HomePage.";

export const Home = (): React.ReactElement => {
  const [priceForCurrency, setPriceForCurrency] = useState<Price[]>([]);
  const [factor, setFactor] = useState<Factor[]>([]);
  const [currency, setCurrency] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [numberOfWords, setNumberOfWords] = useState<number>(0);
  const [educationLevel, setEducationLevel] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dataTime, setDataTime] = useState<string>(
    format(addDays(new Date(), 1), "EEEE, MMM dd, yyyy, hh:mm bb"),
  );
  const { refetch, data } = useQuery(["pricingList"], () => fetchPricingService(), {
    enabled: false,
  });

  const { t } = useTranslation();

  useEffect(() => {
    setCurrency("EUR");
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setPriceForCurrency(
        data.data.data[responseKey.service].pricing
          .map((item) => item.price)
          .filter((item) => item.currency == currency),
      );
      setFactor(data.data.data[responseKey.service].deadlineFactor);
    }
  }, [data, currency]);

  const getData = (data: string) => {
    setDataTime(data);
  };

  const handleChangeCurrency = (value: string) => {
    setCurrency(value);
  };

  const handleChangeDocumentReturn = (documentReturnTime: number, numberOfWords: number) => {
    setDeadline(documentReturnTime);
    setNumberOfWords(numberOfWords);
  };

  const handleChangeEducationLevel = (educationLevel: number) => {
    setEducationLevel(educationLevel);
  };
  useEffect(() => {
    setTotalPrice(deadline * numberOfWords * educationLevel);
  }, [deadline, numberOfWords, educationLevel]);

  return (
    <Container>
      <MainContainer flex="4">
        <Title>{t(`${baseTranslationPath}title`)}</Title>
        <DocumentReturns
          deadlineFactorList={factor}
          handleChangeDocumentReturn={handleChangeDocumentReturn}
          getData={getData}
        />
        <EducationLevel
          priceForCurrency={priceForCurrency}
          handleChangeEducationLevel={handleChangeEducationLevel}
        />
      </MainContainer>
      <Flex flex="2">
        <Flex flex="1" alignItems="end">
          <Select
            onValueSelect={handleChangeCurrency}
            value={currency}
            emptyText={"EUR"}
            data={["EUR", "USD"]}
          />
        </Flex>
        <TotalPrice currency={currency} totalPrice={totalPrice} dataTime={dataTime} />
      </Flex>
    </Container>
  );
};

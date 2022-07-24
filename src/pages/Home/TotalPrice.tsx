import React from "react";

import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { BodyText, Button, Flex, H1, H3, H4, Link, SmallBodyText } from "../../components";

type PropsType = {
  currency: string;
  totalPrice: number;
  dataTime: string;
};

const baseTranslationPath = "Pages.HomePage.";

const TotalPriceBox = styled(Flex)`
  justify-content: center;
`;

const SmallCurrency = styled(SmallBodyText)`
  margin: 0 10px 55px 0;
`;

export const TotalPrice = ({ currency, totalPrice, dataTime }: PropsType) => {
  const { t } = useTranslation();

  return (
    <Flex flex="9" alignItems="center">
      <H3>{t(`${baseTranslationPath}totalPrice`)}</H3>
      <TotalPriceBox flexDirection="row" flex="0">
        <SmallCurrency>{currency}</SmallCurrency>
        <H1>{Math.round(totalPrice)}</H1>
      </TotalPriceBox>
      <BodyText>{t(`${baseTranslationPath}returnedBefore`)}</BodyText>
      <H4>{dataTime}</H4>
      <Button text={t(`${baseTranslationPath}uploadButton`)} onClick={() => null} />
      <Link href="#">{t(`${baseTranslationPath}howItWorks`)}</Link>
    </Flex>
  );
};

import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { Flex, H4, RadioButton } from "../../components";
import { Price } from "../../types/models";

const baseTranslationPath = "Pages.HomePage.educationLevel.";

type PropsType = {
  handleChangeEducationLevel: (educationLevel: number) => void;
  priceForCurrency: Price[];
};

const RadioButtonContainer = styled(Flex)`
  margin-top: 1rem;
  margin-bottom: 30px;
`;

export const EducationLevel = ({ handleChangeEducationLevel, priceForCurrency }: PropsType) => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const { t } = useTranslation();

  const handleOptionChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(changeEvent.target.value));
    handleChangeEducationLevel(Number(changeEvent.target.value));
  };

  return (
    <Flex>
      <H4>{t(`${baseTranslationPath}label`)}</H4>
      <RadioButtonContainer flexDirection="row">
        <RadioButton
          value={Number(
            priceForCurrency.find(
              (item) => item.educationLevel === t(`${baseTranslationPath}universityKey`),
            )?.amount,
          )}
          selectedOption={selectedValue}
          onChange={handleOptionChange}
          text={t(`${baseTranslationPath}university`)}
        />
        <RadioButton
          value={Number(
            priceForCurrency.find((item) => item.educationLevel === t(`${baseTranslationPath}mbaKey`))
              ?.amount,
          )}
          selectedOption={selectedValue}
          onChange={handleOptionChange}
          text={t(`${baseTranslationPath}mba`)}
        />
      </RadioButtonContainer>
    </Flex>
  );
};

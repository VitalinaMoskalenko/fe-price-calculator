import React, { useEffect, useState } from "react";

import { format, addDays } from "date-fns";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { Flex, H4, RadioButton, ControlledSlider } from "../../components";
import { Factor } from "../../types/models";

const baseTranslationPath = "Pages.HomePage.returnDocument.";

type PropsType = {
  handleChangeDocumentReturn: (documentReturnTime: number, numberOfWords: number) => void;
  deadlineFactorList: Factor[];
  getData: (data: string) => void;
};

const RadioButtonContainer = styled(Flex)`
  margin-top: 1rem;
  margin-bottom: 30px;
`;

export const DocumentReturns = ({ handleChangeDocumentReturn, deadlineFactorList, getData }: PropsType) => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(1);
  const { t } = useTranslation();

  const handleOptionChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(changeEvent.target.value);
    const time = deadlineFactorList.find((item) => item.factor === value)?.name;
    setSelectedValue(value);
    switch (time) {
      case t(`${baseTranslationPath}hours24`):
        getData(format(addDays(new Date(), 1), "EEEE, MMM dd, yyyy, hh:mm bb"));
        break;
      case t(`${baseTranslationPath}hours72`):
        getData(format(addDays(new Date(), 3), "EEEE, MMM dd, yyyy, hh:mm bb"));
        break;
      case t(`${baseTranslationPath}week1`):
        getData(format(addDays(new Date(), 7), "EEEE, MMM dd, yyyy, hh:mm bb"));
        break;
      default:
        getData(format(addDays(new Date(), 1), "EEEE, MMM dd, yyyy, hh:mm bb"));
        break;
    }
  };

  const handleChange = (value: number) => {
    setWordCount(value);
  };

  useEffect(() => {
    handleChangeDocumentReturn(Number(selectedValue), wordCount);
  }, [selectedValue, wordCount]);

  return (
    <Flex>
      <H4>{t(`${baseTranslationPath}sliderLabel`)}</H4>
      <ControlledSlider onValueSelect={handleChange} />
      <H4>{t(`${baseTranslationPath}label`)}</H4>
      <RadioButtonContainer flexDirection="row">
        <RadioButton
          value={
            deadlineFactorList &&
            deadlineFactorList.find((item) => item.name === t(`${baseTranslationPath}hours24`))?.factor
          }
          selectedOption={selectedValue}
          onChange={handleOptionChange}
          text={t(`${baseTranslationPath}hours24`)}
        />
        <RadioButton
          value={
            deadlineFactorList &&
            deadlineFactorList.find((item) => item.name === t(`${baseTranslationPath}hours72`))?.factor
          }
          selectedOption={selectedValue}
          onChange={handleOptionChange}
          text={t(`${baseTranslationPath}hours72`)}
        />
        <RadioButton
          value={
            deadlineFactorList &&
            deadlineFactorList.find((item) => item.name === t(`${baseTranslationPath}week1`))?.factor
          }
          selectedOption={selectedValue}
          onChange={handleOptionChange}
          text={t(`${baseTranslationPath}week1`)}
        />
      </RadioButtonContainer>
    </Flex>
  );
};

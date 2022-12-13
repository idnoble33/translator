import React from 'react';
import { animalTranslations, foodTranslations } from './translations';
import {
  CardContainer,
  CardHeader,
  CardContent,
  ContentContainer,
} from './App.styled';

type TAnimalObj = {
  [x: string]: { [x: string]: { [x: string]: any } };
  hippo: {
    species: { en: string; es: string; ru: string; fi: string };
    biome: { en: string; es: string; ru: string; fi: string };
    color: { en: string; es: string; ru: string; fi: string };
  };
  lion: {
    species: { en: string; es: string; ru: string; fi: string };
    biome: { en: string; es: string; ru: string; fi: string };
    color: { en: string; es: string; ru: string; fi: string };
  };
  platypus: {
    species: { en: string; es: string; ru: string; fi: string };
    biome: { en: string; es: string; ru: string; fi: string };
    color: { en: string; es: string; ru: string; fi: string };
  };
  tiger: {
    species: { en: string; es: string; ru: string; fi: string };
    biome: { en: string; es: string; ru: string; fi: string };
    color: { en: string; es: string; ru: string; fi: string };
  };
};

type TFoodObj = {
  [x: string]: { [x: string]: { [x: string]: any } };
  cake: {
    name: { en: string; es: string; ru: string; fi: string };
    meal: { en: string; es: string; ru: string; fi: string };
    description: { en: string; es: string; ru: string; fi: string };
  };
  pizza: {
    name: { en: string; es: string; ru: string; fi: string };
    meal: { en: string; es: string; ru: string; fi: string };
    description: { en: string; es: string; ru: string; fi: string };
  };
  hotdog: {
    name: { en: string; es: string; ru: string; fi: string };
    meal: { en: string; es: string; ru: string; fi: string };
    description: { en: string; es: string; ru: string; fi: string };
  };
  pancake: {
    name: { en: string; es: string; ru: string; fi: string };
    meal: { en: string; es: string; ru: string; fi: string };
    description: { en: string; es: string; ru: string; fi: string };
  };
};

interface IFoodProps {
  food: string;
  translate: (translationKey: string, translateObjectName: string) => undefined;
}
type TAnimalProps = {
  animal: string;
  translate: (
    translationKey: string | number,
    translateObjectName: string | number
  ) => string | number | boolean | null | undefined;
};
const FoodCard = ({ food, translate }: IFoodProps) => (
  <CardContainer variant="">
    <CardHeader>{translate('name', food)}</CardHeader>
    <CardContent>{translate('meal', food)}</CardContent>
    <CardContent>{translate('description', food)}</CardContent>
  </CardContainer>
);

const AnimalCard = ({ animal, translate }: TAnimalProps) => (
  <CardContainer variant="alternateBackgroundColor">
    <CardHeader>{translate('species', animal)}</CardHeader>
    <CardContent>Biome: {translate('biome', animal)}</CardContent>
    <CardContent>Color: {translate('color', animal)}</CardContent>
  </CardContainer>
);

// FIXME: Add your code here
const createTranslate = (dataset: TAnimalObj | TFoodObj) => {
  return (
    comp: (
      arg0: any
    ) =>
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined,
    language: string
  ) => {
    const translate = (translationKey: string, translateObjectName: string) => {
      return dataset &&
        dataset[translateObjectName] &&
        dataset[translateObjectName][translationKey] &&
        dataset[translateObjectName][translationKey][language]
        ? dataset[translateObjectName][translationKey][language]
        : 'N/A';
    };
    return (props: any) => {
      return <React.Fragment>{comp({ ...props, translate })}</React.Fragment>;
    };
  };
};

const translateAnimal = createTranslate(animalTranslations);
const translateFood = createTranslate(foodTranslations);

const App = () => {
  const [language, setLanguage] = React.useState<string>('en');
  const TranslatedAnimalCard = translateAnimal(AnimalCard, language);
  const TranslatedFoodCard = translateFood(FoodCard, language);

  const animals: string[] = ['tiger', 'lion', 'hippo', 'platypus'];
  const foods: string[] = ['cake', 'pizza', 'hotdog', 'pancake'];

  const TranslatedAnimalCards = animals.map((a: string, index: number) => (
    <TranslatedAnimalCard animal={a} key={index} />
  ));
  const TranslatedFoodCards = foods.map((f: string, index: number) => (
    <TranslatedFoodCard food={f} key={index} />
  ));

  return (
    <ContentContainer>
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ru">русский</option>
        <option value="fi">Suomalainen</option>
      </select>
      <div style={{ display: 'flex' }}>{TranslatedAnimalCards}</div>
      <div style={{ display: 'flex' }}>{TranslatedFoodCards}</div>
    </ContentContainer>
  );
};

export default App;

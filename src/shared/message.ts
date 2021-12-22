import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IMessages extends LocalizedStringsMethods {
  name: string;
}

const messages: IMessages = new LocalizedStrings({
  en: {
    name: ''
  }
});

export { messages };

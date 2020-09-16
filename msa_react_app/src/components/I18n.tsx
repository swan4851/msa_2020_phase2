import I18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      Delete: "Delete ",
      DatePosted: " DatePosted ",
      AddPost: " Add New Post ",
      Save: " Save ",
      Title: " Title of blog ",
      Content: " Write your blog here! ",
    },
  },
  es: {
    translation: {
      Delete: "Eliminar ",
      DatePosted: " fecha de publicación ",
      AddPost: " Agregar nueva publicación ",
      Save: " salvar ",
      Title: " Título del blog ",
      Content: " Escribe tu blog aquí! ",
    },
  },
  chi: {
    translation: {
      Delete: "删除 ",
      DatePosted: " 发布日期 ",
      AddPost: " 加入新博客 ",
      Save: " 保存 ",
      Title: " 博客名 ",
      Content: " 博客在这里写! ",
    },
  },
};

I18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default I18n;

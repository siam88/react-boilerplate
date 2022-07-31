import bn from "../locales/bn";
import en from "../locales/en";

const Translate = (locale = "en", key, params = null) => {
  function getValue(locale, key, params = null) {
    let keys = key.split(".");
    let test = locale;
    keys.forEach((i) => {
      test = test[i];
    });

    if (params !== null) {
      let stripped = test;
      Object.keys(params).forEach((j) => {
        stripped = stripped.replace(`{${j}}`, params[j]);
      });
      return stripped;
    } else {
      return test || key;
    }
  }

  if (locale === "bn") {
    return getValue(bn, key, params);
  } else {
    return getValue(en, key, params);
  }
};

export default Translate;

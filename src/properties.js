import script from "./script";

const properties = {
  isComponent: (el) => el.id === process.env.MODULE_ID,
  model: {
    defaults: {
      script
    }
  }
};

export default properties;

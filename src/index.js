import block from "./components/block";
import properties from "./components/properties";

const Plugin = (editor) => {
  const id = process.env.MODULE_ID;
  editor.BlockManager.add(id, block);
  editor.DomComponents.addType(id, properties);
};

export default Plugin;

import { AppProvider, TextField } from "@shopify/polaris";
import { useState,useCallback } from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';
function PrefixExample() {
  const [textFieldValue, setTextFieldValue] = useState('2.00');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Price"
      type="number"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      prefix="$"
      autoComplete="off"
    />
  );
}

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <PrefixExample />
      </div>
    </AppProvider>
  );
}

export default Example;
    
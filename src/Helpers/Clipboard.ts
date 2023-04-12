export const handlePaste = (setValue: (t: string) => void) => {
  navigator.clipboard.readText().then((text) => setValue(text));
};
export const handleCopy = (t: string) => {
  navigator.clipboard
    .writeText(t)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Error copying text to clipboard:', err);
    });
};
export const handleFile = (
  e: { target: { files: any } },
  onChange: (t: any) => void
) => {
  const file = e.target.files?.[0];
  console.log(file);
  if (!file) {
    console.error('No file selected');
    return;
  }

  const reader = new FileReader();
  console.log(file.name);
  reader.onload = (e) => {
    const content = e.target?.result;
    onChange(content);
  };
  reader.readAsText(file);
};

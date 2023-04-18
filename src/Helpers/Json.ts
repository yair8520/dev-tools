export function prettifyJSON(jsonStr: string | any[]) {
  if (!jsonStr || typeof jsonStr !== 'string') {
    return 'Invalid JSON';
  }

  let prettyJson = '';
  let indentLevel = 0;
  let inString = false;

  for (let i = 0; i < jsonStr.length; i++) {
    const char = jsonStr[i];

    if (inString) {
      prettyJson += char;
      if (char === '"' && jsonStr[i - 1] !== '\\') {
        inString = false;
      }
      continue;
    }

    switch (char) {
      case '{':
      case '[':
        prettyJson += char + '\n' + ' '.repeat((indentLevel + 1) * 2);
        indentLevel++;
        break;

      case '}':
      case ']':
        indentLevel = Math.max(0, indentLevel - 1);
        prettyJson += '\n' + ' '.repeat(indentLevel * 2) + char;
        break;

      case ':':
        prettyJson += char + ' ';
        break;

      case ',':
        prettyJson += char + '\n' + ' '.repeat(indentLevel * 2);
        break;

      case '"':
        prettyJson += char;
        inString = true;
        break;

      default:
        prettyJson += char;
        break;
    }
  }

  return prettyJson;
}
export function generateInterfaceFromJson(json: string): string {
  const parsedJson = JSON.parse(json);
  const rootInterfaceName = 'Root';

  function getInterfaceFromObject(obj: any, name: string): string {
    const keys = Object.keys(obj);
    let interfaceString = `interface ${name} {\n`;

    keys.forEach((key) => {
      const value = obj[key];
      if (Array.isArray(value)) {
        const arrayInterfaceName = `${name}_${key}_Item`;
        interfaceString += `  ${key}: ${arrayInterfaceName}[];\n`;
        interfaceString += getInterfaceFromObject(value[0], arrayInterfaceName);
      } else if (typeof value === 'object') {
        const objectInterfaceName = `${key}`;
        interfaceString += `  ${key}: ${objectInterfaceName};\n`;
        interfaceString += getInterfaceFromObject(value, objectInterfaceName);
      } else {
        interfaceString += `  ${key}: ${typeof value};\n`;
      }
    });

    interfaceString += '}\n';
    return interfaceString;
  }

  const interfaceString = getInterfaceFromObject(parsedJson, rootInterfaceName);
  return interfaceString;
}

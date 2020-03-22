# Date Formatter Util

## Instalação
```bash
npm install --save date-formatter-util
```
## Uso 
```js

import dateFormatter from 'date-formatter-util'
const d1 = dateFormatter.parseISOToDefault('2019-12-02T15:35:28.164Z')
const d2 = dateFormatter.parseDateToDefault('Fri Dec 06 2019 10:11:51 GMT-0400 (Horário Padrão do Amazonas)');
const d3 = dateFormetter.parseStringToDate('06/12/2019');
console.log(d1);//02/12/2019
console.log(d2);//06/12/2019
console.log(d3)://2019/12/06
```
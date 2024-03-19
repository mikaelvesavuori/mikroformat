# mikroformat

**MikroFormat helps you convert and format between different formats.**

![Build Status](https://github.com/mikaelvesavuori/mikroformat/workflows/main/badge.svg)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mikaelvesavuori_mikroformat&metric=alert_status)](https://sonarcloud.io/dashboard?id=mikaelvesavuori_mikroformat)

[![codecov](https://codecov.io/gh/mikaelvesavuori/mikroformat/graph/badge.svg?token=NPJPK5Q9G0)](https://codecov.io/gh/mikaelvesavuori/mikroformat)

[![Maintainability](https://api.codeclimate.com/v1/badges/ae4f141ea30453da8826/maintainability)](https://codeclimate.com/github/mikaelvesavuori/mikroformat/maintainability)

---

MikroFormat helps you convert and format between different formats, for example to JSON, to various types of dates, to currencies and numbers, or different string casings.

- Simple API
- Tiny (~1.4 KB gzipped)
- Zero dependencies
- Has 100% test coverage

## Usage

### Basic importing and usage

```typescript
// ES5 format
const { MikroFormat } = require('mikroformat');

// ES6 format
import { MikroFormat } from 'mikroformat';

const mikroformat = new MikroFormat();

const formatted = mikroformat.toBoolean(0);
console.log('Formatted value:', formatted);
```

## Features

### To boolean

Converts a value into a boolean true or false.

```typescript
mikroformat.toBoolean(0); // false
```

### To camel case

Formats a string into a camel-case representation, i.e. `helloWorld`.

```typescript
mikroformat.toCamelCase('Hello there!'); // "helloThere!"
```

### To currency

Outputs a currency string that is accurately formatted to the locale and currency provided.

```typescript

mikroformat.toCurrency({
  value: 24837.731,
  precision: 8,
  locale: 'sv-SE',
  currency: 'EUR'
}); // "24 837,731 €"
```

### To date

Converts one type of date into another.

The available styles are:

- `date`: A basic `YYYY-MM-DD` format, e.g. `2024-02-29`
- `iso`: ISO-8601 format, e.g. `2024-03-13T13:02:40.000Z`
- `unix`: A Unix timestamp, e.g. `1710334960000`
- `utc`: Universal Time Coordinated (RFC 7231) format, e.g. `Wed, 13 Mar 2024 13:02:40 GMT`

```typescript
mikroformat.toDate(1710334960000, 'utc'); // "Wed, 13 Mar 2024 13:02:40 GMT"
```

### To decimal

Formats a number or string as a decimal number.

You may provide a desired level of precision for the decimals.

```typescript
mikroformat.toDecimal(123.129631586528, 8); // Result: 123.12963159
```

### To integer

Formats a number or string as a whole integer.

```typescript
mikroformat.toInteger(1672.47182); // 1672
```

### To JSON

Formats a string representation into JSON.

```typescript
mikroformat.toJSON('{"abc":123,"foo":{"bar":"qwerty"}}'); // { abc: 123, foo: { bar: 'qwerty' } }
```

### To percent

Formats a number or string into a percentage representation (string).

You may provide a desired level of precision for the decimals.

```typescript
mikroformat.toPercent(72.5); // "72.5%"
```

### To slug

Formats a string into a slugified representation, i.e. `hello-world`.

```typescript
mikroformat.toSlug('New library simplifies formatting'); // "new-library-simplifies-formatting"
```

### To snake case

Formats a string into a snake-case representation, i.e. `hello_world`.

```typescript
mikroformat.toSnakeCase('Some method name'); // "some_method_name"
```

### To string

Formats a number, string, or object into a string.

Undefined or null values will become empty strings.

```typescript
mikroformat.toString(123); // "123"
mikroformat.toString({ abc: 123, foo: { bar: 'qwerty' } }; // Result: '{"abc":123,"foo":{"bar":"qwerty"}}'
```

### To title case

Formats a string into a title-case representation, i.e. `Hello World`.

```typescript
mikroformat.toTitleCase('formatting: a new theory'); // "Formatting: A New Theory"
```

## License

MIT. See `LICENSE` file.

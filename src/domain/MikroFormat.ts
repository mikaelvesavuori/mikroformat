import { DateStyle, FormatCurrencyInput } from '../interfaces/';

/**
 * @description MikroFormat helps you convert and format between different formats,
 * for example to JSON, to various types of dates, to currencies and numbers, or
 * different string casings.
 * @example
 * import { MikroFormat } from 'mikroformat';
 *
 * const mikroformat = new MikroFormat();
 */
export class MikroFormat {
  private readonly defaultPrecision = 3;

  /**
   * @description Formats a number, string, or object into a string.
   * Undefined or null values will become empty strings.
   * @example
   * mikroformat.toString(123); // "123"
   * mikroformat.toString({ abc: 123, foo: { bar: 'qwerty' } }; // '{"abc":123,"foo":{"bar":"qwerty"}}'
   */
  public toString(value: number | string | Record<string, any>) {
    if (value === undefined || value === null) return '';
    if (typeof value === 'object' && value.constructor.name === 'Object')
      return JSON.stringify(value);

    return value.toString();
  }

  /**
   * @description Formats a number or string as a whole integer.
   * @example
   * mikroformat.toString(123.123); // 123
   */
  public toInteger(value: number | string) {
    if (typeof value === 'string') return parseInt(parseInt(value).toFixed(0));
    if (typeof value === 'number') return parseInt(value.toFixed(0));
    throw new Error(`Unable to convert "${value}" to an integer!`);
  }

  /**
   * @description Formats a number or string as a decimal number.
   * You may provide a desired level of precision for the decimals.
   * @example
   * mikroformat.toDecimal(123.129631586528, 8); // 123.12963159
   */
  public toDecimal(value: number | string, precision?: number) {
    if (typeof value === 'string')
      return parseFloat(parseFloat(value).toFixed(precision || this.defaultPrecision));
    if (typeof value === 'number')
      return parseFloat(value.toFixed(precision || this.defaultPrecision));
    throw new Error(`Unable to convert "${value}" to a decimal number!`);
  }

  /**
   * @description Converts a value into a boolean true or false.
   * @example
   * mikroformat.toBoolean('false'); // false
   */
  public toBoolean(value: unknown) {
    if (value === 'true') return true;
    if (value === 'false') return false;

    return !!value;
  }

  /**
   * @description Formats a number or string into a percentage representation (string).
   * You may provide a desired level of precision for the decimals.
   * @example
   * mikroformat.toPercent(24.29179797432987, 3); // "24.292%"
   */
  public toPercent(value: number | string, precision?: number) {
    const fixedValue = this.toDecimal(value, precision);
    return `${fixedValue}%`;
  }

  /**
   * @description Formats a string into a slugified representation, i.e. `hello-world`.
   * @example
   * mikroformat.toSlug('Hello World'); // "hello-world"
   */
  public toSlug(value: number | string) {
    return value
      .toString()
      .toLowerCase()
      .replace(/[\s_]+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-');
  }

  /**
   * @description Formats a string into a camel-case representation, i.e. `helloWorld`.
   * @example
   * mikroformat.toCamelCase('hello world'); // "helloWorld"
   */
  public toCamelCase(value: string) {
    return value.toString().replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return '';
      return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  /**
   * @description Formats a string into a snake-case representation, i.e. `hello_world`.
   * @example
   * mikroformat.toSnakeCase('Hello World'); // "hello_world"
   */
  public toSnakeCase(value: string) {
    return value
      .toString()
      .toLowerCase()
      .replace(/[\s-]+/g, '_')
      .replace(/[^a-z0-9_]/g, '')
      .replace(/__+/g, '_');
  }

  /**
   * @description Formats a string into a title-case representation, i.e. `Hello World`.
   * @example
   * mikroformat.toTitleCase('hello world'); // "Hello World"
   */
  public toTitleCase(value: string) {
    return value
      .toString()
      .toLowerCase()
      .replace(/(^|\s)\S/g, (text) => text.toUpperCase());
  }

  /**
   * @description Outputs a currency string that is accurately formatted to the locale and currency provided.
   * @example
   * mikroformat.toCurrency({ value: 24837.731, precision: 8, locale: 'sv-SE', currency: 'EUR' }); // "24 837,731 €"
   */
  public toCurrency(input: FormatCurrencyInput) {
    const { value, locale, precision } = input;

    const fixedValue = (() => {
      if (typeof value === 'number' || typeof value === 'bigint') return value;
      if (typeof value === 'string') return parseFloat(value);
      throw new Error(
        `Unable to use convert value "${value}" of type "${typeof value}" to a currency!`
      );
    })();

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
      maximumSignificantDigits: precision || this.defaultPrecision
    })
      .format(fixedValue)
      .replaceAll(' ', ' '); // Fixes non-standard spaces
  }

  /**
   * @description Formats an object (JSON) into a string representation.
   * @example
   * mikroformat.toJSON('{"abc":123,"foo":{"bar":"qwerty"}}'); // { abc: 123, foo: { bar: 'qwerty' } }
   */
  public toJSON(value: string) {
    if (this.isJson(value)) return JSON.parse(value);
    console.warn(`Provided value "${value}" is not convertible to a JSON representation!`);
  }

  private isJson = (str: string): Record<string, unknown> | boolean => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  /**
   * @description Converts one type of date into another.
   * The available styles are:
   * - `date`: A basic `YYYY-MM-DD` format, e.g. `2024-02-29`
   * - `iso`: ISO-8601 format, e.g. `2024-03-13T13:02:40.000Z`
   * - `unix`: A Unix timestamp, e.g. `1710334960000`
   * - `utc`: Universal Time Coordinated (RFC 7231) format, e.g. `Wed, 13 Mar 2024 13:02:40 GMT`
   * @example
   * mikroformat.toDate('2024-03-13T13:02:40.000Z', 'date'); // "2024-03-13"
   * mikroformat.toDate('2024-03-13', 'iso'); // "2024-03-13T00:00:00.000Z"
   * mikroformat.toDate('Wed, 13 Mar 2024 13:02:40 GMT', 'unix'); // 1710334960000
   * mikroformat.toDate(1710334960000, 'utc'); // "Wed, 13 Mar 2024 13:02:40 GMT"
   */
  public toDate(value: string | number | Date, style: DateStyle) {
    const fn = this.dateFunctions[style];
    if (fn) return fn(value);

    throw new Error('Missing date function!');
  }

  private dateFunctions: Record<string, any> = {
    date: (value: string) => new Date(value).toISOString().split('T')[0],
    iso: (value: string) => new Date(value).toISOString(),
    unix: (value: string) => Math.floor(new Date(value).getTime()),
    utc: (value: string) => new Date(value).toUTCString()
  };
}

import test from 'ava';

import { MikroFormat } from '../src/domain/MikroFormat';

const format = new MikroFormat();

/**
 * POSITIVE TESTS
 */

/**
 * STRING
 */
test('It should keep a string as a string', (t) => {
  const expected = '123';

  const result = format.toString('123');

  t.is(result, expected);
});

test('It should format a number as a string', (t) => {
  const expected = '123';

  const result = format.toString(123);

  t.is(result, expected);
});

test('It should format JSON to a string', (t) => {
  const expected = '{"abc":123,"foo":{"bar":"qwerty"}}';

  const result = format.toString({
    abc: 123,
    foo: { bar: 'qwerty' }
  });

  t.is(result, expected);
});

test('It should format undefined as a string', (t) => {
  const expected = '';

  //@ts-ignore
  const result = format.toString(undefined);

  t.is(result, expected);
});

/**
 * INTEGER
 */
test('It should format a number-type decimal number as an integer', (t) => {
  const expected = 123;

  const result = format.toInteger(123.123);

  t.is(result, expected);
});

test('It should format a string-type decimal number as an integer', (t) => {
  const expected = 123;

  const result = format.toInteger('123.123');

  t.is(result, expected);
});

/**
 * DECIMAL
 */
test('It should format a number-type integer as a decimal number', (t) => {
  const expected = 123.0;

  const result = format.toDecimal(123);

  t.is(result, expected);
});

test('It should format a high-precision number-type integer as a lower-precision decimal number', (t) => {
  const expected = 123.12963159;

  const result = format.toDecimal(123.129631586528, 8);

  t.is(result, expected);
});

test('It should format a string-type integer as a decimal number', (t) => {
  const expected = 123.0;

  const result = format.toDecimal('123');

  t.is(result, expected);
});

/**
 * BOOLEAN
 */
test('It should format a string-type false as a boolean false', (t) => {
  const expected = false;

  const result = format.toBoolean('false');

  t.is(result, expected);
});

test('It should format a string-type true as a boolean true', (t) => {
  const expected = true;

  const result = format.toBoolean('true');

  t.is(result, expected);
});

test('It should format a numeric zero as a boolean false', (t) => {
  const expected = false;

  const result = format.toBoolean(0);

  t.is(result, expected);
});

test('It should format a numeric one as a boolean true', (t) => {
  const expected = true;

  const result = format.toBoolean(2);

  t.is(result, expected);
});

/**
 * PERCENT
 */
test('It should format a number as a percentage with low precision', (t) => {
  const expected = '24.292%';

  const result = format.toPercent(24.29179797432987, 3);

  t.is(result, expected);
});

test('It should format a number as a percentage with high precision', (t) => {
  const expected = '24.2917979743%';

  const result = format.toPercent(24.29179797432987, 10);

  t.is(result, expected);
});

/**
 * CURRENCY
 */
test('It should format a number as a currency', (t) => {
  const expected = '24 837,731 €';

  const result = format.toCurrency({
    value: 24837.731,
    precision: 8,
    locale: 'sv-SE',
    currency: 'EUR'
  });

  t.is(result, expected);
});

test('It should use the default precision for currencies', (t) => {
  const expected = '24 800 €';

  const result = format.toCurrency({
    value: 24837.731,
    locale: 'sv-SE',
    currency: 'EUR'
  });

  t.is(result, expected);
});

test('It should format a string-format number as a currency', (t) => {
  const expected = '24 837,731 €';

  const result = format.toCurrency({
    value: '24837.731',
    precision: 8,
    locale: 'sv-SE',
    currency: 'EUR'
  });

  t.is(result, expected);
});

/**
 * SLUG
 */
test('It should format a string as a slug', (t) => {
  const expected = 'hello-world';

  const result = format.toSlug('Hello World');

  t.is(result, expected);
});

test('It should format a number as a slug', (t) => {
  const expected = '198279187';

  const result = format.toSlug(198279187);

  t.is(result, expected);
});

/**
 * CAMEL-CASE
 */
test('It should format a string as camel case', (t) => {
  const expected = 'helloWorld';

  const result = format.toCamelCase('hello world');

  t.is(result, expected);
});

/**
 * SNAKE-CASE
 */
test('It should format a string as snake case', (t) => {
  const expected = 'hello_world';

  const result = format.toSnakeCase('Hello World');

  t.is(result, expected);
});

/**
 * TITLE-CASE
 */
test('It should format a string as title case', (t) => {
  const expected = 'Hello World';

  const result = format.toTitleCase('hello world');

  t.is(result, expected);
});

/**
 * DATE
 */
test('It should format an ISO date to a YYYY-MM-DD date', (t) => {
  const expected = '2024-03-13';

  const result = format.toDate('2024-03-13T13:02:40.000Z', 'date');

  t.is(result, expected);
});

test('It should format a UTC date to a YYYY-MM-DD date', (t) => {
  const expected = '2024-03-13';

  const result = format.toDate('Wed, 13 Mar 2024 13:02:40 GMT', 'date');

  t.is(result, expected);
});

test('It should format a Unix timestamp to a YYYY-MM-DD date', (t) => {
  const expected = '2024-03-13';

  const result = format.toDate(1710334960000, 'date');

  t.is(result, expected);
});

test('It should format a YYYY-MM-DD date to an ISO date', (t) => {
  const expected = '2024-03-13T00:00:00.000Z';

  const result = format.toDate('2024-03-13', 'iso');

  t.is(result, expected);
});

test('It should format a UTC date to an ISO date', (t) => {
  const expected = '2024-03-13T13:02:40.000Z';

  const result = format.toDate('Wed, 13 Mar 2024 13:02:40 GMT', 'iso');

  t.is(result, expected);
});

test('It should format a Unix timestamp to an ISO date', (t) => {
  const expected = '2024-03-13T13:02:40.000Z';

  const result = format.toDate(1710334960000, 'iso');

  t.is(result, expected);
});

test('It should format a YYYY-MM-DD date to a UTC date', (t) => {
  const expected = 'Wed, 13 Mar 2024 00:00:00 GMT';

  const result = format.toDate('2024-03-13', 'utc');

  t.is(result, expected);
});

test('It should format an ISO timestamp to a UTC date', (t) => {
  const expected = 'Wed, 13 Mar 2024 13:02:40 GMT';

  const result = format.toDate('2024-03-13T13:02:40.000Z', 'utc');

  t.is(result, expected);
});

test('It should format a Unix timestamp to a UTC date', (t) => {
  const expected = 'Wed, 13 Mar 2024 13:02:40 GMT';

  const result = format.toDate(1710334960000, 'utc');

  t.is(result, expected);
});

test('It should format a YYYY-MM-DD date to a Unix date', (t) => {
  const expected = 1710288000000;

  const result = format.toDate('2024-03-13', 'unix');

  t.is(result, expected);
});

test('It should format an ISO date to a Unix date', (t) => {
  const expected = 1710334960000;

  const result = format.toDate('2024-03-13T13:02:40.000Z', 'unix');

  t.is(result, expected);
});

test('It should format a UTC date to a Unix date', (t) => {
  const expected = 1710334960000;

  const result = format.toDate('Wed, 13 Mar 2024 13:02:40 GMT', 'unix');

  t.is(result, expected);
});

/**
 * JSON
 */
test('It should format a string into JSON', (t) => {
  const expected = {
    abc: 123,
    foo: { bar: 'qwerty' }
  };

  const result = format.toJSON('{"abc":123,"foo":{"bar":"qwerty"}}');

  t.deepEqual(result, expected);
});

/**
 * NEGATIVE TESTS
 */
test('It should throw an error if formatting an object as an integer', (t) => {
  const expected = 'Error';

  const error: any = t.throws(() => {
    // @ts-ignore
    format.toInteger({ value: {} });
  });

  t.is(error.name, expected);
});

test('It should throw an error if formatting an object as an decimal', (t) => {
  const expected = 'Error';

  const error: any = t.throws(() => {
    // @ts-ignore
    format.toDecimal({ value: {} });
  });

  t.is(error.name, expected);
});

test('It should throw an error if formatting an object as a currency value', (t) => {
  const expected = 'Error';

  const error: any = t.throws(() => {
    const input = {
      value: {},
      precision: 8,
      locale: 'sv-SE',
      currency: 'EUR'
    };
    //@ts-ignore
    format.toCurrency(input);
  });

  t.is(error.name, expected);
});

test('It should throw an error if attempting to use a non-existing date function', (t) => {
  const expected = 'Error';

  const error = t.throws(() => {
    // @ts-ignore
    format.toDate('Wed, 13 Mar 2024 13:02:40 GMT', 'asdf');
  });

  t.is(error.name, expected);
});

test('It should not format into JSON what cannot be represented as JSON', (t) => {
  const expected = undefined;

  // @ts-ignore
  const result = format.toJSON({ alreadyJson: true });

  t.is(result, expected);
});

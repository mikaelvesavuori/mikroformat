export type FormatCurrencyInput = {
  value: string | number;
  precision?: number;
  locale: Locale;
  currency: Currency;
};

export type DateStyle = 'utc' | 'iso' | 'unix' | 'date';

export type Locale =
  | 'af-ZA'
  | 'ar-SA'
  | 'az-AZ'
  | 'be-BY'
  | 'bg-BG'
  | 'bn-IN'
  | 'bs-BA'
  | 'ca-ES'
  | 'cs-CZ'
  | 'cy-GB'
  | 'da-DK'
  | 'de-DE'
  | 'el-GR'
  | 'en-US'
  | 'es-ES'
  | 'et-EE'
  | 'eu-ES'
  | 'fa-IR'
  | 'fi-FI'
  | 'fo-FO'
  | 'fr-FR'
  | 'gl-ES'
  | 'gu-IN'
  | 'he-IL'
  | 'hi-IN'
  | 'hr-HR'
  | 'hu-HU'
  | 'hy-AM'
  | 'id-ID'
  | 'is-IS'
  | 'it-IT'
  | 'ja-JP'
  | 'ka-GE'
  | 'kk-KZ'
  | 'kn-IN'
  | 'ko-KR'
  | 'kok-IN'
  | 'lt-LT'
  | 'lv-LV'
  | 'mk-MK'
  | 'ml-IN'
  | 'mn-MN'
  | 'mr-IN'
  | 'ms-MY'
  | 'mt-MT'
  | 'nb-NO'
  | 'nl-NL'
  | 'nn-NO'
  | 'pa-IN'
  | 'pl-PL'
  | 'pt-BR'
  | 'ro-RO'
  | 'ru-RU'
  | 'se-NO'
  | 'sk-SK'
  | 'sq-AL'
  | 'sr-BA'
  | 'sv-SE'
  | 'sw-KE'
  | 'syr-SY'
  | 'ta-IN'
  | 'te-IN'
  | 'th-TH'
  | 'tn-ZA'
  | 'tr-TR'
  | 'uk-UA'
  | 'uz-UZ'
  | 'vi-VN'
  | 'xh-ZA'
  | 'zh-CN'
  | 'zh-TW'
  | 'zu-ZA';

export type Currency =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'UYI'
  | 'UYU'
  | 'UZS'
  | 'VED'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPF'
  | 'XSU'
  | 'XUA'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL';

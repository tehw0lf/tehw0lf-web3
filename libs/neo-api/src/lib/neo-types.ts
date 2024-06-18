export interface Token {
  hash: string;
  symbol: string;
  unwrappedSymbol: string;
}

export interface LivedataPrice extends Token {
  usd_price: number;
  fromToken: (token: Token) => LivedataPrice;
}

//yagni probably
export interface IconToken extends Token {
  logo: string;
  fromToken: (token: Token) => IconToken;
}

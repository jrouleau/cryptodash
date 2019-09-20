declare module 'cryptocompare' {
  interface CryptoCompareResponse<T> {
    Response: string
    Message: string
    Data: T
    BaseImageUrl: string
    BaseLinkUrl: string
    RateLimit: Object
    HasWarning: boolean
    Type: number
  }

  interface Coin {
    Algorithm: string
    BlockNumber: number
    BlockReward: number
    BlockTime: number
    BuiltOn: string
    CoinName: string
    ContentCreatedOn: number
    FullName: string
    FullyPremined: string
    Id: string
    ImageUrl: string
    IsTrading: boolean
    Name: string
    NetHashesPerSecond: number
    PreMinedValue: string
    ProofType: string
    SmartContractAddress: string
    SortOrder: string
    Sponsored: boolean
    Symbol: string
    TotalCoinSupply: string
    TotalCoinsFreeFloat: string
    TotalCoinsMined: number
    Url: string
  }

  function setApiKey(userApiKey: string): void

  interface CoinListResult {
    [key: string]: Coin
  }
  function coinList(): Promise<CryptoCompareResponse<CoinListResult>>

  interface ConstituentExchangeListOptions {
    instrument: string
  }
  interface ConstituentExchangeListResult {
    [key: string]: {
      includeAll: boolean
      isActive: boolean
      isTopTier: boolean
      onlyPairs: { [key: string]: boolean }
    }
  }
  function constituentExchangeList(
    options?: ConstituentExchangeListOptions,
  ): Promise<ConstituentExchangeListResult>

  interface ExchangeListResult {
    [key: string]: { [key: string]: string[] }
  }
  function exchangeList(): Promise<ExchangeListResult>

  interface NewsFeedsAndCategoriesResult {
    Categories: {
      categoryName: string
      excludedPhrases: string[]
      wordsAssociatedWithCategory: string[]
    }[]
    Feeds: {
      img: string
      key: string
      lang: string
      name: string
    }[]
  }
  function newsFeedsAndCategories(): Promise<NewsFeedsAndCategoriesResult>

  interface NewsListOptions {
    feeds: string | string[]
    categories: string | string[]
    excludeCategories: string | string[]
    lTs: Date
  }
  interface NewsListResult {
    body: string
    categories: string
    downvotes: string
    guid: string
    id: string
    imageurl: string
    lang: string
    published_on: number
    source: string
    source_info: {
      img: string
      lang: string
      name: string
    }
    tags: string
    title: string
    upvotes: string
    url: string
  }
  function newsList(
    lang: 'EN' | 'PT',
    options?: NewsListOptions,
  ): Promise<NewsListResult[]>

  interface PriceOptions {
    tryConversion?: boolean
    exchange?: string
  }
  interface PriceResult {
    [key: string]: number
  }
  function price(
    fsym: string,
    tsyms: string | string[],
    options?: PriceOptions,
  ): Promise<PriceResult>

  interface PriceMultiOptions {
    tryConversion?: boolean
    exchange?: string
  }
  interface PriceMultiResult {
    [key: string]: {
      [key: string]: number
    }
  }
  function priceMulti(
    fsyms: string | string[],
    tsyms: string | string[],
    options?: PriceMultiOptions,
  ): Promise<PriceMultiResult>

  interface PriceFullOptions {
    tryConversion?: boolean
    exchange?: string
  }
  interface PriceFullResult {
    [key: string]: {
      [key: string]: {
        CHANGE24HOUR: number
        CHANGEDAY: number
        CHANGEHOUR: number
        CHANGEPCT24HOUR: number
        CHANGEPCTDAY: number
        CHANGEPCTHOUR: number
        CONVERSIONSYMBOL: string
        CONVERSIONTYPE: string
        FLAGS: string
        FROMSYMBOL: string
        HIGH24HOUR: number
        HIGHDAY: number
        HIGHHOUR: number
        IMAGEURL: string
        LASTMARKET: string
        LASTTRADEID: string
        LASTUPDATE: number
        LASTVOLUME: number
        LASTVOLUMETO: number
        LOW24HOUR: number
        LOWDAY: number
        LOWHOUR: number
        MARKET: string
        MKTCAP: number
        OPEN24HOUR: number
        OPENDAY: number
        OPENHOUR: number
        PRICE: number
        SUPPLY: number
        TOPTIERVOLUME24HOUR: number
        TOPTIERVOLUME24HOURTO: number
        TOSYMBOL: string
        TOTALTOPTIERVOLUME24H: number
        TOTALTOPTIERVOLUME24HTO: number
        TOTALVOLUME24H: number
        TOTALVOLUME24HTO: number
        TYPE: string
        VOLUME24HOUR: number
        VOLUME24HOURTO: number
        VOLUMEDAY: number
        VOLUMEDAYTO: number
        VOLUMEHOUR: number
        VOLUMEHOURTO: number
      }
    }
  }
  function priceFull(
    fsyms: string | string[],
    tsyms: string | string[],
    options?: PriceFullOptions,
  ): Promise<PriceFullResult>

  interface PriceHistoricalOptions {
    tryConversion?: boolean
    exchange?: string
  }
  interface PriceHistoricalResult {
    [key: string]: number
  }
  function priceHistorical(
    fsym: string,
    tsyms: string | string[],
    time: Date,
    options?: PriceHistoricalOptions,
  ): Promise<PriceHistoricalResult>

  interface GenerateAvgResult {
    CHANGE24HOUR: number
    CHANGEDAY: number
    CHANGEHOUR: number
    CHANGEPCT24HOUR: number
    CHANGEPCTDAY: number
    CHANGEPCTHOUR: number
    FLAGS: string
    FROMSYMBOL: string
    HIGH24HOUR: number
    LASTMARKET: string
    LASTTRADEID: string
    LASTUPDATE: number
    LASTVOLUME: number
    LASTVOLUMETO: number
    LOW24HOUR: number
    MARKET: string
    OPEN24HOUR: number
    PRICE: number
    TOPTIERVOLUME24HOUR: number
    TOPTIERVOLUME24HOURTO: number
    TOSYMBOL: string
    VOLUME24HOUR: number
    VOLUME24HOURTO: number
  }
  function generateAvg(
    fsym: string,
    tsym: string,
    markets: string[],
    tryConversion?: boolean,
  ): Promise<GenerateAvgResult>

  interface TopPairsResult {
    exchange: string
    fromSymbol: string
    toSymbol: string
    volume24h: number
    volume24hTo: number
  }
  function topPairs(fsym: string, limit?: number): Promise<TopPairsResult[]>

  interface TopExchangesResult {
    exchange: string
    fromSymbol: string
    toSymbol: string
    volume24h: number
    volume24hTo: number
  }
  function topExchanges(
    fsym: string,
    tsym: string,
    limit?: number,
  ): Promise<TopExchangesResult>

  interface TopExchangesFullResult {
    AggregatedData: {
      CHANGE24HOUR: number
      CHANGEDAY: number
      CHANGEHOUR: number
      CHANGEPCT24HOUR: number
      CHANGEPCTDAY: number
      CHANGEPCTHOUR: number
      CONVERSIONSYMBOL: string
      CONVERSIONTYPE: string
      FLAGS: string
      FROMSYMBOL: string
      HIGH24HOUR: number
      HIGHDAY: number
      HIGHHOUR: number
      IMAGEURL: string
      LASTMARKET: string
      LASTTRADEID: string
      LASTUPDATE: number
      LASTVOLUME: number
      LASTVOLUMETO: number
      LOW24HOUR: number
      LOWDAY: number
      LOWHOUR: number
      MARKET: string
      MKTCAP: number
      OPEN24HOUR: number
      OPENDAY: number
      OPENHOUR: number
      PRICE: number
      SUPPLY: number
      TOPTIERVOLUME24HOUR: number
      TOPTIERVOLUME24HOURTO: number
      TOSYMBOL: string
      TOTALTOPTIERVOLUME24H: number
      TOTALTOPTIERVOLUME24HTO: number
      TOTALVOLUME24H: number
      TOTALVOLUME24HTO: number
      TYPE: string
      VOLUME24HOUR: number
      VOLUME24HOURTO: number
      VOLUMEDAY: number
      VOLUMEDAYTO: number
      VOLUMEHOUR: number
      VOLUMEHOURTO: number
    }
    CoinInfo: {
      Algorithm: string
      BlockNumber: number
      BlockReward: number
      BlockTime: number
      FullName: string
      Id: string
      ImageUrl: string
      Internal: string
      Name: string
      NetHashesPerSecond: number
      ProofType: string
      TotalCoinsMined: number
      TotalTopTierVolume24H: number
      TotalVolume24H: number
      Url: string
    }
    Exchanges: {
      CHANGE24HOUR: number
      CHANGEDAY: number
      CHANGEHOUR: number
      CHANGEPCT24HOUR: number
      CHANGEPCTDAY: number
      CHANGEPCTHOUR: number
      FLAGS: string
      FROMSYMBOL: string
      HIGH24HOUR: number
      HIGHDAY: number
      HIGHHOUR: number
      LASTTRADEID: string
      LASTUPDATE: number
      LASTVOLUME: number
      LASTVOLUMETO: number
      LOW24HOUR: number
      LOWDAY: number
      LOWHOUR: number
      MARKET: string
      OPEN24HOUR: number
      OPENDAY: number
      OPENHOUR: number
      PRICE: number
      TOSYMBOL: string
      TYPE: string
      VOLUME24HOUR: number
      VOLUME24HOURTO: number
      VOLUMEDAY: number
      VOLUMEDAYTO: number
      VOLUMEHOUR: number
      VOLUMEHOURTO: number
    }[]
  }
  function topExchangesFull(
    fsym: string,
    tsym: string,
    limit?: number,
  ): Promise<TopExchangesFullResult>

  interface HistoDayOptions {
    aggregate?: number
    aggregatePredictableTimePeriods?: boolean
    allData?: boolean
    toTs?: number
    limit?: number | 'none'
    tryConversion?: boolean
    timestamp?: Date
    exchange?: string
  }
  interface HistoDayResult {
    close: number
    high: number
    low: number
    open: number
    time: number
    volumefrom: number
    volumeto: number
  }
  function histoDay(
    fsym: string,
    tsym: string,
    options?: HistoDayOptions,
  ): Promise<HistoDayResult[]>

  interface HistoHourOptions {
    aggregate?: number
    aggregatePredictableTimePeriods?: boolean
    toTs?: number
    limit?: number
    tryConversion?: boolean
    timestamp?: Date
    exchange?: string
  }
  interface HistoHourResult {
    close: number
    high: number
    low: number
    open: number
    time: number
    volumefrom: number
    volumeto: number
  }
  function histoHour(
    fsym: string,
    tsym: string,
    options?: HistoHourOptions,
  ): Promise<HistoHourResult[]>

  interface HistoMinuteOptions {
    aggregate?: number
    aggregatePredictableTimePeriods?: boolean
    toTs?: number
    limit?: number
    tryConversion?: boolean
    timestamp?: Date
    exchange?: string
  }
  interface HistoMinuteResult {
    close: number
    high: number
    low: number
    open: number
    time: number
    volumefrom: number
    volumeto: number
  }
  function histoMinute(
    fsym: string,
    tsym: string,
    options?: HistoMinuteOptions,
  ): Promise<HistoMinuteResult[]>

  interface LatestSocialOptions {
    coinId: number
  }
  interface LatestSocialResult {} // TODO
  function latestSocial(
    options?: LatestSocialOptions,
  ): Promise<LatestSocialResult>

  interface HistoSocialOptions {
    coinId: number
    aggregate: number
    aggregatePredictableTimePeriods: boolean
    limit: number
    toTs: number
  }
  interface HistoSocialResult {} // TODO
  function histoSocial(
    timePeriod: 'day' | 'hour',
    options?: HistoSocialOptions,
  ): Promise<HistoSocialResult>
}

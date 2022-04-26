interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_ACCESS_TOKEN: string;
  readonly CONTENTFUL_ENVIRONMENT: string;
  
  readonly TWITTER_CONSUMER_KEY: string;
  readonly TWITTER_CONSUMER_SECRET: string;
  readonly TWITTER_ACCESS_TOKEN_KEY: string;
  readonly TWITTER_ACCESS_TOKEN_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
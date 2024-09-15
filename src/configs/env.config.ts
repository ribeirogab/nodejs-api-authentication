import 'dotenv/config';
import { get } from 'env-var';
import { injectable } from 'tsyringe';

import {
  EmailProviderEnum,
  HashProviderEnum,
  NodeEnvEnum,
  StageEnum,
  UniqueIdProviderEnum,
} from '@/constants';

@injectable()
export class EnvConfig {
  public readonly NODE_ENV = get('NODE_ENV')
    .default(NodeEnvEnum.Production)
    .asEnum(Object.values(NodeEnvEnum));

  public readonly STAGE = get('STAGE')
    .default(StageEnum.Prod)
    .asEnum(Object.values(StageEnum));

  public readonly PORT = get('PORT').default(8080).asPortNumber();
  public readonly CORS_ORIGIN = get('CORS_ORIGIN').default('*').asString();
  public readonly JWT_SECRET = get('JWT_SECRET').required().asString();

  public readonly EMAIL_PROVIDER = get('EMAIL_PROVIDER')
    .default(EmailProviderEnum.Resend)
    .asEnum(Object.values(EmailProviderEnum));

  public readonly UNIQUE_ID_PROVIDER = get('UNIQUE_ID_PROVIDER')
    .default(UniqueIdProviderEnum.Uuid)
    .asEnum(Object.values(UniqueIdProviderEnum));

  public readonly HASH_PROVIDER = get('HASH_PROVIDER')
    .default(HashProviderEnum.Crypto)
    .asEnum(Object.values(HashProviderEnum));

  public readonly WEBSITE_BASE_URL = get('WEBSITE_BASE_URL')
    .default(`http://localhost:${this.PORT}`)
    .asString();
}

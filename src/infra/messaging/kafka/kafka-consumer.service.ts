import { OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['model-hermit-8617-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bW9kZWwtaGVybWl0LTg2MTckbEysSkswwIR_UWJLGc_isgppb_Hyqta7nWpEq9E',
          password:
            '_vCK53fxac1cg1xi0m_aQRVIThHMI-2rv8p_NTp2Cz9aEz_Dst1Zb8Ah6TGPZIMxLpsIog==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}

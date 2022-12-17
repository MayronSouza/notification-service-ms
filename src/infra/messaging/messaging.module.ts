import { SendNotification } from '@application/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
})
export class MessagingModule {}

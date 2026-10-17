import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
    sendNotification(recipient: string, message: string) {
        return {
            recipient,
            message,
        };
    }
}

import { Type, Static } from "@sinclair/typebox";


export const NotificationLogSchema = Type.Object({
    event: Type.String(),
    email: Type.String(),
    id: Type.Number(),
    subject: Type.String(),
    reason: Type.String(),
    tag: Type.String(),
    sending_ip: Type.String(),
    ts_epoch: Type.Number(),
    uuid:Type.String(),
    comment_lender: Type.String()
});

export type NotificationLogSchema = Static<typeof NotificationLogSchema>;
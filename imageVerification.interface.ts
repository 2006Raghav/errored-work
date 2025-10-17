import { Type, Static } from "@sinclair/typebox";

import { payment_method } from "./../enums/enums";

export const imageVerfication = Type.Object({
    cfid: Type.Number(),
    ln_no: Type.String(),
    payment_date: Type.String(),
    receipt_url: Type.String(),
    amount: Type.String(),
    payment_method: Type.Enum(payment_method),
    verification_status: Type.Boolean(),
    payer_role: Type.String(),
    comment:Type.String(),
    comment_lender: Type.String()
});

export type imageVerfication = Static<typeof imageVerfication>;
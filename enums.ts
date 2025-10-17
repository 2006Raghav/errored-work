// This file defines the core enumerations used across our application schemas.

export enum Role {
  BORROWER = "Borrower",
  LENDER = "Lender",
}

export enum LoanPaidStatus {
  YES = "Y",
  NO = "N",
}

export enum PaymentStatus {
  PREPAID = "Prepaid",
  ONTIME = "On time",
  LATE5 = "Late 5",
  LATE30 = "Late 30",
  LATE60 = "Late 60",
  LATE90 = "Late 90",
}

export enum LoanStatus {
  CURRENT = "Current",
  PENDING = "Pending",
  COMPLETE = "Complete",
}

export enum payment_method{
    ZELLE= "Zelle",
    PAYPAL= "Paypal",
    VENMO= "Venmo",
    BANK_TRANSFER= "Bank Transfer",
}



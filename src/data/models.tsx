export interface BaseModel {
  id: string;
  name: string;
}
export interface Account extends BaseModel {}
export interface Category extends BaseModel {}
export interface Transaction extends BaseModel {
  amount: number;
  accountId: string;
  categoryId: string;
  tags: Array<string>;
  billId?: string;
}

export interface BillBase extends BaseModel {
  frequency: "daily" | "weekly" | "monthly";
}

export enum DaysInWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export enum MonthsInYear {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}

export interface DailyBill extends BillBase {}

export interface WeeklyBill extends BillBase {
  dayOfWeek: DaysInWeek;
}

export interface MonthlyBill extends BillBase {
  dayOfMonth: number;
}

export type Bill = DailyBill | WeeklyBill | MonthlyBill;

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IELementTypes {
  createdAt: string;
  name: string;
  description: string;
  payRunId: string;
  payRunValueId: number;
  classificationId: string;
  classificationValueId: number;
  categoryId: number;
  categoryValueId: string;
  reportingName: string;
  processingType: string;
  status: boolean;
  prorate: string;
  effectiveStartDate: string;
  effectiveEndDate: string;
  selectedMonths: string[];
  payFrequency: string;
  modifiedBy: string;
  id: string;
}

export type BlockType<DataType = any> = {
  loading: boolean;
  error?: string;
  data: DataType;
  success: boolean;
};

export const block = {
  loading: false,
  error: "",
  success: false,
  data: undefined,
};

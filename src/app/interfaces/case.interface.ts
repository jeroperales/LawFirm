export interface Case {
   id?: number;
  title: string;
  caseNumber: string;
  description: string;
  status: 'OPEN' | 'CLOSED' | 'PENDING';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  type: string;
  startDate: Date;
  endDate?: Date;
}
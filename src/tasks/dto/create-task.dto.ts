export class CreateTaskDto {
    description: string;
    dueDate: Date;
    category: string;
    status: string;
    assignedMemberId: number;
  }
  
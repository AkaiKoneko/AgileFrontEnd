import {TaskStatus} from "./taskStatus";
/**
 * Created by Akai on 2017-05-31.
 */
export class Iteration {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  statues: TaskStatus[];
}

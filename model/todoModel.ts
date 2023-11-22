import { Document, Schema } from "mongoose";

interface iTodo {
  taskName: string;
  progress: boolean;
  done: boolean;
}
interface iTododata extends iTodo, Document {}
const TodoModel = new Schema<iTododata>({
  taskName: {
    type: String,
  },
});

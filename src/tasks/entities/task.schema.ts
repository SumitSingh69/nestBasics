import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class Task extends Document {
    @Prop({required: true, maxlength: 30})
    title : string;

    @Prop({maxlength: 500})
    description : string;

    @Prop({})
    deadLine : Date;

    @Prop({default: false})
    isCompleted : boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
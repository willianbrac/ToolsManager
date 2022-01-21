import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tools")
class Tool {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @Column("simple-array")
    tags: string[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Tool };
// "text", { array: true, default: "{}" }

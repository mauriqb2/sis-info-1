import { Injectable } from "@nestjs/common";
import { User } from "src/entity/user.entity";
import {DataSource, Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async createUser(user: User){
        this.dataSource.getRepository(User).save(user);
    }

    async getAllUser(){
        return this.dataSource.getRepository(User).find();
    }

    async getUserByCI(ci: number){
        return this.dataSource.getRepository(User).findOneBy({ci: ci});
    }

    async deleteUserByCI(ci: number){
        return this.dataSource.getRepository(User).delete({ci: ci});
    }
}
import {Skill} from "./skill.model";

export class Team {


  constructor(public id?: number,public name?: string, public nick?: string, public picture?: number, public skills?: Skill) {
  }
}

import {Skill} from "./skill.model";

export class Service {


  constructor(public id?: number, public name?: string, public icon?: string, public description?: string, public skill?: Skill,) {
  }
}

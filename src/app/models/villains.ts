import { Sidekicks } from './sidekicks';
import { Group } from './group';
import { Hero } from './heros';
export class Villains{

  id: number;
  villainName: string;
  realName: string;
  profileImage: string;
  hero: Hero;
  sidekicks: Sidekicks;
  images: string;
  description: string;
  group: Group;

  constructor(
      id,
      villainName,
      realName,
      profileImage,
      hero,
      sidekicks,
      image,
      description,
      group,
  ){

    this.id = id;
    this.villainName = villainName;
    this.realName = realName;
    this.profileImage = profileImage;
    this.hero = hero;
    this.sidekicks = sidekicks;
    this.images = image;
    this.description = description;
    this.group = group;

  }

}
import { Hero } from './heros';
import { Group } from './group';


export class Sidekicks{

  id: number;
  heroName: string;
  realName: string;
  profileImage: string;
  hero: Hero
  images: string;
  description: string;
  group: Group;

  constructor(
    id,
    heroName,
    realName,
    profileImage,
    hero,
    images,
    description,
    group
  ) {
    this.id = id;
    this.heroName = heroName;
    this.realName = realName;
    this.profileImage = profileImage;
    this.hero = hero;
    this.images = images;
    this.description = description;
    this.group = group;
  }

}
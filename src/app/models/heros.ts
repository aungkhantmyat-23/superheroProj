

export class Hero {
  id: number;
  heroName: string;
  realName: string;
  profileImage: string;
  images: string;
  description: string;
  group: string;

  constructor(
    id,
    heroName,
    realName,
    profileImage,
    images,
    description,
    group
  ) {
    this.id = id;
    this.heroName = heroName;
    this.realName = realName;
    this.profileImage = profileImage;
    this.images = images;
    this.description = description;
    this.group = group;
  }
}

export class Group {
  id: number;
  groupName: string;
  profileImage: string;
  description: string;

  constructor(id, groupName, profileImage, description) {
    this.id = id;
    this.groupName = groupName;
    this.profileImage = profileImage;
    this.description = description;
  }
}

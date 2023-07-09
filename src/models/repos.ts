class Repos {
  id: number;
  image: string;
  title: string;
  description: string;
  language: string;

  constructor(id: number, image: string, title: string, description: string, language: string) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.language = language
  }
}

export default Repos
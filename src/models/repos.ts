class Repos {
  id: number;
  image: string;
  title: string;
  description: string;
  language: string;
  link: string
  deploy: string

  constructor(id: number, image: string, title: string, description: string, language: string, link: string, deploy: string) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.language = language
    this.link = link
    this.deploy = deploy
  }
}

export default Repos
export class Movie {
    public name: string;
    public description: string;
    public imagePath: string;
    public year: string;
    public duration: string;
    public nation: string;
    public category: string;
    constructor(name: string, desc: string, imagePath: string, year: string,duration: string,nation: string,category: string) {

        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.year = year;
        this.duration = duration;
        this.nation = nation;
        this.category = category;
    }
}
let nextId = 2;
function getNextId (){
    return nextId++;
}
export default class Note {
    constructor (title, body, isBookmarked){
        this.title = title;
        this.body = body;
        this.date = Date.now();
        this.id = getNextId();
        this.isBookmarked = isBookmarked
    }
    get getNoteContent(){
        return { title, body }
    }
    get getDate(){
        return this.date;
    }
    get getId(){
        return this.id;
    }
    get getAll(){
        return {
            title,
            body,
            date,
            id,
            isBookmarked
        }
    }
    // set setNewTitle(newTitle){
    //     this.title = newTitle;
    // }
    // set setNewBody(newBody){
    //     this.body = newBody;
    // }
}
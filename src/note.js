let nextId = 0;
function getNextId (){
    return nextId++;
}
export default class Note {
    constructor (title, body){
        this.title = title;
        this.body = body;
        this.date = Date.now();
        this.id = getNextId();
    }
    get getNoteContent(){
        return [ title, body ]
    }
    get getDate(){
        return this.date;
    }
    get getId(){
        return this.id;
    }
    get getAll(){
        return [
            this.title,
            this.body,
            this.date,
            this.id
        ]
    }
    set setNewTitle(newTitle){
        this.title = newTitle;
    }
    set setNewBody(newBody){
        this.body = newBody;
    }
    set setNewContent(newContent){
        [this.title, this.body] = newContent;
    }
    setNewContent(newContent, attribute){
        if(attribute === 'title')
            this.setNewTitle(newContent);
        else if (attribute === 'body')
            this.setNewBody(newContent);
        else if (attribute === 'content')
            this.setNewContent(newContent);
    }
}
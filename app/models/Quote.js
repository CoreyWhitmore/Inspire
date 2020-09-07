export default class Quote {
    constructor({ body, author }) {
        this.body = body
        this.author = author
    }

    get Template() {
        return `
        <span title="Author: ${this.author}">"${this.body}"</span>
        `
    }
}
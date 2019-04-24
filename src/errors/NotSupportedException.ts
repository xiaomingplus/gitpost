export default class NotSupportedException extends Error {
    constructor(message?: string) {
        super(message || "it't not supported now");
        this.name = "NotSupportedException";
    }
}

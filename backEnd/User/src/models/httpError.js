class HttpError extends Error{
    constructor(m,errCode){
        super(m)
        this.code = errCode
    }
}

module.exports = HttpError
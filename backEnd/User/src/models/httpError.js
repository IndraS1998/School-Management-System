class HttpError extends Error{
    constructor(m,errCode){
        super(m)
        this.code = errCode
    }

    static voidInput(){
        return new HttpError('invalid input',401)
    }
}

module.exports = HttpError
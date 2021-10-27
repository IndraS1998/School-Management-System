class Matricule{
    constructor(specialityCode,studentCount){
        //create a matricule of format kp21swe0087
        this.specialityCode = specialityCode
        this.studentCount = studentCount
    }

    static getMatricule(){
        const d = new Date()
        let matStr = d.getFullYear().toString().split('0')[1]
        return `kp${matStr}${specialityCode}${studentCount++}`
    }
}

module.exports = Matricule
export class Employee{
    constructor(
        public id: number,
        public empId: number,
        public firstName: String,
        public lastName: String,
        public email: String,
        public role: String,
        public bloodGroup: String,
        public gender: String,
        public martialStatus: String,
        public dob: String,
        public active: boolean,
        public createdBy: number,
        public createdOn: String,
        public updatedOn: String,
        public contact:{
            num: number,
            type: String
        },
        public address:{
            addressLine1: String,
            addressLine2: String,
            city: String,
            state: String,
            pincode: String
        }
    ){}
}
export class Employee{
    constructor(
        public empId: number,
        public firstName: String,
        public lastName: String,
        public email: String,
        public role: String,
        public bloodGroup: String,
        public gender: String,
        public martialStatus: String,
        public dob: String,
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
class Teacher {
	readonly firstName: string;
	readonly lastName: string;
	readonly fullTimeEmployee: boolean;
	readonly yearsOfExperience?: number;
	readonly location: string;
	[key: string]: any;
	
	constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalAttributes: any = {}) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullTimeEmployee = fullTimeEmployee;
		this.location = location;
		Object.assign(this, additionalAttributes);
	}
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName:string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	const firstLetter = firstName.charAt(0).toUpperCase();
	const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
	return '${firstLetter}. ${fullLastName}';
};

interface StudentClassConstructor {
	new(firstName: string, lastName:string): StudentClassInterface;
}

interface StudentClassInterface {
	workOnHomework():string;
	displayName():string;
}

class StudentClass implements StudentClassInterface {
	constructor(private firstName: string, private lastName: string) {}
	workOnHomework(): string {
		return "Currently working";
	}
	
	displayName(): string {
		return this.firstName;
	}
}


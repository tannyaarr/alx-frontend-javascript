interface MajorCredits {
	brand: "MajorCredits";
	credits: number;
}

interface MinorCredits {
	brand "MinorCredits";
	credits: number;
}

function sumMajorcredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
		brand: "MajorCredits",
		credits: subject1.credits + subject2.credits
	};
}

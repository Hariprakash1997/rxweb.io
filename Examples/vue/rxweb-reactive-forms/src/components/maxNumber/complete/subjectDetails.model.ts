import {  maxNumber,prop, } from   "@rxweb/reactive-forms"   

export class SubjectDetails {

	@prop()
	subjectCode: string;

	//If you want to apply conditional expression of type 'function'
	@maxNumber({value:100  ,conditionalExpression:(x,y) => x.subjectCode == "8CS5A"  }) 
	maximumMarks: number;
	
	
	//If you want to apply conditional expression of type 'string'
	@maxNumber({value:100  ,conditionalExpression:'x => x.subjectCode == "8CS5A"' }) 
	obtainedMarks: number;
	
	
	@maxNumber({value:50 }) 
	passingMarks: number;
	
	
	@maxNumber({value:70  ,message:'{{0}} exceeds the Maximum marks Limit' }) 
	practicalMarks: number;
	
	
	@maxNumber({value:50  ,messageKey:'maxNumberMessageKey' }) 
	disciplineMarks: number;
	
	
}

import {  compose,RxwebValidators } from "@rxweb/reactive-form-validators"

export class User {

	@compose({validators:[RxwebValidators.alpha(),RxwebValidators.required()], messageKey:'composeMessageKey' }) 
	lastName: string;

}
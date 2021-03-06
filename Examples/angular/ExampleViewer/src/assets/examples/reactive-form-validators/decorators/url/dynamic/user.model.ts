import {  url,prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	adminWebsiteUrl: string;

	@prop()
	customerWebsiteUrl: string;

	@prop()
	maintenanceWebSiteUrl: string;

	@prop()
	fqdnDomainUrl: string;

	@prop()
	localhostUrl: string;

	@prop()
	intraServerUrl: string;

	@prop()
	deployedWebSiteUrl: string;

}

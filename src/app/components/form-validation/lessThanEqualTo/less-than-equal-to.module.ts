import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { LESS_THAN_EQUAL_TO_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/lessThanEqualTo/less-than-equal-to.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LESS_THAN_EQUAL_TO_ROUTING } from "src/app/components/form-validation/lessThanEqualTo/less-than-equal-to.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LESS_THAN_EQUAL_TO_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LESS_THAN_EQUAL_TO_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LessThanEqualToModule { }




import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { MAX_TIME_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/maxTime/max-time.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MAX_TIME_ROUTING } from "src/app/components/form-validation/maxTime/max-time.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MAX_TIME_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MAX_TIME_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MaxTimeModule { }




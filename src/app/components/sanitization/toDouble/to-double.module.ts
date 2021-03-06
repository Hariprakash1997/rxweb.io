import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { TO_DOUBLE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/toDouble/to-double.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TO_DOUBLE_ROUTING } from "src/app/components/sanitization/toDouble/to-double.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TO_DOUBLE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TO_DOUBLE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ToDoubleModule { }




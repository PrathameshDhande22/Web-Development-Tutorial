import { Component } from '@angular/core';
import { SignalsTut } from '../signals-tut/signals-tut';
import { ParentComponent } from '../parent-component/parent-component';
import { ParentComponentOutput } from "../parent-component-output/parent-component-output";
import { HostElements } from "../host-elements/host-elements";
import { References } from "../references/references";
import { DomApi } from "../dom-api/dom-api";
import { ProgramaticallyComponents } from "../programatically-components/programatically-components";
import { Templates } from "../templates/templates";
import { PipesTut } from "../pipes-tut/pipes-tut";
import { DirectivesTut } from '../directives-tut/directives-tut';
import { ServicesTut } from "../services-tut/services-tut";

@Component({
  selector: 'app-essentials',
  imports: [
    SignalsTut,
    ParentComponent,
    ParentComponentOutput,
    HostElements,
    References,
    DomApi,
    ProgramaticallyComponents,
    Templates,
    PipesTut,
    DirectivesTut,
    ServicesTut
],
  templateUrl: './essentials.html',
})
export class Essentials {

}

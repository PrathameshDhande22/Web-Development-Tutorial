import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { NavlinksComponent } from './Header/navlinks/navlinks.component';
import { SmallbtnComponent } from './Header/smallbtn/smallbtn.component';
import { HelptextComponent } from './Header/helptext/helptext.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './child/child.component';
import { OutputComponent } from './output/output.component';
import { ChildComponent as OutputChild } from './output/child/child.component';
import { FilterComponent } from './output/filter/filter.component';
import { NonrelatedComponent } from './nonrelated/nonrelated.component';
import { ChildnamesComponent } from './nonrelated/childnames/childnames.component';
import { SearchComponent } from './nonrelated/search/search.component';
import { TemplatereferencevarComponent } from './templatereferencevar/templatereferencevar.component';
import { RefvarcomponentComponent } from './refvarcomponent/refvarcomponent.component';
import { ChildcomponentComponent } from './refvarcomponent/childcomponent/childcomponent.component';
import { ChilddetailComponent } from './refvarcomponent/childdetail/childdetail.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewChildrenCompComponent } from './view-children-comp/view-children-comp.component';
import { NgtemplatecompComponent } from './ngtemplatecomp/ngtemplatecomp.component';
import { NgcontainercompComponent } from './ngcontainercomp/ngcontainercomp.component';
import { NgcontentcompComponent } from './ngcontentcomp/ngcontentcomp.component';
import { ChildcontentComponent } from './ngcontentcomp/childcontent/childcontent.component';
import { ContentchildcompComponent } from './contentchildcomp/contentchildcomp.component';
import { ChildtutorialComponent } from './contentchildcomp/childtutorial/childtutorial.component';
import { ContentchildrenComponent } from './contentchildren/contentchildren.component';
import { ChildchildrenComponent } from './contentchildren/childchildren/childchildren.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { NgonchangesComponent } from './lifecyclehooks/ngonchanges/ngonchanges.component';
import { MessagecomponentComponent } from './lifecyclehooks/ngonchanges/messagecomponent/messagecomponent.component';
import { NgaftercontentinitComponent } from './lifecyclehooks/ngaftercontentinit/ngaftercontentinit.component';
import { ChildcontentComponent as ChildContentNg } from './lifecyclehooks/ngaftercontentinit/childcontent/childcontent.component';
import { NgondestoryComponent } from './lifecyclehooks/ngondestory/ngondestory.component';
import { ChilddestroyComponent } from './lifecyclehooks/ngondestory/childdestroy/childdestroy.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { HostlistenerDirective } from './customdirective/hostlistener.directive';
import { HostbindingDirective } from './customdirective/hostbinding.directive';
import { PropertybindingDirective } from './customdirective/propertybinding.directive';
import { ConditionalattrDirective } from './customdirective/conditionalattr.directive';
import { StructuralDirective } from './customdirective/structural.directive';
import { NgswtichComponent } from './ngswtich/ngswtich.component';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import { Child1Component } from './viewencapsulation/child1/child1.component';
import { ServiceComponent } from './service/service.component';
import { ServiceSiblingComponent } from './service/service-sibling/service-sibling.component';
import { ServiceChildComponent } from './service/service-child/service-child.component';
import { SubscribeService } from './Services/subscribe.service';
import { LogService } from './Services/log-service.service';
import { InjectiontokenComponent } from './injectiontoken/injectiontoken.component';
import { ComponentserviceComponent } from './componentservice/componentservice.component';
import { ProductDetailComponent } from './componentservice/product-detail/product-detail.component';
import { HomeComponent } from './Pages/homecomponent/homecomponent.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { StartedComponent } from './Pages/started/started.component';
import { DirectiveComponent } from './Pages/directive/directive.component';
import { BindingComponent } from './Pages/binding/binding.component';
import { ReferenceVarComponent } from './Pages/reference-var/reference-var.component';
import { DecoratortemplateComponent } from './Pages/decoratortemplate/decoratortemplate.component';
import { HooksComponent } from './Pages/hooks/hooks.component';
import { ConceptsComponent } from './Pages/concepts/concepts.component';
import { ServicesdependencyComponent } from './Pages/servicesdependency/servicesdependency.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { RouterTutComponent } from './Pages/router-tut/router-tut.component';
import { RouteParamComponent } from './route-param/route-param.component';
import { QueryStringComponent } from './query-string/query-string.component';
import { FragmentComponent } from './fragment/fragment.component';
import { RouteguardComponent } from './Pages/routeguard/routeguard.component';
import { LoginComponent } from './login/login.component';
import { ProtectedRoutesComponent } from './Pages/protected-routes/protected-routes.component';
import { Proteroute1Component } from './Pages/protected-routes/proteroute1/proteroute1.component';
import { Proteroute2Component } from './Pages/protected-routes/proteroute2/proteroute2.component';
import { CandeactivateformComponent } from './candeactivateform/candeactivateform.component';
import { ResolveGuardComponent } from './resolve-guard/resolve-guard.component';
import { PipesComponent } from './Pages/pipes/pipes.component';
import { InbuiltpipesComponent } from './inbuiltpipes/inbuiltpipes.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { MasksensitivePipe } from './custompipes/masksensitive.pipe';
import { FormsComponent } from './Pages/forms/forms.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ObservableComponent } from './Pages/observable/observable.component';
import { HttpComponent } from './Pages/http/http.component';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { InterceptorComponent } from './Pages/interceptor/interceptor.component';
import { customInterceptorInterceptor } from './Interceptor/custom-interceptor.interceptor';
import { AdminModule } from './admin/admin.module';
import { SignalsComponent } from './signals/signals.component';
import { SignalChildComponent } from './signals/signal-child/signal-child.component';

// Creating the injection Token with the string
export const API_URL = new InjectionToken<string>('API_URL');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavlinksComponent,
    SmallbtnComponent,
    HelptextComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    NgforComponent,
    NgifComponent,
    NgstyleComponent,
    NgclassComponent,
    CommunicationComponent,
    ChildComponent,
    OutputComponent,
    OutputChild,
    FilterComponent,
    NonrelatedComponent,
    ChildnamesComponent,
    SearchComponent,
    TemplatereferencevarComponent,
    RefvarcomponentComponent,
    ChildcomponentComponent,
    ChilddetailComponent,
    ViewchildComponent,
    ViewChildrenCompComponent,
    NgtemplatecompComponent,
    NgcontainercompComponent,
    NgcontentcompComponent,
    ChildcontentComponent,
    ContentchildcompComponent,
    ChildtutorialComponent,
    ContentchildrenComponent,
    ChildchildrenComponent,
    LifecyclehooksComponent,
    NgonchangesComponent,
    MessagecomponentComponent,
    NgaftercontentinitComponent,
    ChildContentNg,
    NgondestoryComponent,
    ChilddestroyComponent,
    CustomdirectiveDirective,
    CustomdirectiveComponent,
    HostlistenerDirective,
    HostbindingDirective,
    PropertybindingDirective,
    ConditionalattrDirective,
    StructuralDirective,
    NgswtichComponent,
    ViewencapsulationComponent,
    Child1Component,
    ServiceComponent,
    ServiceSiblingComponent,
    ServiceChildComponent,
    InjectiontokenComponent,
    ComponentserviceComponent,
    ProductDetailComponent,
    HomeComponent,
    GetstartedComponent,
    StartedComponent,
    DirectiveComponent,
    BindingComponent,
    ReferenceVarComponent,
    DecoratortemplateComponent,
    HooksComponent,
    ConceptsComponent,
    ServicesdependencyComponent,
    NotfoundComponent,
    RouterTutComponent,
    RouteParamComponent,
    QueryStringComponent,
    FragmentComponent,
    RouteguardComponent,
    LoginComponent,
    ProtectedRoutesComponent,
    Proteroute1Component,
    Proteroute2Component,
    CandeactivateformComponent,
    ResolveGuardComponent,
    PipesComponent,
    InbuiltpipesComponent,
    CustompipesComponent,
    MasksensitivePipe,
    FormsComponent,
    TemplatedrivenComponent,
    ReactiveformComponent,
    FormbuilderComponent,
    ObservableComponent,
    HttpComponent,
    InterceptorComponent,
    SignalsComponent,
    SignalChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Defining any import are there in the project
    ReactiveFormsModule, // Import the reactive module to use the reactive forms in the angular
    AdminModule,// importing the custom created modules in the parent modules
  ],
  providers: [
    SubscribeService, // defining the service in the module level.
    LogService,
    // defining the interceptor to use.
    provideHttpClient(withInterceptors([customInterceptorInterceptor])), // to use the http client to be ready for injection.
    { provide: API_URL, useValue: 'https://dummyjson.com/comments' }, // at the end angular converts these into the object.
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

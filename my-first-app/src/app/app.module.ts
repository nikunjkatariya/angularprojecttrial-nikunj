import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { Day6ngModelComponent } from './day6ng-model/day6ng-model.component';
import { ParentComponent } from './day6ng-model/parent/parent.component';
import { ChildComponent } from './day6ng-model/child/child.component';
import { ProductsComponent } from './day6ng-model/parent/products/products.component';
import { Day7ngClassComponent } from './day7ng-class/day7ng-class.component';
import { ProductComponent } from './day7ng-class/product/product.component';
import { ProductListComponent } from './day7ng-class/product/product-list/product-list.component';
import { DayViiiServicesComponent } from './day-viii-services/day-viii-services.component';
import { DatetimeService } from './day-viii-services/datetime.service';
import { GetinformationService } from './day-viii-services/getinformation.service';
import { ServicedatachangeComponent } from './day-viii-services/servicedatachange/servicedatachange.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    Day6ngModelComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    Day7ngClassComponent,
    ProductComponent,
    ProductListComponent,
    DayViiiServicesComponent,
    ServicedatachangeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatetimeService,GetinformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

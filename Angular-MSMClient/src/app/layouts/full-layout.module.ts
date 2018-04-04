import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Layouts
import { FullLayoutComponent } from './full-layout.component';
import { SimpleLayoutComponent } from './simple-layout.component';
import { BreadcrumbsComponent } from '../shared/breadcrumb.component';

// Dashboard
import { MenuComponent } from '../shared/menu/menu.component';
import { SiteTreeViewComponent } from '../views/site-tree-view/site-tree-view.component';
import { TreeViewComponent } from '../views/site-tree-view/tree-view.component';
import { SharedModule } from '../shared/shared.module';
import { RollingAlarmComponent } from '../views/rolling-alarm/rolling-alarm.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SharedModule,
    AngularDateTimePickerModule
  ],
  declarations: [
    FullLayoutComponent,
    SimpleLayoutComponent,
    BreadcrumbsComponent,
    SiteTreeViewComponent,
    TreeViewComponent,
    MenuComponent,
    RollingAlarmComponent
  ]
})
export class FullLayoutModule { }

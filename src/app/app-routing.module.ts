import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { SecondComponent } from './second/second.component';
import { ChildBComponent } from './second/child-b/child-b.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent
      }
    ]
  },
  {
    path: 'second-component',
    component: SecondComponent,
    children: [
      {
        path: "child-b",
        component: ChildBComponent
    }
    ]
  },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent}
];

const resolveChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

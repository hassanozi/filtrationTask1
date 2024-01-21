import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=> import('./components/home/home.component').then((m)=>m.HomeComponent),title:'home'},
    {path:'aboutus',loadComponent:()=> import('./components/aboutus/aboutus.component').then((m)=>m.AboutusComponent),title:'aboutus'},
    {path:'services',loadComponent:()=> import('./components/services/services.component').then((m)=>m.ServicesComponent),title:'services'},
    {path:'testymonials',loadComponent:()=> import('./components/testymonials/testymonials.component').then((m)=>m.TestymonialsComponent),title:'services'},
    {path:'contactus',loadComponent:()=> import('./components/contactus/contactus.component').then((m)=>m.ContactusComponent),title:'contactus'},
];

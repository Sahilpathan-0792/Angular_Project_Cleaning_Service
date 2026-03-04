import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Services } from './pages/services/services';
import { Bookings } from './pages/bookings/bookings';
import { authGuard } from './core/auth-guard';
import { ServiceDetails } from './pages/service-details/service-details';


export const routes: Routes = [
    { path:'', component:Home },

    {path:'contact', component:Contact},

    {path:'login', component:Login},

    // {path:'services', component:Services},

    // {path:'bookings', component:Bookings},
    {
        path:'services',
        component:Services,
        canActivate:[authGuard]
    },
    {
        path:'service/:id',
        component:ServiceDetails,
        canActivate:[authGuard]
    },
    {
        path:'bookings',
        component:Bookings,
        canActivate:[authGuard]
    },


    {path:'**',redirectTo:''}
];



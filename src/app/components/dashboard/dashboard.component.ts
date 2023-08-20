import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  
    darkIcon: boolean = false;
    userMenu: boolean = false;
    sidenav: boolean = true;

    constructor(){}

    toggleUserMenu(){
        this.userMenu = !this.userMenu;
    }

    toggleDarkMode(){

        this.darkIcon = !this.darkIcon;

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    }

    toggleSidenav(){
        this.sidenav = !this.sidenav;
    }

    sidenavEventListener(eventData: {sidenav: boolean}){
        console.log('evento disparado');
        
        this.sidenav = eventData.sidenav
    }

}

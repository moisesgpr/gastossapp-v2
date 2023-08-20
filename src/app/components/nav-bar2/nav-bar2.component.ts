import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar2',
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.css']
})
export class NavBar2Component {
    darkIcon: boolean = false;
    userMenu: boolean = false;
    sidenav: boolean = true;

    @Output() sidenavStatus = new EventEmitter<{sidenav: boolean}>

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
        this.sidenavStatus.emit({sidenav: this.sidenav})
    }

}

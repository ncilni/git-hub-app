import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
user;
repos;
userName;
  constructor(private _githubservice:GithubService) {
    this.user=false;
  }
  
  searchUser(){
    this._githubservice.updateUser(this.userName);

    this._githubservice.getUser().subscribe(user => {
      this.user = user;
    })
    this._githubservice.getRepos().subscribe(repos => {
      this.repos = repos;
    })

  }
  ngOnInit() {
  }

}

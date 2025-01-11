import { Component ,OnInit} from '@angular/core';
interface User {
  name: string;
  email: string;
  role: string;
  imageUrl: string;
}

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit { 

  currentUser: User = {
    name: 'Mitchell Dom',
    email: 'mitchelldom@gmail.com',
    role: 'Expert',
    imageUrl: 'assets/images/profile.jpg'
  };

  constructor() { }

  ngOnInit(): void { }
}


import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormModel } from 'src/app/models/form-model';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }


  public mailMessage = new FormModel()

  onSubmit(f:NgForm){
    f.resetForm()
    const ll= document.getElementById('sent-message')
    ll?.classList.add('d-block')
    ll?.classList.remove('d-none')
    
    
    setTimeout(()=>{                          
      ll?.classList.add('d-none')
    
 }, 3000);
     
    

    
  }
}

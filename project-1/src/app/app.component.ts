import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Delta } from 'quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
 
  editorForm!: FormGroup;
  editorContent!:string;
  editorStyle ={
    height: '400px;',
    width: '300px;'
  }
  //formData = this.editorForm.get('editor')?.value;
constructor(){
  //this.editorForm.value= 'new FormGroup';
}

  ngOnInit(): void {   
    this.editorForm = new FormGroup({
    'editor': new FormControl(null)
  })
}



  onSubmit(){
    /*  if (this.editorForm.get('editor')!.value == undefined){
      console.log("Can't send empty");
      
     } else{
      console.log('text');

     } */
     console.log(this.editorForm.get('editor')?.value);
     this.editorContent = this.editorForm.get('editor')?.value;
     

    
  }
  title = 'project-1';
}

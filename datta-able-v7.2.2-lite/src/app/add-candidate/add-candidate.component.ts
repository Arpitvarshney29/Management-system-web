import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  addForm: FormGroup;
  count: number = 0;
  change:boolean=true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loadLoginForm();
    console.log(this.interviewArray.length);
  }

  loadLoginForm() {
    this.addForm = this.fb.group({
      // firstName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      email: ['', Validators.required],
      pMobile: ['', Validators.required],
      sMobile: [],
      blacklist: [],
      college: ['', Validators.required],
      collegeMarks: ['', Validators.required],
      hSchool: ['', Validators.required],
      hMarks: ['', Validators.required],
      iSchool: ['', Validators.required],
      iMarks: ['', Validators.required],
      interview: this.fb.array([this.addinterviewsGroup()])
      // password: ['', Validators.required]
    });
  }

  addinterviewsGroup() {
    return this.fb.group({
      round: [],
      profile: [],
      interviewer: [],
      reference: [],
      joining: [],
      feedback: [],
      result: [],
      // zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
    });
  }

  addInterview() {
    this.count= this.count+1;
    this.change=false;
    console.log('add'+this.count);
    this.interviewArray.push(this.addinterviewsGroup());
  }
  removeInterview(index) {
    this.count= this.count-1;
    console.log('remove'+this.count);
    this.interviewArray.removeAt(index);
  }
  get interviewArray() {
    return <FormArray>this.addForm.get('interview');
  }

  addCandidate() {
    console.log(this.addForm.value);
  }


}

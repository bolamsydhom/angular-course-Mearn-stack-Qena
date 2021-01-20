import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @ViewChild('d') elmentTest: ElementRef; //var elmentTest = document.getElemntById('d')
  inputText = 'hhhhh';
  buttonDisabled = false;
  inputText2 = 'aaaa';
  imgSrc =
    'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png';
  buttonClicked = false;
  elementsArray = [
    { name: 'ahmed', age: 24 },
    { name: 'bola', age: 25 },
    { name: 'hamda', age: 26 },
    { name: 'hamda', age: 27 },
  ];
  constructor() {
    setTimeout(() => {
      this.buttonDisabled = true;
    }, 3000);
  }

  ngOnInit(): void {
    const myPromise = new Promise(this.myPromiseFunctions);
    // myPromise.then((res) => alert(res)).catch(err => console.error(err)).finally(() => console.log('promise ended'));
  }
  myPromiseFunctions(
    resolve: (value: unknown) => void,
    reject: (reason?: any) => void
  ) {
    ///code
    console.log('inPromise');
    
    const x = 6;
    const y = 4;

    if (x + y === 10) {
      resolve(x + y);
    } else {
      reject('server went down');
    }
  }
  onButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
  }

  onInputChange(e): void {
    this.inputText = e.target.value;
  }

  getColor(): string {
    return this.buttonClicked ? 'green' : 'red';
  }

  submit(): void {
    const test = (this.elmentTest.nativeElement as HTMLDivElement).innerHTML;
    console.log(test);
  }
}

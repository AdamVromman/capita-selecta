import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-logger',
  templateUrl: './lifecycle-logger.component.html',
  styleUrls: ['./lifecycle-logger.component.scss']
})
export class LifecycleLoggerComponent {

  logs: String[] = []
  @Input() buttonClicks = 0;

  private pushMessage(message: String) {
    this.logs.push(`${Date.now()}: ${message}`)
  }


  ngOnInit()
  {
    this.pushMessage("")
    this.pushMessage("------------------------------------------------------")

    this.pushMessage("## ngOnInit()")
    this.pushMessage("Initializing...")
    this.pushMessage("------------------------------------------------------")

  }

  ngOnChanges(changes: SimpleChanges) 
  {
    this.pushMessage("")
    this.pushMessage("------------------------------------------------------")
    
    
    
    this.pushMessage("## ngOnChanges()")
    this.pushMessage("Getting changes...")
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.pushMessage(`${propName}: current value = ${cur}, previous value = ${prev}`);
    }
    this.pushMessage("Done getting changes")
    this.pushMessage("------------------------------------------------------")
  }

  ngDoCheck () {
    this.pushMessage("")
    this.pushMessage("------------------------------------------------------")
    this.pushMessage("## ngDoCheck()")
    this.pushMessage("checking changes")
    this.pushMessage("------------------------------------------------------")

  }

  ngAfterContentInit() {
    this.pushMessage("")

    this.pushMessage("------------------------------------------------------")
    this.pushMessage("## ngAfterContentInit()")
    this.pushMessage("Initializing Content")

    this.pushMessage("------------------------------------------------------")
  }

  ngAfterContentChecked() {
    this.pushMessage("")
    this.pushMessage("------------------------------------------------------")
    this.pushMessage("## ngAfterContentChecked()")
    this.pushMessage("Checking content")
    this.pushMessage("------------------------------------------------------")
    
  }

  ngAfterViewInit() {
    this.pushMessage("")
    this.pushMessage("------------------------------------------------------")
    this.pushMessage("## ngAfterViewInit()")
    this.pushMessage("Initializing View")
    this.pushMessage("------------------------------------------------------")
  }

  ngAfterViewChecked() {
    this.pushMessage("")
    this.pushMessage("------------------------------------------------------")
    this.pushMessage("## ngAfterViewChecked()")
    this.pushMessage("Checking view")
    this.pushMessage("------------------------------------------------------")
    
  }
}

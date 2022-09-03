import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialogue-parser',
  templateUrl: './dialogue-parser.component.html',
  styleUrls: ['./dialogue-parser.component.scss']
})
export class DialogueParserComponent implements OnInit {
  public scriptText: string = "faceset: MainCharacters_DreamWorld faceindex: 39 text: \herHey, is it just me or does it seem quieter all of a sudden?";
  @ViewChild('textBox') textBox: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  generateText() {
    let span = this.renderer.createElement('span');
    this.renderer.addClass(span, 's4');
    this.renderer.appendChild(this.textBox.nativeElement, span)
    this.findSet(this.scriptText);
    this.findIndex(this.scriptText);
    this.findText(this.scriptText);
  }

  findSet(script: string): string {
    let startPosition: number = script.search("faceset")+9;
    script = script.slice(startPosition)
    let endPosition: number = script.search(" ");
    script = script.slice(0, endPosition)
    console.log(script)
    return script;
  }

  findIndex(script: string): string {
    let startPosition: number = script.search("faceindex")+11;
    script = script.slice(startPosition)
    let endPosition: number = script.search(" ");
    script = script.slice(0, endPosition)
    console.log(script)
    return script;
  }


  findText(script: string): string {
    let startPosition: number = script.search("text")+6;
    script = script.slice(startPosition)
    console.log(script)
    return script;
  }

}

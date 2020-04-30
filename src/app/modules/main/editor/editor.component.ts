import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {NgxCsvParser, NgxCSVParserError} from "ngx-csv-parser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileValidator} from "ngx-material-file-input";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  fileForm: FormGroup;
  readonly maxSize = 104857600;
  csvRecords: any[] = [];
  header = true;
  dontreable: boolean = false;
  @ViewChild('fileImportInput', {static: false}) fileImportInput: any;

  constructor(private parser: NgxCsvParser,
              private toastrService: ToastrService,
              private _fbuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.fileForm = this._fbuilder.group({
      requiredfile: [
        undefined,
        [FileValidator.maxContentSize(this.maxSize)]
      ]
    })
  }

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;
    // Parse the file you want to select for the operation along with the configuration
    this.parser.parse(files[0], {header: this.header, delimiter: ','})
      .pipe().subscribe((result: Array<any>) => {
      this.toastrService.success("Success", "fichier bien lu!", {
        positionClass: 'toast-top-right'
      })
      console.log(result);
      this.csvRecords = result;
    }, (error: NgxCSVParserError) => {
      this.toastrService.error("Error", "fichier non conforme", {
        positionClass: 'toast-top-left'
      })
      this.fileForm.reset();

    });

  }


  htmlContent: string;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };


}

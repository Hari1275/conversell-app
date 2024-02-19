import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chat-bot-single-list',
  templateUrl: './chat-bot-single-list.component.html',
  styleUrls: ['./chat-bot-single-list.component.scss'],
})
export class ChatBotSingleListComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  message = '';
  imageFile: string = '';
  uploading: boolean = false;
  uploadProgress: number = 0;
  constructor() {}

  ngOnInit(): void {}
  isImage(type: string): boolean {
    const imageTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xm',
    ];
    return imageTypes.includes(type);
  }

  isDocuments(type: string): boolean {
    const docTypes = [
      'pdf',
      'doc',
      'csv',
      'xlsx',
      'application/pdf',
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    return docTypes.includes(type);
  }
  submitMessage(event: any) {
    let value = event.target.value.trim();

    this.message = '';
    if (value.length < 1) return false;
    this.conversation.latestMessage = value;
    return this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: new Date().toISOString(),
      me: true,
    });
  }
  submitSend() {
    let value = this.message.trim();

    this.message = '';
    if (value.length < 1) return false;
    this.conversation.latestMessage = value;
    return this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: new Date().toISOString(),
      me: true,
      image: `../../assets/images/${this.imageFile}`,
    });
  }

  emojiClicked(event: any) {
    this.message += event.emoji.native;
    this.emojiPickerVisible = !this.emojiPickerVisible;
  }

  triggerFileUpload() {
    this.fileInput?.nativeElement.click();
  }

  handleFileUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.uploading = true;
      this.uploadProgress = 0;

      const file = inputElement.files[0];

      const { name, type } = file;
      this.imageFile = name;

      const reader = new FileReader();
      reader.onload = () => {
        this.uploading = false;
        this.conversation.messages.unshift({
          id: 1,
          time: new Date().toISOString(),
          me: true,
          type: type,
          image: reader.result as string,
        });
      };

      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          this.uploadProgress = (e.loaded / e.total) * 100;
        }
      };

      reader.readAsDataURL(file);
    }
  }
}

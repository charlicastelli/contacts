import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/components/service/messages/messages.service';

@Component({
  selector: 'app-message-success',
  templateUrl: './message-success.component.html',
  styleUrls: ['./message-success.component.scss'],
})
export class MessageSuccessComponent implements OnInit{
  
  constructor(public messagesService: MessagesService) {}
  ngOnInit(): void {}
}

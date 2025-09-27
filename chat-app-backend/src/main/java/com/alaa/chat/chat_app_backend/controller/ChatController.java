package com.alaa.chat.chat_app_backend.controller;

import java.time.LocalDateTime;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import com.alaa.chat.chat_app_backend.config.AppConstants;
import com.alaa.chat.chat_app_backend.entities.Message;
import com.alaa.chat.chat_app_backend.entities.Room;
import com.alaa.chat.chat_app_backend.playload.MessageRequest;
import com.alaa.chat.chat_app_backend.repositories.RoomRepository;

@Controller
@CrossOrigin(AppConstants.FRONT_END_DASE_URL)
public class ChatController {

  private RoomRepository roomRepository;

  public ChatController(RoomRepository roomRepository) {
    this.roomRepository = roomRepository;
  }

  // sending and receving messages
  @MessageMapping("/sendMessage/{roomId}")
  @SendTo("/topic/room/{roomId}")
  public Message sendMessage(
    @DestinationVariable String roomId,
    @RequestBody MessageRequest request
  ) {
    Room room = roomRepository.findByRoomId(request.getRoomId());

    Message message = new Message();

    message.setContent(request.getContent());
    message.setSender(request.getSender());
    message.setTimeStamp(LocalDateTime.now());

    if (room != null) {
      room.getMessages().add(message);
      roomRepository.save(room);
    } else{
      throw new RuntimeException("Room not found");
    }

    return message;
  }
}

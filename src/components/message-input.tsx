import { Button, Col, Input, message as antdMessage } from "antd";
import { sendMessage } from "../apis/messages";
import { useState } from "react";

export const MessageInput = () => {
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Col>
      <Input
        placeholder="接收方"
        onChange={(e) => setReceiver(e.target.value)}
      />
      <Input.TextArea
        placeholder="内容"
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        type="primary"
        onClick={() => {
          sendMessage(receiver, message)
            .then()
            .catch((e) => antdMessage.error(e));
        }}
      >
        发送
      </Button>
    </Col>
  );
};

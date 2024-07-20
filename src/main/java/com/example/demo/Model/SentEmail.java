package com.example.demo.Model;

import java.time.LocalDateTime;

public class SentEmail {
	 private String recipient;
	    private String message;
	    public String getRecipient() {
			return recipient;
		}
		public void setRecipient(String recipient) {
			this.recipient = recipient;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public LocalDateTime getTimestamp() {
			return timestamp;
		}
		public void setTimestamp(LocalDateTime timestamp) {
			this.timestamp = timestamp;
		}
		private LocalDateTime timestamp;
		@Override
		public String toString() {
			return "SentEmail [recipient=" + recipient + ", message=" + message + ", timestamp=" + timestamp + "]";
		}
}

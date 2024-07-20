package com.example.demo.Model;

public class Vendor {
	private String name;
    private String email;
    private String upi;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUpi() {
		return upi;
	}
	public void setUpi(String upi) {
		this.upi = upi;
	}
	@Override
	public String toString() {
		return "Vendor [name=" + name + ", email=" + email + ", upi=" + upi + "]";
	}
    
}

package com.example.demo.Model;
public class Employee {
	 private String name;
	    private String designation;
	    private double ctc;
	    private String email;
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getDesignation() {
			return designation;
		}
		public void setDesignation(String designation) {
			this.designation = designation;
		}
		public double getCtc() {
			return ctc;
		}
		public void setCtc(double ctc) {
			this.ctc = ctc;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		@Override
		public String toString() {
			return "Employee [name=" + name + ", designation=" + designation + ", ctc=" + ctc + ", email=" + email
					+ "]";
		}
	    
	    
}

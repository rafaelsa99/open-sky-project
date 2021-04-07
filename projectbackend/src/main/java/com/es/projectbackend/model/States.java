package com.es.projectbackend.model;

import java.util.Collection;

public class States {
	private int time; // The time which the state vectors in this response are associated with. All vectors represent the state of a vehicle with the interval [time−1,time].
    private Collection<Plane> states; // The state vectors
	
    public int getTime() {
		return time;
	}
	public void setTime(int time) {
		this.time = time;
	}
	public Collection<Plane> getStates() {
		return states;
	}
	public void setStates(Collection<Plane> flightStates) {
		this.states = flightStates;
	}
    
    
}

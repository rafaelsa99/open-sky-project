package org.acme;

import io.smallrye.reactive.messaging.kafka.Record;
import org.eclipse.microprofile.reactive.messaging.Incoming;
import org.jboss.logging.Logger;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class KafkaConsumer {
    
    private List<String> events = new ArrayList<>();
	private List<String> logs = new ArrayList<>();

    @Incoming("kafka-in")
    public void event(String event){
		events.add(event);
	}

	@Incoming("kafka-in-logs")
    public void log(String log){
		logs.add(log);
	}

    public String getEvents(){
		return JsonUtility.toJsonString(events);
	}

	public String getLogs(){
		return JsonUtility.toJsonString(logs);
	}
 }
    

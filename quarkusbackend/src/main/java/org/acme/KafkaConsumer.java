package org.acme;

import io.smallrye.reactive.messaging.kafka.Record;
import org.eclipse.microprofile.reactive.messaging.Incoming;
import org.jboss.logging.Logger;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class KafkaConsumer {
    
    private Collection<Message> messages;
    private final Logger logger = Logger.getLogger(KafkaConsumer.class);

    @Incoming("kafka-in")
    public List<Message> message(){
		if(messages != null) {
			String jsonString = JsonUtility.toJsonString(messages);
		}
		logger.info("No messages!");
		return new ArrayList<>();
	}

    
    }
    

package org.acme;

import java.io.IOException;

import org.codehaus.jackson.map.ObjectMapper;

public final class JsonUtility {

    public static String toJsonString(Object obj) {
        String jsonString = "";
        ObjectMapper objMpr = new ObjectMapper();

        try {
            jsonString = objMpr.writeValueAsString(obj);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return jsonString;
    }

    public static <I> I toObject(String jsonString, Class<I> cls) {
        I result = null;
        ObjectMapper objMpr = new ObjectMapper();
        try {
            result = objMpr.readValue(jsonString, cls);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
    private JsonUtility() {

    } 
} 
     
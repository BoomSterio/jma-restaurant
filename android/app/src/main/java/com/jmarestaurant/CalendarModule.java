package com.jmarestaurant;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.Promise;

public class CalendarModule extends ReactContextBaseJavaModule {
  CalendarModule(ReactApplicationContext context) {
    super(context);
  }

  @ReactMethod
  public void createCalendarEvent(String name, Number visitors, String date, Promise promise ) {
    try {
      String eventId = name + date;
      promise.resolve(eventId);
    } catch(Exception e) {
      promise.reject("Create Event Error", "Error parsing date", e);
    }
  }

  @Override
  public String getName() {
    return "CalendarModule";
  }
}


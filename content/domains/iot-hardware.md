# IoT & Hardware

Reference notes for boards, sensors, protocols, and field deployments.

```text
iot-hardware/
├── boards/
├── sensors/
├── protocols/
├── firmware/
└── wiring/
```

## ESP32 MQTT sketch outline

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

void publishReading(float value) {
  client.publish("lab/temperature", String(value).c_str());
}
```

Record power requirements, pinouts, calibration steps, and recovery procedures.

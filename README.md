# **Arduino Parking Sensor**

### **Components used:**
- Arduino xx board
- 2 HC-SR04 Ultrasonic sensors
- 3 led
    - *1 green led*
    - *1 yellow led*
    - *1 red led*
- 3 resistors
    - *3x 220 Ω (for leds)*
- 5V Piezo Buzzer

### **How it works:**
The sensors read the distance from the closest object and they return it to the board. The distance is processed and depending of its value the speaker will emit some beeps at a different frequency and one of the three LEDs will light up.

### **I/O:**
> **Inputs**:
> | Sensor | Input |
> | :------ | :------ |
> | Rear Sensor | The distance from the closest object behind the car
> | Front Sensor | The distance from the closest object in front of the car

> **Outputs**:
> | Distance (d) | LED | Buzzer |
> | :------ | :------ | :------ |
> | > 3 meters | No output | No output |
> | 3 m < d < 2 m | Green led (fix) | 1 Beep / 2 seconds
> | 2 m < d < 1 m | Yellow led (fix) | 1 Beep / 1 seconds
> | 1 m < d < 20 cm | Red led (fix) | 1 Beep / 0.5 seconds
> | < 20 cm | Red led (blinking) | Continuous beep

### **How to use the code:**
1. Download the zipped with the **Code** menu or by clicking [this link](https://github.com/andrea-artuso/arduino-parking-sensor/archive/refs/heads/main.zip).
2. Extract the file in any folder of your computer
3. Enter the **src** folder and open the **.ino** file with Arduino IDE ([How to install Arduino IDE](https://docs.arduino.cc/software/ide-v1/tutorials/Windows))
4. Connect your Arduino board to your pc and **Load the sketch**

### **Wiring diagram:**
![wiring diagram](./media/Arduino%20parking%20sensors.jpg)
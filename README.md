# **Arduino Parking Sensor**

### **Components used:**
- Arduino UNO board
- 2 HC-SR04 Ultrasonic sensors
- 1 led bar
- 2 direction LED (green/red)
- 5V Buzzer

### **How it works:**
The sensors read the distance from the closest object and they return it to the board. The distance is processed and depending of its value the speaker will emit some beeps and the led bar will increasily turning on. The red and green LEDs indicate the direction of the closest object.

### **I/O:**
> **Inputs**:
> | Sensor | Input |
> | :------ | :------ |
> | Rear Sensor | The distance from the closest object behind the car
> | Front Sensor | The distance from the closest object in front of the car

> **Outputs**:
> | Distance (d) | LED | Buzzer |
> | :------ | :------ | :------ |
> | > 1 meter | No output | No output |
> | 1 m < d < 80 cm | 1/5 | 1 Beep / 1.5 seconds
> | 80 cm < d < 40 cm | 2/5 | 1 Beep / 1 second
> | 40 cm < d < 20 cm | 3/5 | 1 Beep / 0.5 seconds
> | 20 cm < d < 10 cm | 4/5 | 1 Beep / 0.3 seconds
> | d < 10 cm | 5/5 | Continuos beep

### **How to use the code:**
1. Download the zipped with the **Code** menu or by clicking [this link](https://github.com/andrea-artuso/arduino-parking-sensor/archive/refs/heads/main.zip).
2. Extract the file in any folder of your computer
3. Enter into the **src** folder and open the **.ino** file with Arduino IDE ([How to install Arduino IDE](https://docs.arduino.cc/software/ide-v1/tutorials/Windows))
4. Connect your Arduino board to your pc and **Load the sketch**

### **How to change distance values:**
1. Go to the *.ino* file inside the **/src** folder
2. In the first part, edit the **constants** called *DISTANCE_X* according to your necessities
3. Compile and upload the sketch to your Arduino board 

### **Wiring diagram:**
![wiring diagram](./media/Arduino%20parking%20sensors.jpg)

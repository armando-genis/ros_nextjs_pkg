## ros_nextjs_pkg
![alt text](https://github.com/armando-genis/ros_nextjs_pkg/blob/main/images_git/next_ros.png)
ROS2 y next js 13 to deploy a dashboard. 


## Deployment

To deploy this project run 

```bash
  cd ~/ros2_ws
  source /opt/ros/foxy/setup.bash
  source install/setup.bash
  ros2 launch ros_nextjs_pkg start_next_app.launch.py
```
this will automatically run `npm run dev` to deploy the page. 

## Install

```bash
  sudo apt install ros-foxy-rosbridge-server
  sudo apt install nodejs
  sudo apt install npm
```

## Modules installed in the Nextjs app
```bash
  npm install roslib
  npm install bufferutil utf-8-validate
  npm install three-obj-loader
  npm install three
  npm i react-chartjs-2 chart.js

```
## Documentation

- [Worldview](https://webviz.io/worldview/#/)
- [tf2_web_republisher](https://github.com/RobotWebTools/tf2_web_republisher)
- [PointCloud2](https://ashishchaudhary.in/awesome-wasm)
- [PointCloud2_2](http://docs.ros.org/en/melodic/api/sensor_msgs/html/msg/PointCloud2.html)
- [Three js](https://threejs.org/)



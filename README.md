# ros_nextjs_pkg
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


## Documentation

[Worldview](https://webviz.io/worldview/#/)